import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh-TW">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/images/lg.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/lg.png" />

        {/* Basic SEO */}
        <title>精湛資訊工作室 Superb Tech Studio｜現代網站開發與 AI 整合團隊</title>
        <meta name="application-name" content="精湛資訊工作室 Superb Tech Studio" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="description" content="精湛資訊工作室 Superb Tech Studio - 專業網頁製作開發、AI 技術整合、行動應用與自動化服務。精湛資訊工作室提供網站開發、AI 整合、ChatGPT、LineBot 等服務。" />
        <meta name="keywords" content="精湛資訊工作室, Superb Tech Studio, 網頁製作, 網頁製作開發, 網站開發, Next.js, React, AI 整合, ChatGPT, LineBot, 前端, 後端, 台北, 客製化網站, 網頁設計" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="精湛資訊工作室 Superb Tech Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="zh_TW" />
        <meta property="og:title" content="精湛資訊工作室 Superb Tech Studio｜現代網站開發與 AI 整合團隊" />
        <meta property="og:description" content="精湛資訊工作室 Superb Tech Studio - 專業網站開發、AI 技術整合與數位轉型解決方案。提供 Next.js、React 開發、ChatGPT 整合、LineBot 等服務，協助企業打造高效能數位體驗。" />
        <meta property="og:image" content="/images/brand_yellow.png" />
        <meta property="og:url" content="https://studio.superb-tutor.com" />
        <meta property="og:site_name" content="精湛資訊工作室 Superb Tech Studio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="精湛資訊工作室 Superb Tech Studio｜現代網站開發與 AI 整合團隊" />
        <meta name="twitter:description" content="精湛資訊工作室 Superb Tech Studio - 專業網站開發、AI 技術整合與數位轉型解決方案。提供 Next.js、React 開發、ChatGPT 整合、LineBot 等服務。" />
        <meta name="twitter:image" content="/images/brand_yellow.png" />

        {/* Additional SEO */}
        <meta name="google-site-verification" content="googleeff06e688bafe93f" />
        <link rel="canonical" href="https://studio.superb-tutor.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

