import { NextApiRequest, NextApiResponse } from 'next'

// 配置 Edge Runtime 以支援 Cloudflare Pages
export const runtime = 'edge'

// 動態導入以避免 Edge Runtime 限制
// 使用異步導入來處理大型文件內容
let sharedDataPromise: Promise<{ content: Record<string, string>, config: any }> | null = null

async function getSharedData() {
  if (!sharedDataPromise) {
    sharedDataPromise = import('../../../lib/sharedFilesContent').then(
      (module) => ({
        content: module.sharedFilesContent || {},
        config: module.sharedFileConfig || {}
      })
    ).catch(() => ({ content: {}, config: {} }))
  }
  return sharedDataPromise
}

interface FileConfig {
  password: string
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { filename } = req.query

  if (!filename || typeof filename !== 'string') {
    return res.status(400).json({ error: 'Invalid filename' })
  }

  // 安全檢查：防止路徑遍歷攻擊
  if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
    return res.status(400).json({ error: 'Invalid filename' })
  }

  // 檢查密碼驗證（從 header 中獲取）
  const authToken = req.headers['x-auth-token']
  
  // 驗證 token
  if (authToken !== 'authenticated') {
    return res.status(401).json({ error: 'Unauthorized - Password required' })
  }

  try {
    // 異步獲取文件內容和配置
    const { content: sharedFilesContent, config: sharedFileConfig } = await getSharedData()
    
    // 從預先加載的文件內容中獲取
    let fileContent = sharedFilesContent[filename]
    
    // 檢查文件是否存在
    if (!fileContent) {
      return res.status(404).json({ error: 'File not found' })
    }
    
    // 自動添加 footer
    const footerText = sharedFileConfig?.footerText || '此文件由精湛資訊工作室 Superb Tech Studio 分享'
    const footerHTML = `
    <footer style="margin-top: 60px; padding: 40px 20px; border-top: 1px solid rgba(255, 255, 255, 0.1); text-align: center; color: #94A3B8; font-size: 0.9rem;">
        <p style="margin: 0; line-height: 1.8;">
            ${footerText}
        </p>
        <p style="margin: 10px 0 0 0; font-size: 0.85rem;">
            © ${new Date().getFullYear()} 精湛資訊工作室 Superb Tech Studio. All rights reserved.
        </p>
    </footer>
    `
    
    // 在 </body> 標籤之前插入 footer
    if (fileContent.includes('</body>')) {
      fileContent = fileContent.replace('</body>', footerHTML + '\n</body>')
    } else if (fileContent.includes('</html>')) {
      // 如果沒有 </body>，在 </html> 之前添加
      fileContent = fileContent.replace('</html>', footerHTML + '\n</html>')
    } else {
      // 如果都沒有，在文件末尾添加
      fileContent += footerHTML
    }
    
    // 設置適當的 Content-Type
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.status(200).send(fileContent)
  } catch (error) {
    console.error('Error reading file:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

