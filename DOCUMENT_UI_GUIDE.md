# 文件 UI 規範指南

本文件定義了共享文件系統的統一 UI 設計規範，所有文件應遵循此規範以保持一致的視覺風格。

---

## 📋 目錄

1. [顏色系統](#顏色系統)
2. [字體規範](#字體規範)
3. [布局與間距](#布局與間距)
4. [組件樣式](#組件樣式)
5. [HTML 結構範例](#html-結構範例)
6. [響應式設計](#響應式設計)
7. [打印樣式](#打印樣式)

---

## 🎨 顏色系統

### CSS 變數定義

```css
:root {
  --bg: linear-gradient(180deg, #1a405f 0%, #0c2847 100%);
  --card: #ffffff;
  --ink: #1f2937;
  --muted: #6b7280;
  --brand: #2768a8;
  --accent: #f3b237;
  --border: #e5e7eb;
}
```

### 顏色用途

| 變數 | 色碼 | 用途 |
|------|------|------|
| `--bg` | 深藍漸層 | 頁面背景 |
| `--card` | `#ffffff` | 文件主體背景 |
| `--ink` | `#1f2937` | 主要文字顏色 |
| `--muted` | `#6b7280` | 次要文字、註解 |
| `--brand` | `#2768a8` | 品牌色（藍色）- 標題、連結、重點 |
| `--accent` | `#f3b237` | 強調色（黃色）- 標籤、高亮 |
| `--border` | `#e5e7eb` | 邊框、分隔線 |

---

## 📝 字體規範

### 字體堆疊

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", 
             "Ubuntu", "Droid Sans", sans-serif, "Noto Sans TC", 
             "PingFang TC", "Microsoft JhengHei";
```

### 字體大小

| 元素 | 桌面版 | 手機版 | 字重 | 行高 |
|------|--------|--------|------|------|
| 基礎文字 | 15px | 15px | 400 | 1.7 |
| H1 標題 | 26px | 22px | 600 | 1.3 |
| H2 標題 | 19px | 17px | 600 | 1.3 |
| H3 標題 | 17px | 16px | 600 | 1.3 |
| 表格文字 | 14px | 13px | 400 | - |
| 標籤文字 | 12px | 12px | 600 | - |

---

## 📐 布局與間距

### 容器結構

```css
.wrap {
  max-width: 1000px;
  margin: 80px auto;      /* 上下留白 80px */
  padding: 0 20px;
}

.doc {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 
              0 8px 24px rgba(0, 0, 0, 0.3);
  padding: 32px 40px;     /* 桌面版內距 */
}
```

### 間距規範

| 元素 | 間距 |
|------|------|
| 段落間距 | 12px |
| H1 下邊距 | 20px |
| H2 上邊距 | 28px，下邊距 14px |
| H3 上邊距 | 20px，下邊距 10px |
| 分隔線 (hr) | 上下各 24px |
| 表格間距 | 上下各 20px |
| 列表間距 | 上下各 12px，項目間 6-8px |

---

## 🧩 組件樣式

### 1. 標題與標籤

#### H1 標題
```html
<h1>標題文字 <span class="pill">標籤文字</span></h1>
```

樣式：
- 字體大小：26px
- 字重：600
- 底線：2px solid var(--border)
- 下邊距：20px

#### H2 標題
```html
<h2>標題文字 <span class="pill">標籤文字</span></h2>
```

樣式：
- 字體大小：19px
- 字重：600
- 上邊距：28px，下邊距：14px

#### 黃色標籤 (.pill)
```html
<span class="pill">標籤文字</span>
```

樣式：
```css
.pill {
  background: var(--accent);      /* 黃色背景 */
  color: #111827;
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-weight: 600;
  margin-left: 8px;
  font-size: 12px;
}
```

#### 藍色標籤 (.tag)
```html
<span class="tag">標籤文字</span>
```

樣式：
```css
.tag {
  background: rgba(39, 104, 168, 0.08);  /* 淺藍背景 */
  color: var(--brand);
  display: inline-block;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 11px;
  margin-left: 8px;
}
```

### 2. 功能卡片組 (.feature-cards)

#### 基本結構
```html
<div class="feature-cards">
  <div class="feature-card">
    <h3>卡片標題</h3>
    <ul>
      <li><strong>重點文字</strong>（說明文字）</li>
      <li>項目內容</li>
    </ul>
  </div>
</div>
```

#### 布局規則
- **手機版**：所有卡片單欄顯示

```css
.feature-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* 2 欄布局 */
  gap: 20px;
  margin: 24px 0;
}

```

#### 卡片樣式
```css
.feature-card {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.feature-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.feature-card h3 {
  font-size: 17px;
  font-weight: 600;
  color: var(--brand);
  border-bottom: 2px solid var(--brand);
  padding-bottom: 8px;
  margin: 0 0 12px 0;
}
```

### 3. 表格樣式

#### 基本結構
```html
<table>
  <thead>
    <tr>
      <th>欄位 1</th>
      <th>欄位 2</th>
      <th>金額</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>內容 1</td>
      <td>內容 2</td>
      <td><strong>100,000</strong></td>
    </tr>
  </tbody>
</table>
```

#### 表格樣式
```css
table {
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;
  font-size: 14px;
}

table > thead > tr > th {
  background: #fafafa;
  border-bottom: 2px solid var(--border);
  font-weight: 600;
  padding: 10px 14px;
  text-align: left;
}

table > tbody > tr > td {
  padding: 10px 14px;
  border-top: 1px solid var(--border);
}

table > tbody > tr:hover {
  background: rgba(39, 104, 168, 0.02);
}

/* 金額欄位樣式 */
table td:last-child {
  font-weight: 600;
  color: var(--brand);
  text-align: right;
  font-family: 'SF Mono', 'Monaco', 'Menlo', monospace;
  letter-spacing: 0.5px;
}
```

### 4. 重點區塊

#### 使用範例
```html
<div style="background: #f0f6fc; border-left: 4px solid var(--brand); 
            padding: 16px 20px; border-radius: 8px; margin: 20px 0;">
  <p style="margin: 6px 0; font-size: 13px;">
    <strong>標題</strong> <span class="pill">標籤</span>
  </p>
  <p style="margin: 6px 0; font-size: 18px; color: var(--brand);">
    <strong>重要內容</strong>
  </p>
</div>
```

---

## 📄 HTML 結構範例

### 完整文件模板

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <title>文件標題</title>
  <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  
  <style>
    /* 在此處貼上完整的 CSS 樣式 */
    /* 參考 land_devprice.html 的 <style> 區塊 */
  </style>
</head>
<body>
  <div class="wrap">
    <article class="doc">
      <!-- 文件內容 -->
      <h1>主標題 <span class="pill">標籤</span></h1>
      
      <h2>章節標題 <span class="pill">標籤</span></h2>
      <p>段落內容...</p>
      
      <!-- 功能卡片組 -->
      <div class="feature-cards">
        <div class="feature-card">
          <h3>卡片標題</h3>
          <ul>
            <li><strong>重點</strong>（說明）</li>
          </ul>
        </div>
      </div>
      
      <!-- 表格 -->
      <table>
        <thead>...</thead>
        <tbody>...</tbody>
      </table>
      
      <hr>
    </article>
  </div>
</body>
</html>
```

---

## 📱 響應式設計

### 斷點
- **手機版**：`max-width: 768px`

### 響應式調整

```css
@media (max-width: 768px) {
  .wrap {
    margin: 48px auto;      /* 減少上下留白 */
    padding: 0 16px;
  }
  
  .doc {
    padding: 24px 20px;      /* 減少內距 */
    border-radius: 12px;
  }
  
  h1 { font-size: 22px; }
  h2 { font-size: 17px; }
  h3 { font-size: 16px; }
  
  table { font-size: 13px; }
  
  .feature-cards {
    grid-template-columns: 1fr;  /* 改為單欄 */
    gap: 16px;
  }
  
  .feature-card:first-child {
    grid-column: 1;  /* 重置 grid-column */
  }
}
```

---

## 🖨️ 打印樣式

```css
@media print {
  html, body {
    background: #fff !important;
  }
  
  .wrap {
    margin: 0;
    padding: 0;
  }
  
  .doc {
    box-shadow: none !important;
    border: 0;
    border-radius: 0;
    padding: 0;
    background: #fff !important;
  }
  
  hr {
    border-color: #ddd;
  }
}
```

---

## ✅ 檢查清單

建立新文件時，請確認：

- [ ] 使用正確的 CSS 變數顏色系統
- [ ] 標題使用 `.pill` 標籤標示重要資訊
- [ ] 卡片組使用 `.feature-cards` 和 `.feature-card`
- [ ] 表格使用正確的樣式類別
- [ ] 響應式設計在手機版正常顯示
- [ ] 打印樣式正確（白色背景）
- [ ] 所有間距符合規範
- [ ] 字體大小符合規範

---

## 📚 參考文件

- 範例文件：`shared_files/land_devprice.html`
- 對照文件：`shared_files/zx_contract.html`

---

**最後更新**：2025-01-XX  
**維護者**：精湛資訊工作室

