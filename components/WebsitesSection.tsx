'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'

const websites = [
  {
    id: 1,
    title: '電商互動平台',
    description:
      '互動式電商體驗，採用動態渲染與流暢動畫，讓商品瀏覽、規格切換與加入購物車具沈浸感。強調互動與使用者體驗，具備效能優化與創新購物介面設計上的能力。',
    url: 'https://wp1141-five.vercel.app/',
    image: '/images/website-1.jpg',
  },
  {
    id: 2,
    title: '投資資料管理系統',
    description:
      '展現金融後台的數據可視化與系統化管理。整合使用者投資紀錄、基金績效與回測結果，以直觀的圖表與動態介面呈現。兼顧即時性、穩定性與易維護性。',
    url: 'https://bnp-paribas-comp.vercel.app',
    image: '/images/website-2.jpg',
  },
  {
    id: 3,
    title: '個人形象網站',
    description:
      '個人品牌網站，結合平滑滑動轉場與結構化內容呈現。以作品與筆記為主軸，體現現代網頁的資訊層次與互動節奏。適合展示開發者或團隊的專業形象與專案成果。',
    url: 'https://pierre-chen.com',
    image: '/images/website-3.jpg',
  },
]

export default function WebsitesSection() {
  return (
    <section id="websites" className="relative py-20 md:py-30 px-6 md:px-12 lg:px-[10%] bg-gradient-to-b from-transparent to-deep-navy-light/30">
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
            精選網站作品，展現精湛的技術實力
          </p>
        </motion.div>

        {/* Websites Grid */}
        <div className="space-y-24">
          {websites.map((website, index) => (
            <motion.div
              key={website.id}
              className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image - 佔 3 欄，固定 16:10 比例；含載入失敗回退 */}
              <div className={`${index % 2 === 1 ? 'lg:order-2 lg:col-span-3' : 'lg:col-span-3'}`}>
                <PictureCard image={website.image} title={website.title} index={website.id} />
              </div>

              {/* Website Info - 佔 2 欄，縮小寬度並撐滿高度（高度不超過圖片） */}
              <div className={`${index % 2 === 1 ? 'lg:order-1 lg:col-span-2' : 'lg:col-span-2'} h-full`}>
                <motion.div
                  className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-light-gray mb-4 leading-tight">
                    {website.title}
                  </h3>
                  
                  {/* 描述：超出高度省略 */}
                  <p
                    className="text-muted-gray leading-loose text-base mb-6 overflow-hidden"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical' as any,
                    }}
                  >
                    {website.description}
                  </p>

                  {/* Push button to bottom */}
                  <div className="mt-auto">
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
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 圖片卡片：帶回退 UI，維持等高
function PictureCard({ image, title, index }: { image: string; title: string; index: number }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative w-full aspect-[16/10] bg-white/5 backdrop-blur-md border-2 border-dashed border-white/20 rounded-2xl overflow-hidden flex items-center justify-center group hover:border-energy-yellow/50 transition-all">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setFailed(true)}
          loading="lazy"
        />
      ) : (
        <div className="text-center px-6">
          <div className="text-6xl mb-4">🌐</div>
          <p className="text-lg text-muted-gray group-hover:text-light-gray transition-colors">
            網頁截圖 {index}
            <br />
            <span className="text-sm mt-2 block">(建議尺寸: 1200x750px)</span>
          </p>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-energy-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  )
}

