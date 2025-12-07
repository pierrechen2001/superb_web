// 靜態導入構建時生成的內容
import { sharedFilesContent, sharedFileConfig } from '../../../lib/sharedFilesContent'

// 配置 Edge Runtime 以支援 Cloudflare Pages
export const runtime = 'edge'

interface FileConfig {
  password: string
  name: string
}

export default async function handler(
  req: Request
) {
  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    // 從 URL 中提取 filename
    const url = new URL(req.url)
    const pathParts = url.pathname.split('/')
    const filename = pathParts[pathParts.length - 1]

    if (!filename || typeof filename !== 'string') {
      return new Response(JSON.stringify({ error: 'Invalid filename' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // 安全檢查：防止路徑遍歷攻擊
    if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
      return new Response(JSON.stringify({ error: 'Invalid filename' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // 檢查密碼驗證（從 header 中獲取）
    const authToken = req.headers.get('x-auth-token')
    
    // 驗證 token
    if (authToken !== 'authenticated') {
      return new Response(JSON.stringify({ error: 'Unauthorized - Password required' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // 從預先加載的文件內容中獲取
    let fileContent = sharedFilesContent[filename]
    
    // 檢查文件是否存在
    if (!fileContent) {
      return new Response(JSON.stringify({ error: 'File not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
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
    
    // 返回 HTML 內容
    return new Response(fileContent, {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    })
  } catch (error) {
    console.error('Error reading file:', error)
    return new Response(JSON.stringify({ error: 'Internal server error', details: String(error) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

