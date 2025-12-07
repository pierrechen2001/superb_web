import fs from 'fs'
import path from 'path'

// 構建時腳本：生成包含所有共享文件內容的 TypeScript 文件
const filesDir = path.join(process.cwd(), 'shared_files')
const configFile = path.join(process.cwd(), 'shared_file_config.json')
const outputFile = path.join(process.cwd(), 'lib', 'sharedFilesContent.ts')

const files: Record<string, string> = {}

if (fs.existsSync(filesDir)) {
  const fileNames = fs.readdirSync(filesDir)
  fileNames.forEach((fileName) => {
    if (fileName.endsWith('.html')) {
      const filePath = path.join(filesDir, fileName)
      const content = fs.readFileSync(filePath, 'utf-8')
      files[fileName] = content
    }
  })
}

// 讀取配置文件
let config: any = {}
if (fs.existsSync(configFile)) {
  config = JSON.parse(fs.readFileSync(configFile, 'utf-8'))
}

// 生成 TypeScript 文件，包含文件內容和配置
const jsonContent = `// 此文件由構建腳本自動生成，請勿手動編輯
// 包含所有共享文件的內容和配置

export const sharedFilesContent: Record<string, string> = ${JSON.stringify(files, null, 2)};

export const sharedFileConfig = ${JSON.stringify(config, null, 2)};
`

// 確保 lib 目錄存在
const libDir = path.join(process.cwd(), 'lib')
if (!fs.existsSync(libDir)) {
  fs.mkdirSync(libDir, { recursive: true })
}

fs.writeFileSync(outputFile, jsonContent, 'utf-8')
console.log(`✅ 已生成共享文件內容: ${Object.keys(files).length} 個文件`)

