'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Rocket, Target, Image as ImageIcon } from 'lucide-react'

const processSteps = [
  {
    icon: Lightbulb,
    title: '探索需求',
    description: '深入了解你的想法與目標',
  },
  {
    icon: Target,
    title: '精準設計',
    description: '制定最適合的技術方案',
  },
  {
    icon: Rocket,
    title: '完美交付',
    description: '持續優化直到完美上線',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-10 px-6 md:px-12 lg:px-[10%]">
      <div className="max-w-7xl mx-auto">
        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-28">
          {/* Left: Tagline */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="font-serif font-bold text-energy-yellow mb-8"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            >
              關於我們
            </h2>
            
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-light-gray mb-6 leading-snug">
              我們相信
              <br />
              <span className="text-tech-blue font-bold">技術能放大創意</span>
            </h3>

            <p className="text-base text-muted-gray leading-loose mb-8">
              精湛資訊工作室是一個專注於現代網站開發與 AI 技術整合的團隊。
              我們不只是寫程式，更是用資訊技術實現夢想的創造者。
            </p>

            <p className="text-base text-muted-gray leading-loose">
              從概念發想到產品上線，我們陪伴客戶走過每一步，
              確保最終交付的不只是程式碼，而是能真正解決問題的解決方案。
            </p>
          </motion.div>

          {/* Right: Image Placeholder */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-white/5 backdrop-blur-md border-2 border-dashed border-white/20 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center group hover:border-energy-yellow/50 transition-all">
              <img 
                src="/images/us.png" 
                alt="工作場景"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10">
            <h4 className="text-2xl font-semibold text-light-gray mb-6 leading-tight">
              專業技術
            </h4>
            <p className="text-muted-gray leading-loose text-base">
              我們精通 React、Next.js、Node.js 等現代技術棧，
              並持續學習最新的技術趨勢，確保為客戶提供最優質的解決方案。
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10">
            <h4 className="text-2xl font-semibold text-light-gray mb-6 leading-tight">
              設計思維
            </h4>
            <p className="text-muted-gray leading-loose text-base">
              以用戶體驗為核心，結合美學與功能性，
              打造既美觀又實用的數位產品。
            </p>
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-serif font-bold text-center text-light-gray mb-6 leading-tight">
            我們的工作流程
          </h3>
          <p className="text-center text-muted-gray mb-16 text-lg leading-relaxed">
            從需求到交付，我們注重每一個細節
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-tech-blue to-energy-yellow opacity-30" />
                  )}

                  <div className="relative z-10 flex items-center justify-center md:flex-col md:items-center md:text-center gap-5 md:gap-6 px-2">
                    {/* Icon Circle */}
                    <div className="shrink-0 p-5 md:p-9 bg-gradient-to-br from-tech-blue/20 to-energy-yellow/20 rounded-full border border-white/10">
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-energy-yellow" strokeWidth={1.5} />
                    </div>

                    <div className="flex-1 md:mt-2">
                      {/* Title */}
                      <h4 className="text-xl md:text-2xl font-semibold text-light-gray mb-2 md:mb-5 leading-tight">
                        {step.title}
                      </h4>

                      {/* Description */}
                      <p className="text-muted-gray text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
