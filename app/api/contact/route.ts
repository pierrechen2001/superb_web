import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // 基本驗證
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: '請填寫所有必填欄位' },
        { status: 400 }
      )
    }

    // Email 格式驗證
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Email 格式不正確' },
        { status: 400 }
      )
    }

    // 字數限制
    if (message.length > 2000) {
      return NextResponse.json(
        { ok: false, error: '訊息內容過長（上限 2000 字）' },
        { status: 400 }
      )
    }

    // 使用 Resend 發送郵件
    const { data, error } = await resend.emails.send({
      from: 'Superb Tech Studio <noreply@superb-tutor.com>', // Resend 的驗證發件地址
      to: process.env.CONTACT_EMAIL || 'superb.taipei@gmail.com', // 你的接收信箱
      subject: `🆕 新的聯絡表單：來自 ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2768A8; border-bottom: 2px solid #F3B237; padding-bottom: 10px;">
            新的聯絡表單提交
          </h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #333;">姓名：</strong>
              <span style="color: #666;">${name}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Email：</strong>
              <a href="mailto:${email}" style="color: #2768A8;">${email}</a>
            </p>
            
            <div style="margin: 20px 0;">
              <strong style="color: #333; display: block; margin-bottom: 10px;">訊息內容：</strong>
              <div style="background: white; padding: 15px; border-left: 4px solid #F3B237; white-space: pre-wrap;">
                ${message}
              </div>
            </div>
          </div>
          
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            此郵件由 Superb Tech Studio 官網自動發送
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { ok: false, error: '郵件發送失敗，請稍後再試' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { ok: true, messageId: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { ok: false, error: '伺服器錯誤，請稍後再試' },
      { status: 500 }
    )
  }
}

