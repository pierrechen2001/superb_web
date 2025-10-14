# 精湛資訊工作室 Superb Tech Studio

一個現代化的工作室網站，展現專業的技術服務與設計美學。

## 🚀 技術棧

- **框架**: Next.js 14
- **UI**: React 18 + TypeScript
- **樣式**: Tailwind CSS
- **動畫**: Framer Motion
- **圖示**: Lucide React
- **字體**: Noto Sans TC + Noto Serif TC

## 🎨 設計特色

- **深色科技風格設計** - Deep Navy 背景配色
- **動態粒子背景** 
  - 根據時間變色（早上藍、下午黃、晚上紫、深夜靛）
  - 粒子間自動連線形成幾何網絡
  - 鼠標互動排斥效果
- **玻璃質感卡片** - Glassmorphism 設計
- **流暢的滾動動畫** - Framer Motion 實現
- **完整響應式設計** - 適配所有裝置
- **粗明體標題** - 重要標語使用 Noto Serif TC
- **優化行距** - 舒適的閱讀體驗

## 📦 安裝與運行

```bash
# 安裝依賴
npm install

# 開發模式運行
npm run dev

# 建置生產版本
npm run build

# 運行生產版本
npm start
```

## 🌐 訪問網站

開發模式下訪問 [http://localhost:3000](http://localhost:3000)

## 📸 添加圖片

網站預留了多個圖片占位區域，請參考 [HOW_TO_ADD_IMAGES.md](./HOW_TO_ADD_IMAGES.md) 了解如何添加您的圖片。

### 建議的圖片位置：
- **About Section**: 工作場景圖 (800x600px) + 團隊照片 (1400x600px)
- **Portfolio Section**: 專案作品截圖 (1200x750px)

## 🎯 網站結構

```
├── Hero Section        # 首頁橫幅
├── Services Section    # 服務項目（6個卡片）
├── About Section       # 關於我們（含圖片區域）
├── Portfolio Section   # 作品展示（含圖片區域）
├── Contact Section     # 聯絡表單
└── Footer             # 頁尾資訊
```

## 🎨 自訂配色

主要配色定義在 `tailwind.config.js`：

```javascript
colors: {
  'tech-blue': '#2768A8',        // 主色
  'energy-yellow': '#F3B237',    // 輔色
  'deep-navy': '#0F172A',        // 深底色
  'light-gray': '#E2E8F0',       // 字色
  'muted-gray': '#94A3B8',       // 次字色
}
```

## 🛠️ 自訂內容

### 1. 服務項目
編輯 `components/ServicesSection.tsx` 中的 `services` 陣列

### 2. 作品展示
編輯 `components/PortfolioSection.tsx` 中的 `projects` 陣列

### 3. 聯絡資訊
- Email: 修改 `components/ContactSection.tsx` 和 `components/Footer.tsx`
- 社群連結: 修改 `components/Footer.tsx` 中的連結

## 📱 響應式斷點

- **Desktop**: ≥ 1024px
- **Tablet**: 768px - 1024px  
- **Mobile**: < 768px

## 🎭 粒子背景特效

粒子系統特點：
- 120 個粒子（手機上 60 個）
- 自動連線距離：150px
- 鼠標排斥半徑：150px
- 根據一天時段自動變色

調整參數請編輯 `components/ParticleBackground.tsx`

## 📄 授權

© 2025 精湛資訊工作室 Superb Tech Studio. All rights reserved.

