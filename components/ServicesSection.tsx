'use client'

import { motion } from 'framer-motion'
import { Code2, Brain, Smartphone, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const services = [
  {
    icon: Code2,
    title: '網站開發',
    description: '打造高效能、響應式的現代化網站，從前端到後端完整解決方案',
    gradientFrom: '#3B82F6',
    gradientTo: '#8B5CF6',
  },
  {
    icon: Brain,
    title: 'AI 整合',
    description: '將 AI 技術融入產品，為你的服務注入智能化能力',
    gradientFrom: '#F59E0B',
    gradientTo: '#EF4444',
  },
  {
    icon: Smartphone,
    title: '行動應用',
    description: '開發跨平台行動應用，讓你的服務隨時隨地觸及用戶',
    gradientFrom: '#10B981',
    gradientTo: '#3B82F6',
  },
  {
    icon: MessageSquare,
    title: 'LineBot 開發',
    description: '打造智能 LINE 聊天機器人，提供即時互動與自動化服務',
    gradientFrom: '#06B6D4',
    gradientTo: '#8B5CF6',
  },
]

// 圖片輪播組件
function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // 三張圖片的路徑
  const images = [
    '/images/service_1.png',
    '/images/service_2.png',
    '/images/service_3.png',
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 group">
      {/* 圖片顯示 */}
      <div className="relative w-full h-full">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentIndex === index ? 1 : 0,
              scale: currentIndex === index ? 1 : 1.1,
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={img}
              alt={`服務展示 ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        ))}
      </div>

      {/* 左右切換按鈕 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronLeft className="w-6 h-6 text-light-gray" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronRight className="w-6 h-6 text-light-gray" />
      </button>

      {/* 指示點 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index
                ? 'bg-energy-yellow w-8'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 px-6 md:px-12 lg:px-[10%]">
      {/* Section Title - 移除黃色橫線 */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 
          className="font-serif font-bold text-energy-yellow mb-6"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
        >
          我們的服務
        </h2>
        <p className="text-muted-gray text-lg max-w-2xl leading-loose">
          提供全方位的技術服務，從概念到上線，我們與你一起實現想法
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        {/* 左側：服務卡片 (2x2) */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 transition-all duration-300 hover:scale-[1.03]"
                style={{
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  boxShadow: '0 0 25px rgba(243,178,55,0.3)',
                }}
              >
                {/* Icon - 只有線條漸層變色 */}
                <div className="mb-8 inline-block p-4 bg-tech-blue/20 rounded-xl transition-colors relative overflow-hidden">
                  {/* 普通狀態的 icon */}
                  <Icon 
                    className="w-10 h-10 text-tech-blue group-hover:opacity-0 transition-opacity duration-300 relative z-10" 
                    strokeWidth={1.5}
                  />
                  {/* Hover 狀態的漸層 icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon 
                      className="w-10 h-10 relative z-10" 
                      strokeWidth={1.5}
                      style={{
                        stroke: `url(#gradient-${index})`,
                      }}
                    />
                    <svg width="0" height="0" style={{ position: 'absolute' }}>
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={service.gradientFrom} />
                          <stop offset="100%" stopColor={service.gradientTo} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-light-gray mb-5 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-gray leading-loose text-base">
                  {service.description}
                </p>

                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(243,178,55,0.05) 0%, transparent 70%)',
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* 右側：圖片輪播 */}
        <motion.div
          className="lg:col-span-1 flex items-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ImageCarousel />
        </motion.div>
      </div>
    </section>
  )
}
