'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

// 平滑滾動函數
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-[10%] overflow-hidden">
      {/* === Modern Tech Section | Deep navy bg + glass cards + yellow glow hover === */}
      
      {/* 背景漸層 - 添加呼吸動畫 */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 20% 30%, #2768A8 0%, #0F172A 70%)',
        }}
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, #2768A8 0%, #0F172A 70%)',
            'radial-gradient(circle at 25% 35%, #2768A8 5%, #0F172A 75%)',
            'radial-gradient(circle at 20% 30%, #2768A8 0%, #0F172A 70%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Logo 圖片 */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img
          src="/images/logo.png"
          alt="Superb Tech Studio Logo"
          className="w-96 h-96 object-contain"
          style={{ filter: 'brightness(1.5)' }}
        />
      </motion.div>

      {/* 光暈圓 */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: '#2768A8' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{ background: '#F3B237' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 內容區 */}
      <div className="relative z-10 text-center max-w-5xl flex-1 flex flex-col justify-center">
        <motion.h1
          className="font-serif font-black text-light-gray mb-10 tracking-wide"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            lineHeight: '1.3',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          精湛資訊工作室
          <br />
          <span className="text-energy-yellow font-serif">Superb Tech Studio</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-gray mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          我們相信技術能放大創意，用代碼打造專屬於你的數位體驗
        </motion.p>

        {/* CTA 按鈕 - 交換順序 */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* 查看服務項目 - 現在在左邊 */}
          <button
            onClick={() => smoothScrollTo('services')}
            className="border border-energy-yellow text-energy-yellow hover:bg-energy-yellow hover:text-deep-navy rounded-2xl px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            查看服務項目
          </button>

          {/* 立即洽談 - 現在在右邊 */}
          <button
            onClick={() => smoothScrollTo('contact')}
            className="bg-tech-blue hover:shadow-[0_0_20px_rgba(39,104,168,0.6)] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            立即洽談
          </button>
        </motion.div>
      </div>

      {/* 向下探索按鈕 */}
      <motion.button
        onClick={() => smoothScrollTo('services')}
        className="relative z-10 mb-12 text-light-gray hover:text-energy-yellow transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="text-sm font-medium tracking-wider">向下探索</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  )
}
