import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TextReveal from './components/TextReveal'
import About from './components/About'
import History from './components/History'
import VisionMission from './components/VisionMission'
import Products from './components/Products'

import Architectural from './components/Architectural'
import Automotive from './components/Automotive'
import Security from './components/Security'
import Projects from './components/Projects'
import Clients from './components/Clients'
import IsoStrip from './components/IsoStrip'
import Technology from './components/Technology'
import Career from './components/Career'
import SolutionPage from './components/SolutionPage'
import ProjectsListPage from './components/ProjectsListPage'
import ProjectDetailPage from './components/ProjectDetailPage'
import AutomotiveProductPage from './components/AutomotiveProductPage'
import SecurityPage from './components/SecurityPage'
import QualityCarePage from './components/QualityCarePage'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GlobalParticles from './components/GlobalParticles'

const MARQUEE_ITEMS = [
  'Tempered Glass','Laminated Safety','Bullet Resistant','Acoustic Glass','Double Glazing',
  'Fire Rated','Curved Glass','Façade Systems','Quality Certified','3rd Generation','ACM Cladding',
]

const SOLUTION_SLUGS = ['facade','aluminum','acm','skylight','shopfronts','shower','railing','partition','furniture','hardware']

function getPage() {
  const h = window.location.hash
  if (h === '#/careers') return { type: 'careers' }
  if (h === '#/security') return { type: 'security' }
  if (h === '#/quality-care') return { type: 'quality-care' }
  if (h === '#/technology') return { type: 'technology' }
  if (h === '#/projects/commercial') return { type: 'projects', category: 'commercial' }
  if (h === '#/projects/residential') return { type: 'projects', category: 'residential' }
  const detailMatch = h.match(/^#\/projects\/(commercial|residential)\/(.+)$/)
  if (detailMatch) return { type: 'project-detail', category: detailMatch[1], slug: detailMatch[2] }
  for (const slug of SOLUTION_SLUGS) {
    if (h === `#/solutions/${slug}`) return { type: 'solution', slug }
  }
  const autoMatch = h.match(/^#\/automotive\/(saif-lam|saif-curve|saif-tough|saif-cool)$/)
  if (autoMatch) return { type: 'auto-product', slug: autoMatch[1] }
  return { type: 'home' }
}

function usePage() {
  const [page, setPage] = useState(getPage)
  useEffect(() => {
    const handler = () => setPage(getPage())
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])
  return page
}

function HomePage() {
  useEffect(() => {
    function scrollToHash() {
      const hash = window.location.hash
      if (hash && hash !== '#home' && !hash.startsWith('#/')) {
        const id = hash.replace('#', '')
        setTimeout(() => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }, 80)
      }
    }
    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <>
      <Hero />
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <div className="marquee-item" key={i}>{item}<span className="marquee-dot" /></div>
          ))}
        </div>
      </div>
      <TextReveal />
      <About />
      <History />
      <VisionMission />
      <Architectural />
      <Automotive />
      <Projects />
      <Clients />
      <IsoStrip />
      <Contact />
      <Footer />
    </>
  )
}

function TechnologyPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <div style={{ background: 'var(--white)', padding: '140px 0 64px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <a href="#home" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--green-600)', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>← Back to Home</a>
          <span className="label" style={{ display: 'block' }}>Manufacturing Process</span>
          <h1 className="heading-xl" style={{ marginTop: '10px' }}>State-of-the-Art<br /><em style={{ fontStyle: 'italic', color: 'var(--green-700)' }}>Technology</em></h1>
          <p className="body-lg" style={{ maxWidth: '560px', marginTop: '20px' }}>Modern machinery and advanced methods — from raw float glass to finished architectural panels.</p>
        </div>
      </div>
      <Technology />
      <Footer />
    </>
  )
}

