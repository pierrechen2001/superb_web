import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  // 優化頁面載入性能
  useEffect(() => {
    // 移除 Next.js 預設的 loading 樣式
    const style = document.getElementById('__next-loading')
    if (style) {
      style.remove()
    }
  }, [])

  return (
    <>
      <Head>
        {/* 預載入重要資源 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS 預取 */}
        <link rel="dns-prefetch" href="//api.resend.com" />
        
        {/* 基本 meta 標籤 */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* 性能優化 */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}

