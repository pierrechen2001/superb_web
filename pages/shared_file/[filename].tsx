import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import sharedFileConfig from '../../shared_file_config.json'

interface FileConfig {
  password: string
  name: string
}

export default function SharedFileViewer() {
  const router = useRouter()
  const { filename } = router.query
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [htmlContent, setHtmlContent] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // 檢查是否已經通過驗證（使用 sessionStorage）
    if (filename && typeof window !== 'undefined') {
      const authKey = `shared_file_auth_${filename}`
      const isAuth = sessionStorage.getItem(authKey) === 'true'
      if (isAuth) {
        loadFile()
      }
    }
  }, [filename])

  const loadFile = async () => {
    if (!filename || typeof filename !== 'string') return
    
    setLoading(true)
    try {
      // 從 cookie 獲取驗證 token
      const authKey = `shared_file_auth_${filename}`
      const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=')
        acc[key] = value
        return acc
      }, {} as Record<string, string>)
      const authToken = cookies[authKey] || sessionStorage.getItem(authKey)
      
      const response = await fetch(`/api/shared_file/${filename}`, {
        headers: {
          'x-auth-token': authToken === 'true' || authToken === 'authenticated' ? 'authenticated' : ''
        }
      })
      
      if (response.ok) {
        const content = await response.text()
        setHtmlContent(content)
        setIsAuthenticated(true)
        setError('')
      } else if (response.status === 401) {
        // 未授權，清除驗證狀態
        if (typeof window !== 'undefined') {
          sessionStorage.removeItem(authKey)
          document.cookie = `${authKey}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
        }
        setIsAuthenticated(false)
        setError('請輸入密碼')
      } else {
        setError('文件不存在或無法讀取')
      }
    } catch (err) {
      setError('載入文件時發生錯誤')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!filename || typeof filename !== 'string') {
      setError('無效的文件名稱')
      return
    }

    // 檢查密碼
    const fileConfig = (sharedFileConfig.files as Record<string, FileConfig>)[filename]
    const correctPassword = fileConfig?.password || sharedFileConfig.defaultPassword

    if (password === correctPassword) {
      // 保存驗證狀態到 sessionStorage 和設置 cookie
      if (typeof window !== 'undefined') {
        const authKey = `shared_file_auth_${filename}`
        sessionStorage.setItem(authKey, 'true')
        // 設置 cookie 供 API 路由驗證
        document.cookie = `${authKey}=authenticated; path=/; max-age=86400` // 24小時
      }
      loadFile()
    } else {
      setError('密碼錯誤，請重新輸入')
      setPassword('')
    }
  }

  // 如果已通過驗證，顯示 HTML 內容
  if (isAuthenticated && htmlContent) {
    return (
      <>
        <Head>
          <title>
            {(sharedFileConfig.files as Record<string, FileConfig>)[filename as string]?.name || filename} - 共享文件
          </title>
        </Head>
        <div 
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          style={{ 
            width: '100%', 
            minHeight: '100vh',
            margin: 0,
            padding: 0
          }}
        />
      </>
    )
  }

  // 顯示密碼輸入表單
  return (
    <>
      <Head>
        <title>查看共享文件 - 需要密碼</title>
      </Head>
      <div 
        className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
        }}
      >
        {/* 背景裝飾 - 類似 Hero Section */}
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #2768A8 0%, #0F172A 70%)',
          }}
        />
        
        {/* 玻璃質感卡片 */}
        <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-md border border-white/10">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <img
              src="/images/brand_white.png"
              alt="Superb Tech Studio"
              className="h-12 w-auto mx-auto mb-6 opacity-90"
            />
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-energy-yellow mb-3">
              查看共享文件
            </h1>
            <p className="text-muted-gray text-base">
              {filename ? (
                <>
                  文件：<span className="font-semibold text-light-gray">
                    {(sharedFileConfig.files as Record<string, FileConfig>)[filename as string]?.name || filename}
                  </span>
                </>
              ) : (
                '載入中...'
              )}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-light-gray mb-3">
                請輸入文件檢視密碼
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl text-light-gray placeholder-muted-gray focus:outline-none focus:border-energy-yellow transition-colors text-base"
                placeholder="輸入密碼"
                required
                autoFocus
              />
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4">
                <p className="text-red-200 text-sm">{error}</p>
              </div>
            )}

            {loading && (
              <div className="text-center">
                <p className="text-muted-gray">載入中...</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-tech-blue hover:bg-tech-blue/90 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 ${
                loading ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-[0_0_20px_rgba(39,104,168,0.6)] transform hover:scale-105'
              }`}
            >
              {loading ? (
                <>
                  <span className="animate-pulse">驗證中...</span>
                </>
              ) : (
                '查看文件'
              )}
            </button>
          </form>

          <div className="mt-8 text-center pt-6 border-t border-white/10">
            <p className="text-muted-gray text-sm">
              此文件受密碼保護
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

