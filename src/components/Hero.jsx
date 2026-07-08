import React, { useEffect, useRef } from 'react'

const N = 20
const CW = 60, CH = 85, HW = 30, HH = 42.5

// Drop your project photos into New website/hero/ named 1.jpg, 2.jpg … 20.jpg
// Supported formats: .jpg .jpeg .png .webp
const IMAGES = Array.from({ length: 20 }, (_, i) => `/hero/${i + 1}.png`)
const LABELS = [
  'Tempered Glass','Laminated Safety','Bullet Resistant','Acoustic Glass',
  'Smart Glass','Fire Rated','Curved Glass','Frosted Privacy',
  'UV Protected','Heat Strengthened','Ceramic Printed','Anti-Reflective',
  'Insulated Units','Decorative Glass','Security Glass','Mirror Glass',
  'Structural Glass','Spandrel Glass','Wired Glass','Pattern Glass',
]

export default function Hero() {
  const heroRef = useRef(null)
  const cardsRef = useRef(null)
  const introRef = useRef(null)
  const arcRef = useRef(null)
  const particleCanvasRef = useRef(null)
  const stateRef = useRef({
    introPhase: 'scatter',
    targetVS: 0, virtualScroll: 0,
    parallaxT: 0, parallaxC: 0,
    cx: new Float64Array(N), cy: new Float64Array(N),
    cr: new Float64Array(N), cs: new Float64Array(N), co: new Float64Array(N),
    tx: new Float64Array(N), ty: new Float64Array(N),
    tr: new Float64Array(N), ts: new Float64Array(N), to: new Float64Array(N),
    sx: new Float64Array(N), sy: new Float64Array(N), sr: new Float64Array(N),
    cardEls: [],
  })

  useEffect(() => {
    const hero = heroRef.current
    const cardsEl = cardsRef.current
    const introEl = introRef.current
    const arcEl = arcRef.current
    if (!hero || !cardsEl || !introEl || !arcEl) return
    const s = stateRef.current

    // Build cards
    for (let i = 0; i < N; i++) {
      const wrap = document.createElement('div'); wrap.className = 'mc'
      const inner = document.createElement('div'); inner.className = 'mc-i'
      const front = document.createElement('div'); front.className = 'mc-f'
      const img = document.createElement('img'); img.src = IMAGES[i]; img.alt = LABELS[i]; img.loading = 'lazy'
      front.appendChild(img)
      const back = document.createElement('div'); back.className = 'mc-b'
      const bv = document.createElement('div'); bv.className = 'mc-bv'; bv.textContent = 'PSG'
      const bt = document.createElement('div'); bt.className = 'mc-bt'; bt.textContent = LABELS[i]
      back.appendChild(bv); back.appendChild(bt)
      inner.appendChild(front); inner.appendChild(back)
      wrap.appendChild(inner); cardsEl.appendChild(wrap)
      s.cardEls.push(wrap)
    }

    const lerp = (a, b, t) => a + (b - a) * t
    const clamp = (v, lo, hi) => v < lo ? lo : v > hi ? hi : v
    const vw = () => hero.offsetWidth
    const vh = () => hero.offsetHeight

    function seedScatter() {
      for (let i = 0; i < N; i++) {
        s.sx[i] = vw()/2 + (Math.random()-0.5)*1500
        s.sy[i] = vh()/2 + (Math.random()-0.5)*1000
        s.sr[i] = (Math.random()-0.5)*180
        s.cx[i] = s.tx[i] = s.sx[i]
        s.cy[i] = s.ty[i] = s.sy[i]
        s.cr[i] = s.tr[i] = s.sr[i]
        s.cs[i] = s.ts[i] = 0.6
        s.co[i] = s.to[i] = 0
      }
    }

    function setLineTargets() {
      const spacing = 70
      for (let i = 0; i < N; i++) {
        s.tx[i] = vw()/2 + (i - (N-1)/2) * spacing
        s.ty[i] = vh()/2
        s.tr[i] = 0; s.ts[i] = 1; s.to[i] = 1
      }
    }

    function setCircleTargets() {
      const minD = Math.min(vw(), vh())
      const r = Math.min(minD * 0.35, 350)
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2
        s.tx[i] = vw()/2 + Math.cos(a) * r
        s.ty[i] = vh()/2 + Math.sin(a) * r
        s.tr[i] = (i / N) * 360 + 90
        s.ts[i] = 1; s.to[i] = 1
      }
    }

    function arcPosForCard(i, shuffleVal, px) {
      const W = vw(), H = vh()
      const isMobile = W < 768
      const baseR = Math.min(W, H * 1.5)
      const arcR = baseR * 1.1
      const apexY = H * (isMobile ? 0.82 : 0.75)
      const centerY = apexY + arcR
      const spreadAngle = isMobile ? 90 : 110
      const startAngle = -90 - spreadAngle / 2
      const arcStartOffset = spreadAngle * 0.25
      const boundedRot = arcStartOffset - (shuffleVal * spreadAngle * 1.05)
      const deg = startAngle + i * (spreadAngle / (N - 1)) + boundedRot
      const rad = deg * Math.PI / 180
      return {
        x: W/2 + Math.cos(rad) * arcR + px,
        y: Math.sin(rad) * arcR + centerY,
        rot: deg + 90,
        scl: isMobile ? 1.3 : 1.8,
      }
    }

    let rafId
    function tick() {
      rafId = requestAnimationFrame(tick)
      s.virtualScroll = lerp(s.virtualScroll, s.targetVS, 0.045)
      s.parallaxC = lerp(s.parallaxC, s.parallaxT, 0.07)
      const morphVal = clamp(s.virtualScroll / 1800, 0, 1)
      const shuffleVal = clamp((s.virtualScroll - 1800) / 3000, 0, 1)
      if (s.introPhase === 'scroll') {
        const minD = Math.min(vw(), vh())
        const circleR = Math.min(minD * 0.35, 350)
        for (let i = 0; i < N; i++) {
          const ca = (i / N) * Math.PI * 2
          const circX = vw()/2 + Math.cos(ca) * circleR
          const circY = vh()/2 + Math.sin(ca) * circleR
          const circRot = (i / N) * 360 + 90
          const ap = arcPosForCard(i, shuffleVal, s.parallaxC)
          s.tx[i] = lerp(circX, ap.x, morphVal)
          s.ty[i] = lerp(circY, ap.y, morphVal)
          s.tr[i] = lerp(circRot, ap.rot, morphVal)
          s.ts[i] = lerp(1, ap.scl, morphVal)
          s.to[i] = 1
        }
      }
      const L = 0.07
      for (let i = 0; i < N; i++) {
        s.cx[i] = lerp(s.cx[i], s.tx[i], L)
        s.cy[i] = lerp(s.cy[i], s.ty[i], L)
        s.cr[i] = lerp(s.cr[i], s.tr[i], L)
        s.cs[i] = lerp(s.cs[i], s.ts[i], L)
        s.co[i] = lerp(s.co[i], s.to[i], L)
        s.cardEls[i].style.transform =
          `translate(${s.cx[i]-HW}px,${s.cy[i]-HH}px) rotate(${s.cr[i]}deg) scale(${s.cs[i]})`
        s.cardEls[i].style.opacity = s.co[i]
      }
      const introOp = s.introPhase === 'scroll'
        ? Math.max(0, 1 - morphVal * 2.5)
        : (s.introPhase === 'scatter' ? 0 : 1)
      introEl.style.opacity = introOp
      introEl.style.pointerEvents = introOp < 0.05 ? 'none' : 'auto'
      const arcOp = s.introPhase === 'scroll' ? clamp((morphVal - 0.8) / 0.2, 0, 1) : 0
      arcEl.style.opacity = arcOp
      arcEl.style.pointerEvents = arcOp > 0.1 ? 'auto' : 'none'
    }

    seedScatter()
    tick()

    const t1 = setTimeout(() => { s.introPhase = 'line'; setLineTargets() }, 400)
    const t2 = setTimeout(() => {
      s.introPhase = 'circle'; setCircleTargets()
      introEl.style.transition = 'opacity 0.8s ease'
    }, 2000)

    const onWheel = e => {
      if (s.introPhase !== 'circle' && s.introPhase !== 'scroll') return
      if (s.targetVS >= 6000 && e.deltaY > 0) return
      if (s.targetVS <= 0 && e.deltaY < 0) return
      e.preventDefault()
      s.introPhase = 'scroll'
      s.targetVS = clamp(s.targetVS + e.deltaY * 1.2, 0, 6000)
    }
    let touchY0 = 0
    const onTouchStart = e => {
      if (s.introPhase !== 'circle' && s.introPhase !== 'scroll') return
      touchY0 = e.touches[0].clientY
    }
    const onTouchMove = e => {
      if (s.introPhase !== 'circle' && s.introPhase !== 'scroll') return
      const dy = touchY0 - e.touches[0].clientY
      touchY0 = e.touches[0].clientY
      s.introPhase = 'scroll'
      s.targetVS = clamp(s.targetVS + dy * 2.5, 0, 6000)
    }
    const onMouseMove = e => {
      const rect = hero.getBoundingClientRect()
      s.parallaxT = ((e.clientX - rect.left) / rect.width - 0.5) * 100
    }
    const onMouseLeave = () => { s.parallaxT = 0 }

    hero.addEventListener('wheel', onWheel, { passive: false })
    hero.addEventListener('touchstart', onTouchStart, { passive: true })
    hero.addEventListener('touchmove', onTouchMove, { passive: true })
    hero.addEventListener('mousemove', onMouseMove)
    hero.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(t1); clearTimeout(t2)
      hero.removeEventListener('wheel', onWheel)
      hero.removeEventListener('touchstart', onTouchStart)
      hero.removeEventListener('touchmove', onTouchMove)
      hero.removeEventListener('mousemove', onMouseMove)
      hero.removeEventListener('mouseleave', onMouseLeave)
      // cleanup card elements
      s.cardEls.forEach(el => el.remove())
      s.cardEls = []
    }
  }, [])

  // Hero particles
  useEffect(() => {
    const canvas = particleCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const QUANTITY = window.matchMedia('(max-width: 768px)').matches ? 80 : 220
    const BASE_SPEED = 0.6
    const REPEL_RADIUS = 160
    const REPEL_FORCE = 6
    const FRICTION = 0.92
    const rgb = [61, 107, 71]
    let particles = []
    const mouse = { x: -9999, y: -9999 }
    let w = 0, h = 0, rafId

    function resize() {
      const parent = canvas.parentElement
      w = parent.offsetWidth; h = parent.offsetHeight
      canvas.width = w * dpr; canvas.height = h * dpr
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = []
      for (let i = 0; i < QUANTITY; i++) particles.push(make())
    }
    function make() {
      const angle = Math.random() * Math.PI * 2
      const speed = BASE_SPEED * (0.4 + Math.random() * 0.9)
      return { x: Math.random()*w, y: Math.random()*h, vx: Math.cos(angle)*speed, vy: Math.sin(angle)*speed, r: 0.8+Math.random()*1.8, alpha: 0, targetAlpha: 0.25+Math.random()*0.40 }
    }
    function frame() {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = p.x - mouse.x, dy = p.y - mouse.y
        const dist = Math.sqrt(dx*dx + dy*dy)
        if (dist < REPEL_RADIUS && dist > 0.1) {
          const force = Math.pow((REPEL_RADIUS - dist) / REPEL_RADIUS, 2)
          p.vx += (dx/dist)*force*REPEL_FORCE; p.vy += (dy/dist)*force*REPEL_FORCE
        }
        p.vx *= FRICTION; p.vy *= FRICTION
        const spd = Math.sqrt(p.vx*p.vx + p.vy*p.vy)
        if (spd < BASE_SPEED * 0.3) {
          const a = Math.atan2(p.vy, p.vx)
          p.vx = Math.cos(a)*BASE_SPEED*0.5; p.vy = Math.sin(a)*BASE_SPEED*0.5
        }
        p.x += p.vx; p.y += p.vy
        const edge = Math.min(p.x, w-p.x, p.y, h-p.y)
        p.alpha += (p.targetAlpha * Math.min(1, edge/20) - p.alpha) * 0.05
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2)
        ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${Math.max(0, p.alpha)})`
        ctx.fill()
        if (p.x < -p.r) p.x = w+p.r; else if (p.x > w+p.r) p.x = -p.r
        if (p.y < -p.r) p.y = h+p.r; else if (p.y > h+p.r) p.y = -p.r
      }
      rafId = requestAnimationFrame(frame)
    }
    const onMM = e => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top }
    const onML = () => { mouse.x = -9999; mouse.y = -9999 }
    document.addEventListener('mousemove', onMM)
    document.addEventListener('mouseleave', onML)
    window.addEventListener('resize', resize)
    resize(); frame()
    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', onMM)
      document.removeEventListener('mouseleave', onML)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div className="morph-hero" id="morphHero" ref={heroRef}>
        <div className="morph-bg-grid" aria-hidden="true" />
        <div className="morph-bar" aria-hidden="true" />
        <div className="morph-intro" id="morphIntro" ref={introRef}>
          <h1>Crafting<br /><em>Excellence</em><br />in Glass</h1>
          <p className="morph-scroll-hint">↓ Scroll to Explore</p>
        </div>
        <div className="morph-arc" id="morphArc" ref={arcRef}>
          <h2 className="heading-xl">55 Years of<br /><em>Clarity</em> &amp; Strength</h2>
          <p className="body-lg">Pakistan's pioneer glass processing company — delivering innovative safety glass solutions for architecture, automotive, and security industries.</p>
          <div className="hero-actions">
            <a href="#products" className="btn-primary">Explore Products <span className="btn-arrow">→</span></a>
            <a href="#contact" className="btn-ghost">Request a Quote <span className="btn-arrow">→</span></a>
          </div>
        </div>
        <canvas ref={particleCanvasRef} id="hero-particles" aria-hidden="true" style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:1 }} />
        <div className="morph-cards" id="morphCards" ref={cardsRef} aria-hidden="true" />
      </div>
    </section>
  )
}
