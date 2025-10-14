'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

const websites = [
  {
    id: 1,
    title: '相關網頁一',
    description: '簡短的網頁描述，說明網站的主要功能和特色',
    url: 'https://example.com',
    image: '/images/website-1.jpg',
  },
  {
    id: 2,
    title: '相關網頁二',
    description: '簡短的網頁描述，說明網站的主要功能和特色',
    url: 'https://example.com',
    image: '/images/website-2.jpg',
  },
  {
    id: 3,
    title: '相關網頁三',
    description: '簡短的網頁描述，說明網站的主要功能和特色',
    url: 'https://example.com',
    image: '/images/website-3.jpg',
  },
]

export default function WebsitesSection() {
  return (
    <section id="websites" className="relative py-32 px-6 md:px-12 lg:px-[10%] bg-gradient-to-b from-transparent to-deep-navy-light/30">
      <div className="max-w-7xl mx-auto">
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
              相關網頁展示
            </h2>
            <div className="w-12 h-1 bg-energy-yellow rounded-full" />
          </div>
          <p className="text-muted-gray text-lg leading-loose">
            精選相關網站，展現我們的技術實力與合作夥伴
          </p>
        </motion.div>

        {/* Websites Grid */}
        <div className="space-y-24">
          {websites.map((website, index) => (
            <motion.div
              key={website.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image Placeholder */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative bg-white/5 backdrop-blur-md border-2 border-dashed border-white/20 rounded-2xl overflow-hidden aspect-[16/10] flex items-center justify-center group hover:border-energy-yellow/50 transition-all">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌐</div>
                    <p className="text-lg text-muted-gray group-hover:text-light-gray transition-colors">
                      網頁截圖 {website.id}
                      <br />
                      <span className="text-sm mt-2 block">(建議尺寸: 1200x750px)</span>
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-energy-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Website Info */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-3xl font-serif font-bold text-light-gray mb-6 leading-tight">
                    {website.title}
                  </h3>
                  
                  <p className="text-muted-gray leading-loose text-base mb-8">
                    {website.description}
                  </p>

                  {/* Website URL */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-light-gray mb-3 uppercase tracking-wider">
                      網站連結
                    </h4>
                    <a 
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tech-blue hover:text-energy-yellow transition-colors break-all"
                    >
                      {website.url}
                    </a>
                  </div>

                  {/* Visit Button */}
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center gap-2 text-energy-yellow hover:text-light-gray transition-colors font-semibold group">
                      訪問網站
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

