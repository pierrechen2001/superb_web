# 聯絡表單設置指南

本指南說明如何在 Vercel 上啟用聯絡表單的郵件發送功能。

## 🚀 快速設置步驟

### 1️⃣ 安裝 Resend 套件

在專案根目錄執行：

```bash
npm install resend
```

### 2️⃣ 取得 Resend API Key

1. 前往 [Resend 官網](https://resend.com) 註冊帳號（免費版每月可發送 3,000 封郵件）
2. 登入後進入 [API Keys 頁面](https://resend.com/api-keys)
3. 點擊「Create API Key」
4. 複製產生的 API Key（格式：`re_xxxxx`）

### 3️⃣ 設定環境變數

#### 本地開發（macOS）

在專案根目錄建立 `.env.local` 檔案：

```bash
# Resend API Key（必填）
RESEND_API_KEY=re_你的_api_key_在這裡

# 接收聯絡表單的 Email（選填，預設為 superb.taipei@gmail.com）
CONTACT_EMAIL=superb.taipei@gmail.com
```

#### Vercel 部署

1. 登入 [Vercel Dashboard](https://vercel.com/dashboard)
2. 選擇你的專案
3. 進入 `Settings` → `Environment Variables`
4. 新增以下變數：
   - **Key**: `RESEND_API_KEY`  
     **Value**: `re_你的_api_key`
   - **Key**: `CONTACT_EMAIL`  
     **Value**: `superb.taipei@gmail.com`（或你想接收郵件的信箱）
5. 點擊「Save」
6. 重新部署專案（Vercel 會自動偵測環境變數變更）

### 4️⃣ 驗證發件地址（選填，推薦）

Resend 預設使用 `onboarding@resend.dev` 作為發件地址，若想使用自訂網域（如 `noreply@yourdomain.com`）：

1. 在 Resend Dashboard 進入 [Domains](https://resend.com/domains)
2. 點擊「Add Domain」
3. 輸入你的網域（如 `yourdomain.com`）
4. 依照指示在 DNS 設定中新增 DKIM、SPF、DMARC 記錄
5. 驗證成功後，修改 `app/api/contact/route.ts` 的 `from` 欄位：
   ```ts
   from: 'Superb Tech Studio <noreply@yourdomain.com>',
   ```

## 📧 郵件內容說明

當有人提交表單時，你會收到一封包含以下資訊的郵件：

- **姓名**：提交者的姓名
- **Email**：提交者的 Email（可直接回覆）
- **訊息內容**：完整的訊息內容

郵件範例：

```
主旨：🆕 新的聯絡表單：來自 王小明

姓名：王小明
Email：example@gmail.com

訊息內容：
您好，我對貴公司的網站開發服務很有興趣...
```

## ✅ 測試

1. 啟動本地開發伺服器：
   ```bash
   npm run dev
   ```

2. 前往 `http://localhost:3000/#contact`

3. 填寫表單並提交

4. 檢查：
   - 瀏覽器是否顯示「感謝您的聯繫！我們會盡快回覆您。」
   - 你的 Email 信箱是否收到郵件
   - 檢查垃圾郵件資料夾

## 🔧 進階配置

### 自訂郵件樣式

編輯 `app/api/contact/route.ts` 中的 `html` 內容，可自訂郵件的 HTML 樣式。

### 增加驗證碼（reCAPTCHA）

若要防止垃圾郵件，可整合 Google reCAPTCHA v3：

1. 安裝 `react-google-recaptcha-v3`
2. 在 `ContactSection.tsx` 中加入 reCAPTCHA token
3. 在 API route 中驗證 token

### Rate Limiting

目前 API 沒有流量限制，建議在生產環境加入 rate limiting：

- 使用 Vercel Edge Config + KV
- 或使用 Upstash Rate Limit

## 🐛 常見問題

### Q: 收不到郵件？

1. 檢查環境變數是否正確設定
2. 檢查 Vercel Logs 是否有錯誤訊息
3. 確認 Resend API Key 狀態（是否過期、超過配額）
4. 檢查垃圾郵件資料夾

### Q: 郵件被標記為垃圾郵件？

1. 建議使用自訂網域並完成 DNS 驗證
2. 設定 SPF、DKIM、DMARC 記錄

### Q: 免費版 Resend 有什麼限制？

- 每月 3,000 封郵件
- 每日 100 封郵件
- 最多 5 個網域驗證
- 詳見 [Resend Pricing](https://resend.com/pricing)

## 📚 相關連結

- [Resend 官方文件](https://resend.com/docs)
- [Next.js App Router API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Vercel 環境變數](https://vercel.com/docs/projects/environment-variables)

---

如有任何問題，請參考上述文件或聯繫技術支援。

