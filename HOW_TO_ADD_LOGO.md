# Hero Banner Logo 設置說明

## 📸 Logo 圖片準備

您需要準備一張 logo 線條 PNG 檔案。

### 建議規格
- **格式**: PNG（需要透明背景）
- **尺寸**: 建議 800x800px 或更大（正方形）
- **背景**: 透明背景
- **顏色**: 建議使用白色或淡色線條（因為會設置為半透明效果）
- **檔案大小**: < 200KB

## 📁 放置位置

將 logo 圖片放在以下位置：

```
public/images/logo.png
```

如果檔案名稱不同，請更新程式碼中的路徑。

## 🎨 效果說明

Logo 會在 Hero Banner 中：
- 位於標題後方作為背景裝飾
- 半透明效果（opacity: 0.1）
- 稍微提亮（brightness: 1.5）
- 淡入動畫
- 尺寸：w-96 h-96（384px x 384px）

## 🔧 自訂調整

如果需要調整 logo 的顯示效果，可以在 `components/HeroSection.tsx` 中修改：

### 調整透明度
```tsx
animate={{ opacity: 0.1, scale: 1 }}  // 改變 0.1 這個數值（0-1 之間）
```

### 調整尺寸
```tsx
className="w-96 h-96 object-contain"  // 改變 w-96 h-96 (96 = 384px)
// 可用選項: w-64 (256px), w-80 (320px), w-96 (384px), w-[500px] (自訂)
```

### 調整位置
```tsx
className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
// top-1/4: 距離頂部 25%
// 可改為 top-1/3, top-1/2 等
```

### 調整亮度
```tsx
style={{ filter: 'brightness(1.5)' }}  // 改變 1.5 這個數值
// 1.0 = 原始亮度, 1.5 = 提亮 50%, 2.0 = 提亮 100%
```

## 📱 響應式建議

如果希望在手機上縮小 logo，可以這樣修改：

```tsx
className="w-64 md:w-96 h-64 md:h-96 object-contain"
```

這樣在手機上是 256px，平板以上是 384px。

## 🚀 完成後

1. 將 logo.png 放入 `public/images/` 資料夾
2. 重新啟動開發伺服器：
   ```bash
   npm run dev
   ```
3. 訪問 http://localhost:3000 查看效果

Logo 應該會以淡淡的效果出現在 Hero Banner 的標題後方！

