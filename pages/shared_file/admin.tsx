import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Copy, Check, FileText, Lock } from 'lucide-react'
import sharedFileConfig from '../../shared_file_config.json'

interface FileConfig {
  password: string
  name: string
}

interface FileInfo {
  filename: string
  name: string
  password: string
}

export default function SharedFileAdmin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [files, setFiles] = useState<FileInfo[]>([])

  // 管理員密碼（可以從環境變數或配置文件讀取）
  const ADMIN_PASSWORD = (sharedFileConfig as any).adminPassword || 'superb_admin_2025'

  useEffect(() => {
    // 檢查是否已經通過驗證
    if (typeof window !== 'undefined') {
      const isAuth = sessionStorage.getItem('shared_file_admin_auth') === 'true'
      if (isAuth) {
        setIsAuthenticated(true)
        loadFiles()
      }
    }
  }, [])

  const loadFiles = () => {
    const filesList: FileInfo[] = []
    const filesConfig = sharedFileConfig.files as Record<string, FileConfig>
    
    Object.keys(filesConfig).forEach((filename) => {
      filesList.push({
        filename,
        name: filesConfig[filename].name || filename,
        password: filesConfig[filename].password || sharedFileConfig.defaultPassword
      })
    })
    
    setFiles(filesList)
  }

  const handleLogoClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)
    
    // 點擊 5 次後顯示密碼輸入欄
    if (newCount >= 5) {
      setShowPasswordInput(true)
      setClickCount(0) // 重置計數
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password === ADMIN_PASSWORD) {
      // 保存驗證狀態
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('shared_file_admin_auth', 'true')
      }
      setIsAuthenticated(true)
      loadFiles()
      setPassword('')
      setShowPasswordInput(false)
    } else {
      setError('密碼錯誤，請重新輸入')
      setPassword('')
    }
  }

  const copyShareMessage = async (file: FileInfo, index: number) => {
    // 使用固定的生產環境 URL
    const baseUrl = 'https://studio.superb-tutor.com'
    const shareUrl = `${baseUrl}/shared_file/${file.filename}`
    
    // 格式化訊息，讓連結可以直接點擊
    const message = `📄 ${file.name}\n\n🔗 文件連結：${shareUrl}\n\n🔑 檢視密碼：${file.password}\n\n此文件由精湛資訊工作室 Superb Tech Studio 分享，請妥善留存密碼，文件可檢視期為 2 年。`

    try {
      await navigator.clipboard.writeText(message)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('複製失敗:', err)
      alert('複製失敗，請手動複製')
    }
  }

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('shared_file_admin_auth')
    }
    setIsAuthenticated(false)
    setShowPasswordInput(false)
    setPassword('')
  }

  // 如果已通過驗證，顯示管理頁面
  if (isAuthenticated) {
    return (
      <>
        <Head>
          <title>共享文件管理 - 精湛資訊工作室</title>
        </Head>
        <div 
          className="min-h-screen p-6 md:p-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
          }}
        >
          {/* 背景裝飾 */}
          <div 
            className="absolute inset-0 z-0 opacity-20"
            style={{
              background: 'radial-gradient(circle at 50% 50%, #2768A8 0%, #0F172A 70%)',
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-energy-yellow mb-2">
                  共享文件管理
                </h1>
                <p className="text-muted-gray">管理所有共享文件與分享連結</p>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-white/5 border border-white/20 rounded-xl text-light-gray hover:bg-white/10 transition-colors text-sm"
              >
                登出
              </button>
            </div>

            {/* 文件列表 */}
            <div className="grid gap-4">
              {files.length === 0 ? (
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
                  <p className="text-muted-gray">目前沒有共享文件</p>
                </div>
              ) : (
                files.map((file, index) => (
                  <div
                    key={file.filename}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="w-5 h-5 text-energy-yellow" />
                          <h3 className="text-xl font-semibold text-light-gray">
                            {file.name}
                          </h3>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-gray mb-4">
                          <span className="flex items-center gap-1">
                            <Lock className="w-4 h-4" />
                            密碼：{file.password}
                          </span>
                          <span>檔案：{file.filename}</span>
                        </div>
                        <div className="text-sm text-muted-gray">
                          <span className="text-light-gray">連結：</span>
                          <a
                            href={`https://studio.superb-tutor.com/shared_file/${file.filename}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 px-2 py-1 rounded text-tech-blue hover:text-energy-yellow hover:underline transition-colors"
                          >
                            https://studio.superb-tutor.com/shared_file/{file.filename}
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={() => copyShareMessage(file, index)}
                        className="flex items-center gap-2 px-4 py-2 bg-tech-blue hover:bg-tech-blue/90 text-white rounded-xl transition-all hover:shadow-[0_0_20px_rgba(39,104,168,0.6)] whitespace-nowrap"
                      >
                        {copiedIndex === index ? (
                          <>
                            <Check className="w-4 h-4" />
                            已複製
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            複製分享訊息
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* 統計資訊 */}
            <div className="mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-gray text-sm mb-1">總文件數</p>
                  <p className="text-2xl font-bold text-light-gray">{files.length}</p>
                </div>
                <div className="text-right">
                  <p className="text-muted-gray text-sm mb-1">預設密碼</p>
                  <p className="text-lg font-semibold text-energy-yellow">
                    {sharedFileConfig.defaultPassword}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  // 顯示登入頁面
  return (
    <>
      <Head>
        <title>共享文件管理 - 需要驗證</title>
      </Head>
      <div 
        className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
        }}
      >
        {/* 背景裝飾 */}
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #2768A8 0%, #0F172A 70%)',
          }}
        />
        
        {/* 玻璃質感卡片 */}
        <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-md border border-white/10">
          {/* Logo/Brand - 可點擊的小機關（無提示） */}
          <div className="text-center mb-8">
            <button
              onClick={handleLogoClick}
              className="transition-transform hover:scale-105 active:scale-95"
            >
              <img
                src="/images/brand_white.png"
                alt="Superb Tech Studio"
                className="h-12 w-auto mx-auto mb-6 opacity-90 cursor-pointer"
              />
            </button>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-energy-yellow mb-3">
              共享文件管理
            </h1>
            <p className="text-muted-gray text-base">
              管理所有共享文件與分享連結
            </p>
          </div>

          {/* 隱藏的密碼輸入表單 */}
          {showPasswordInput && (
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              style={{
                animation: 'fadeIn 0.3s ease-in'
              }}
            >
              <div>
                <label htmlFor="admin-password" className="block text-sm font-medium text-light-gray mb-3">
                  請輸入管理員密碼
                </label>
                <input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl text-light-gray placeholder-muted-gray focus:outline-none focus:border-energy-yellow transition-colors text-base"
                  placeholder="輸入管理員密碼"
                  required
                  autoFocus
                />
              </div>

              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4">
                  <p className="text-red-200 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(39,104,168,0.6)] transform hover:scale-105"
              >
                進入管理頁面
              </button>
            </form>
          )}

        </div>
      </div>
    </>
  )
}

