# 如何替換網站圖片

本指南將幫助您在網站中添加實際的圖片，替換目前的占位圖示。

## 📁 建議的圖片結構

首先在專案根目錄創建 `public/images` 資料夾：

```
superb_web/
├── public/
│   └── images/
│       ├── about/
│       │   ├── workspace.jpg      # 工作場景圖
│       │   └── team.jpg           # 團隊照片
│       └── projects/
│           ├── project-1.jpg      # 專案作品圖
│           ├── project-2.jpg
│           └── project-3.jpg
```

## 🖼️ 各區域圖片規格建議

### 1. About Section - 工作場景圖
- **位置**: `components/AboutSection.tsx` (第 58 行附近)
- **建議尺寸**: 800x600px (4:3 比例)
- **說明**: 展示工作室環境或工作中的場景

**替換方式**:
```tsx
// 找到這段代碼並替換
<div className="relative bg-white/5 backdrop-blur-md border-2 border-dashed...">
  {/* 替換為實際圖片 */}
  <img 
    src="/images/about/workspace.jpg" 
    alt="工作場景"
    className="w-full h-full object-cover rounded-2xl"
  />
</div>
```

### 2. About Section - 團隊照片
- **位置**: `components/AboutSection.tsx` (第 106 行附近)
- **建議尺寸**: 1400x600px (21:9 橫幅比例)
- **說明**: 團隊合照或工作室全景

**替換方式**:
```tsx
<div className="relative bg-white/5 backdrop-blur-md border-2 border-dashed...">
  <img 
    src="/images/about/team.jpg" 
    alt="團隊照片"
    className="w-full h-full object-cover rounded-2xl"
  />
</div>
```

### 3. Portfolio Section - 專案作品
- **位置**: `components/PortfolioSection.tsx`
- **建議尺寸**: 1200x750px (16:10 比例)
- **說明**: 每個專案一張代表性截圖

**替換方式**:
```tsx
// 在 projects 陣列中添加 image 屬性
const projects = [
  {
    id: 1,
    title: '專案作品一',
    description: '簡短的專案描述，說明使用的技術和解決的問題',
    image: '/images/projects/project-1.jpg', // 添加這行
  },
  // ... 其他專案
]

// 然後在 JSX 中替換占位圖示
<div className="relative bg-white/5...">
  <img 
    src={project.image} 
    alt={project.title}
    className="w-full h-full object-cover rounded-2xl"
  />
</div>
```

## 🎨 圖片優化建議

### 1. 壓縮圖片
- 使用 [TinyPNG](https://tinypng.com/) 或 [Squoosh](https://squoosh.app/) 壓縮圖片
- 目標大小：每張圖片 < 500KB

### 2. 使用 Next.js Image 組件（推薦）
Next.js 的 `Image` 組件會自動優化圖片：

```tsx
import Image from 'next/image'

<Image 
  src="/images/about/workspace.jpg" 
  alt="工作場景"
  width={800}
  height={600}
  className="rounded-2xl object-cover"
  priority // 首屏圖片加上這個
/>
```

### 3. 響應式圖片
為不同螢幕尺寸準備不同大小的圖片：

```tsx
<Image 
  src="/images/about/workspace.jpg" 
  alt="工作場景"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
  className="rounded-2xl"
/>
```

## 📝 完整替換範例

### AboutSection.tsx 完整更新

```tsx
{/* 工作場景圖 - 替換占位圖示部分 */}
<motion.div
  className="flex flex-col justify-center"
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
    <Image 
      src="/images/about/workspace.jpg" 
      alt="精湛資訊工作室 - 工作場景"
      width={800}
      height={600}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/20 to-energy-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
</motion.div>
```

## 🚀 使用步驟

1. **準備圖片**
   - 按照建議尺寸準備圖片
   - 壓縮圖片以優化載入速度

2. **創建資料夾**
   ```bash
   mkdir -p public/images/about
   mkdir -p public/images/projects
   ```

3. **放置圖片**
   - 將圖片複製到對應資料夾

4. **更新代碼**
   - 按照上述範例替換占位圖示
   - 建議使用 Next.js Image 組件

5. **測試**
   ```bash
   npm run dev
   ```
   - 檢查圖片是否正確顯示
   - 測試響應式效果

## 💡 小技巧

### 保持占位圖示作為後備
如果暫時沒有圖片，可以這樣寫：

```tsx
{imageUrl ? (
  <Image src={imageUrl} alt={title} width={800} height={600} />
) : (
  <div className="flex items-center justify-center bg-white/5">
    <ImageIcon className="w-20 h-20 text-muted-gray" />
  </div>
)}
```

### 添加載入動畫
```tsx
<Image 
  src="/images/about/workspace.jpg" 
  alt="工作場景"
  width={800}
  height={600}
  className="rounded-2xl"
  placeholder="blur"
  blurDataURL="data:image/svg+xml;base64,..." // 使用 plaiceholder 生成
/>
```

## 📱 建議的圖片內容

1. **工作場景圖**：辦公環境、開發中的畫面、會議討論
2. **團隊照片**：專業的團隊合照、自然的工作互動
3. **專案作品**：網站首頁截圖、介面設計、功能展示

需要任何協助，請隨時聯繫！

