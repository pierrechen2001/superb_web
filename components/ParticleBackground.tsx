'use client'

import { useEffect, useRef } from 'react'

// 根據當前時間獲取顏色
function getTimeBasedColor(): { base: string; rgb: { r: number; g: number; b: number } } {
  const hour = new Date().getHours()
  
  if (hour >= 6 && hour < 12) {
    return { base: '#2768A8', rgb: { r: 39, g: 104, b: 168 } } // 藍色 (早上)
  } else if (hour >= 12 && hour < 18) {
    return { base: '#F3B237', rgb: { r: 243, g: 178, b: 55 } } // 黃色 (下午)
  } else if (hour >= 18 && hour < 24) {
    return { base: '#6E57A5', rgb: { r: 110, g: 87, b: 165 } } // 紫色 (晚上)
  } else {
    return { base: '#3B82F6', rgb: { r: 59, g: 130, b: 246 } } // 靛色 (深夜)
  }
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 設定 canvas 尺寸
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    // 鼠標追蹤
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    // 創建粒子陣列
    const particleCount = window.innerWidth < 768 ? 60 : 120
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1.5, // 1.5-3.5px，更大更明顯
        opacity: Math.random() * 0.4 + 0.6, // 0.6-1.0，更明顯
      })
    }

    // 動畫循環
    let animationFrameId: number
    const color = getTimeBasedColor()
    const connectDistance = 150 // 粒子連線距離

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 更新並繪製粒子
      particles.forEach((particle, index) => {
        // 更新位置
        particle.x += particle.vx
        particle.y += particle.vy

        // 邊界檢查
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // 鼠標互動 - 排斥效果
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius
          particle.x -= (dx / distance) * force * 3
          particle.y -= (dy / distance) * force * 3
        }

        // 繪製粒子
        ctx.fillStyle = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // 繪製連線和幾何圖形
        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectDistance) {
            // 連線透明度根據距離計算
            const lineOpacity = (1 - distance / connectDistance) * 0.5
            ctx.strokeStyle = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${lineOpacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }
      })

      // 繪製鼠標周圍的光環效果
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        mouseRef.current.radius
      )
      gradient.addColorStop(0, `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 0.15)`)
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  )
}
