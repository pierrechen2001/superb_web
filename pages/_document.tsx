import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh-TW">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/images/lg.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/lg.png" />

        {/* Basic SEO */}
        <meta name="application-name" content="Superb Tech Studio" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="description" content="精湛資訊工作室 - 專業網頁製作開發、AI 技術整合、行動應用與自動化服務。" />
        <meta name="keywords" content="網頁製作, 網頁製作開發, 網站開發, Next.js, React, AI 整合, ChatGPT, LineBot, 前端, 後端, 台北, 客製化網站, 網頁設計" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="zh_TW" />
        <meta property="og:title" content="精湛資訊工作室 Superb Tech Studio" />
        <meta property="og:description" content="專業網頁製作開發與 AI 整合，打造高效能的數位體驗。" />
        <meta property="og:image" content="/images/brand_yellow.png" />
        <meta property="og:url" content="https://studio.superb-tutor.com" />
        <meta property="og:site_name" content="Superb Tech Studio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="精湛資訊工作室 Superb Tech Studio" />
        <meta name="twitter:description" content="專業網頁製作開發與 AI 整合，打造高效能的數位體驗。" />
        <meta name="twitter:image" content="/images/brand_yellow.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

