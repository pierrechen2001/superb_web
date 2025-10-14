'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, User, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 這裡可以加入實際的表單提交邏輯
    console.log('Form submitted:', formData)
    alert('感謝您的聯繫！我們會盡快回覆您。')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-[10%]">
      {/* Background Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-tech-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-energy-yellow/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-1 bg-energy-yellow rounded-full" />
            <h2 
              className="font-serif font-bold text-energy-yellow"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            >
              聯絡我們
            </h2>
            <div className="w-12 h-1 bg-energy-yellow rounded-full" />
          </div>
          <p className="text-muted-gray text-lg leading-loose">
            有任何想法或專案需求？讓我們一起討論
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 md:p-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="flex items-center gap-2 text-light-gray font-medium mb-3 text-base">
                <User className="w-5 h-5" />
                姓名
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl text-light-gray placeholder-muted-gray focus:outline-none focus:border-energy-yellow transition-colors text-base"
                placeholder="請輸入您的姓名"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-light-gray font-medium mb-3 text-base">
                <Mail className="w-5 h-5" />
                電子郵件
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl text-light-gray placeholder-muted-gray focus:outline-none focus:border-energy-yellow transition-colors text-base"
                placeholder="your@email.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="flex items-center gap-2 text-light-gray font-medium mb-3 text-base">
                <MessageSquare className="w-5 h-5" />
                訊息內容
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl text-light-gray placeholder-muted-gray focus:outline-none focus:border-energy-yellow transition-colors resize-none text-base leading-relaxed"
                placeholder="請告訴我們您的需求或想法..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 20px rgba(39,104,168,0.6)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              送出訊息
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-gray mb-2">或直接寄信給我們</p>
          <a 
            href="mailto:hello@superbtech.studio" 
            className="text-tech-blue hover:text-energy-yellow transition-colors text-lg font-medium"
          >
            hello@superbtech.studio
          </a>
        </motion.div>
      </div>
    </section>
  )
}

