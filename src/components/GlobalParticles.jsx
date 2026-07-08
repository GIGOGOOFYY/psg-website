import React, { useEffect, useRef } from 'react'

export default function GlobalParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const QUANTITY = isMobile ? 60 : 180
    const BASE_SPEED = 0.45
    const REPEL_R = 100
    const REPEL_F = 2.8
    const FRICTION = 0.93
    const rgb = [61, 107, 71]

    let particles = []
    const mouse = { x: -9999, y: -9999 }
    let w = 0, h = 0
    let rafId

    function resize() {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.scale(dpr, dpr)
      if (particles.length === 0) {
        for (let i = 0; i < QUANTITY; i++) particles.push(make())
      }
    }

    function make() {
      const angle = Math.random() * Math.PI * 2
      const speed = BASE_SPEED * (0.4 + Math.random() * 0.9)
      return {
        x: Math.random() * w, y: Math.random() * h,
        vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        r: 0.7 + Math.random() * 1.4,
        alpha: 0, targetAlpha: 0.18 + Math.random() * 0.30,
      }
    }

    function frame() {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = p.x - mouse.x, dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < REPEL_R && dist > 0.1) {
          const force = Math.pow((REPEL_R - dist) / REPEL_R, 2)
          p.vx += (dx / dist) * force * REPEL_F
          p.vy += (dy / dist) * force * REPEL_F
        }
        p.vx *= FRICTION; p.vy *= FRICTION
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (spd < BASE_SPEED * 0.3) {
          const a = Math.atan2(p.vy, p.vx)
          p.vx = Math.cos(a) * BASE_SPEED * 0.5
          p.vy = Math.sin(a) * BASE_SPEED * 0.5
        }
        p.x += p.vx; p.y += p.vy
        const edge = Math.min(p.x, w - p.x, p.y, h - p.y)
        const ef = Math.min(1, edge / 20)
        p.alpha += (p.targetAlpha * ef - p.alpha) * 0.05
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${Math.max(0, p.alpha)})`
        ctx.fill()
        if (p.x < -p.r) p.x = w + p.r
        else if (p.x > w + p.r) p.x = -p.r
        if (p.y < -p.r) p.y = h + p.r
        else if (p.y > h + p.r) p.y = -p.r
      }
      rafId = requestAnimationFrame(frame)
    }

    const onMouseMove = e => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    const onResize = () => {
      w = window.innerWidth; h = window.innerHeight
      canvas.width = w * dpr; canvas.height = h * dpr
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px'
      ctx.scale(dpr, dpr)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', onResize)
    resize()
    frame()

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="global-particles"
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2 }}
    />
  )
}
