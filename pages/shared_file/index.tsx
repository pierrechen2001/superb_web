import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FileText, Shield, Lock, Sparkles } from 'lucide-react'

export default function SharedFileIndex() {
  return (
    <>
      <Head>
        <title>精湛資訊工作室共享文件系統 - Superb Tech Studio</title>
      </Head>
      <div 
        className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-6"
        style={{
          background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
        }}
      >
        {/* 背景裝飾 - 類似 Hero Section */}
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

        {/* 幾何模糊圖形裝飾 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            className="absolute top-24 left-1/3 w-72 h-72 rounded-2xl border border-white/10 rotate-12"
            style={{
              background: 'linear-gradient(135deg, rgba(243,178,55,0.14), rgba(39,104,168,0.14))',
              filter: 'blur(1px)'
            }}
            animate={{ y: [0, -18, 0], rotate: [12, 8, 12], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-24 right-1/4 w-96 h-96 rounded-full border border-white/10"
            style={{
              background: 'linear-gradient(135deg, rgba(39,104,168,0.1), rgba(243,178,55,0.1))',
              filter: 'blur(2px)'
            }}
            animate={{ x: [0, 12, 0], scale: [1, 1.06, 1], opacity: [0.4, 0.55, 0.4] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* 主要內容 */}
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
              <img
                src="/images/brand_white.png"
                alt="Superb Tech Studio"
                className="h-20 md:h-24 w-auto mx-auto mb-8 opacity-90"
              />
            </Link>
          </motion.div>

          {/* 標題卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 mb-8 shadow-2xl"
          >
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-energy-yellow mb-4">
                共享文件系統
              </h2>
              <p className="text-muted-gray text-lg md:text-xl mt-6">
                安全、便捷的文件分享服務
              </p>
            </div>
          </motion.div>

          {/* 功能卡片網格 */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* 文件管理卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:border-energy-yellow/50 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-tech-blue/20 rounded-xl mb-4 group-hover:bg-tech-blue/30 transition-colors">
                  <FileText className="w-8 h-8 text-tech-blue" />
                </div>
                <h3 className="text-lg font-semibold text-light-gray mb-2">文件管理</h3>
                <p className="text-sm text-muted-gray">安全儲存與分享</p>
              </div>
            </motion.div>

            {/* 密碼保護卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:border-energy-yellow/50 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-energy-yellow/20 rounded-xl mb-4 group-hover:bg-energy-yellow/30 transition-colors">
                  <Lock className="w-8 h-8 text-energy-yellow" />
                </div>
                <h3 className="text-lg font-semibold text-light-gray mb-2">密碼保護</h3>
                <p className="text-sm text-muted-gray">確保文件安全</p>
              </div>
            </motion.div>

            {/* 便捷分享卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:border-energy-yellow/50 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-purple-500/20 rounded-xl mb-4 group-hover:bg-purple-500/30 transition-colors">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-light-gray mb-2">便捷分享</h3>
                <p className="text-sm text-muted-gray">一鍵分享連結</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

