'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 py-16 px-6 md:px-12 lg:px-[10%]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/images/brand_white.png"
              alt="Superb Tech Studio"
              className="h-14 w-auto opacity-90"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-light-gray mb-6 leading-tight">快速連結</h4>
            <ul className="flex gap-6 flex-wrap">
              <li className="inline-flex">
                <a href="#services" className="text-muted-gray hover:text-energy-yellow transition-colors leading-relaxed">
                  服務項目
                </a>
              </li>
              <li className="inline-flex">
                <a href="#contact" className="text-muted-gray hover:text-energy-yellow transition-colors leading-relaxed">
                  聯絡我們
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-light-gray mb-6 leading-tight">追蹤我們</h4>
            <div className="flex gap-4">
              <motion.a
                href="mailto:superb.taipei@gmail.com"
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5 text-muted-gray" />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5 text-muted-gray" />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5 text-muted-gray" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 border-t border-white/10 text-center">
          <p className="text-muted-gray text-sm leading-relaxed">
            © {currentYear} 精湛資訊工作室 Superb Tech Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