function GlobalEffects() {
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    if (document.getElementById('cursor-canvas')) return

    const cv = document.createElement('canvas')
    cv.id = 'cursor-canvas'
    cv.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;'
    cv.width = window.innerWidth
    cv.height = window.innerHeight
    document.body.appendChild(cv)
    const ctx = cv.getContext('2d')

    const onResize = () => { cv.width = window.innerWidth; cv.height = window.innerHeight }
    window.addEventListener('resize', onResize)

    let mx = null, my = null
    let prevX = null, prevY = null
    const trail = []
    const drops = []

    const onMove = e => { mx = e.clientX; my = e.clientY }
    const onLeave = () => { mx = null; my = null; prevX = null; prevY = null }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    function spawnDrops(x, y, vx, vy) {
      const speed = Math.sqrt(vx * vx + vy * vy)
      const count = Math.floor(speed * 0.9 + 3)
      const moveAngle = Math.atan2(vy, vx)
      const perp = moveAngle + Math.PI / 2
      for (let i = 0; i < count; i++) {
        const spread = (Math.random() - 0.5) * 40
        const along  = (Math.random() - 0.5) * 12
        drops.push({
          x: x + Math.cos(perp) * spread + Math.cos(moveAngle) * along,
          y: y + Math.sin(perp) * spread + Math.sin(moveAngle) * along,
          vx: (Math.random() - 0.5) * 1.8 - vx * 0.06,
          vy: (Math.random() - 0.5) * 1.8 - vy * 0.06,
          r: 4 + Math.random() * 14,
          alpha: 0.06 + Math.random() * 0.05,
          life: 1.0,
          decay: 0.010 + Math.random() * 0.008,
        })
      }
    }

    let raf
    function animate() {
      const W = cv.width, H = cv.height
      ctx.clearRect(0, 0, W, H)
      const now = Date.now()

      if (mx !== null) {
        const vx = prevX !== null ? mx - prevX : 0
        const vy = prevY !== null ? my - prevY : 0
        const speed = Math.sqrt(vx * vx + vy * vy)
        trail.push({ x: mx, y: my, t: now })
        if (trail.length > 80) trail.shift()
        if (speed > 1.2) spawnDrops(mx, my, vx, vy)
        prevX = mx; prevY = my
      }

      // Wide soft ribbon
      if (trail.length > 2) {
        for (let i = 1; i < trail.length; i++) {
          const p = trail[i - 1], c = trail[i]
          const age = (now - c.t) / 600
          if (age >= 1) continue
          const ease = 1 - age * age
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(c.x, c.y)
          ctx.strokeStyle = `rgba(61,107,71,${ease * 0.04})`
          ctx.lineWidth = ease * 28 + 3
          ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.stroke()
        }
        // Bright core
        for (let i = 1; i < trail.length; i++) {
          const p = trail[i - 1], c = trail[i]
          const age = (now - c.t) / 300
          if (age >= 1) continue
          const ease = 1 - age * age
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(c.x, c.y)
          ctx.strokeStyle = `rgba(61,107,71,${ease * 0.10})`
          ctx.lineWidth = ease * 4 + 1
          ctx.lineCap = 'round'; ctx.stroke()
        }
      }

      // Droplets
      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i]
        d.x += d.vx; d.y += d.vy
        d.vy += 0.045; d.vx *= 0.975; d.vy *= 0.975
        d.life -= d.decay; d.r *= 0.993
        if (d.life <= 0 || d.r < 0.5) { drops.splice(i, 1); continue }
        const a = d.alpha * d.life * d.life
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r)
        g.addColorStop(0, `rgba(61,107,71,${a})`)
        g.addColorStop(0.55, `rgba(61,107,71,${a * 0.35})`)
        g.addColorStop(1, 'rgba(61,107,71,0)')
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = g; ctx.fill()
      }

      // Cursor dot
      if (mx !== null) {
        ctx.beginPath(); ctx.arc(mx, my, 3.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(61,107,71,0.85)'; ctx.fill()
      }

      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
      cv.remove()
    }
  }, [])
  return null
}

export default function App() {
  const page = usePage()
  return (
    <>
      <GlobalEffects />
      <GlobalParticles />
      <Navbar currentPage={page.type} />
      {page.type === 'careers' && <><Career /><Footer /></>}
      {page.type === 'security' && <><SecurityPage /><Footer /></>}
      {page.type === 'quality-care' && <><QualityCarePage /><Footer /></>}
      {page.type === 'technology' && <TechnologyPage />}
      {page.type === 'solution' && <><SolutionPage slug={page.slug} /><Footer /></>}
      {page.type === 'projects' && <ProjectsListPage category={page.category} />}
      {page.type === 'project-detail' && <ProjectDetailPage category={page.category} slug={page.slug} />}
      {page.type === 'auto-product' && <><AutomotiveProductPage slug={page.slug} /><Footer /></>}
      {page.type === 'home' && <HomePage />}
    </>
  )
}
