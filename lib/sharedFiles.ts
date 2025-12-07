// 此文件由構建腳本自動生成，請勿手動編輯
// 在構建時，scripts/generateSharedFiles.ts 會生成 sharedFilesContent.ts
// 這裡提供一個回退方案

// 嘗試導入生成的文件，如果不存在則使用空對象
let sharedFilesContent: Record<string, string> = {}

try {
  // 在構建時，這個文件會被生成
  const generated = require('./sharedFilesContent')
  sharedFilesContent = generated.sharedFilesContent || {}
} catch (e) {
  // 如果文件不存在，使用空對象（開發環境）
  sharedFilesContent = {}
}

export { sharedFilesContent }

