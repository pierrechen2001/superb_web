'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / scrollHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[6px] z-50 bg-transparent">
      <div
        className="h-full transition-all duration-100 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(to right, #F3B237, #2768A8)',
          filter: 'drop-shadow(0 0 10px #F3B237)',
          boxShadow: '0 0 15px rgba(243, 178, 55, 0.5)',
        }}
      />
    </div>
  )
}

