# 共享文件系統使用說明

## 功能說明

這個系統允許您將 HTML 文件放在 `shared_file` 資料夾中，客戶可以通過連結訪問，並需要輸入密碼才能查看文件內容。

## 使用步驟

### 1. 添加 HTML 文件

將您的 HTML 文件放入 `shared_files/` 資料夾中（注意：不在 `public` 資料夾中，以確保密碼保護）。

例如：
- `shared_files/proposal.html`
- `shared_files/design.html`
- `shared_files/quote.html`

### 2. 配置密碼

編輯 `shared_file_config.json` 文件，為每個文件設置密碼：

```json
{
  "files": {
    "proposal.html": {
      "password": "客戶專屬密碼123",
      "name": "專案提案書"
    },
    "design.html": {
      "password": "設計稿密碼456",
      "name": "設計稿展示"
    }
  },
  "defaultPassword": "default123"
}
```

- `files`: 為每個文件設置專屬密碼和顯示名稱
- `defaultPassword`: 如果文件沒有在 `files` 中配置，將使用此預設密碼

### 3. 分享連結給客戶

將以下格式的連結分享給客戶：

```
https://您的網址/shared_file/文件名.html
```

例如：
- `https://studio.superb-tutor.com/shared_file/proposal.html`
- `https://studio.superb-tutor.com/shared_file/design.html`

### 4. 客戶查看流程

1. 客戶點擊您提供的連結
2. 系統會顯示密碼輸入頁面
3. 客戶輸入您提供的密碼
4. 驗證通過後，客戶可以查看 HTML 文件內容
5. 在同一個瀏覽器會話中，客戶無需重複輸入密碼

## 安全說明

- 文件存放在 `shared_files/` 資料夾中（不在 `public` 資料夾），無法直接通過 URL 訪問
- 密碼驗證在客戶端和服務端雙重進行
- 驗證狀態保存在 `sessionStorage` 和 cookie 中，關閉瀏覽器後需要重新輸入密碼
- 文件通過 API 路由提供，API 會檢查驗證 token，確保安全訪問

## 注意事項

1. 文件名不能包含 `..`、`/` 或 `\` 等特殊字符
2. 建議為每個客戶設置不同的密碼
3. 定期更新密碼以提高安全性
4. HTML 文件可以包含任何內容，包括 CSS 和 JavaScript

## 範例

系統已包含一個範例文件 `example.html`，您可以訪問：

```
/shared_file/example.html
```

預設密碼：`demo123`（可在配置文件中修改）

