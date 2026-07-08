import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TextReveal from './components/TextReveal'
import About from './components/About'
import VisionMission from './components/VisionMission'
import Products from './components/Products'
import Architectural from './components/Architectural'
import Automotive from './components/Automotive'
import Security from './components/Security'
import Projects from './components/Projects'
import Clients from './components/Clients'
import IsoStrip from './components/IsoStrip'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GlobalParticles from './components/GlobalParticles'

const MARQUEE_ITEMS = [
  'Tempered Glass','Laminated Safety','Bullet Resistant','Acoustic Glass','Double Glazing',
  'Fire Rated','Curved Glass','Façade Systems','Quality Certified','3rd Generation','ACM Cladding',
]

export default function App() {
  // Cursor glow
  useEffect(() => {
    const glow = document.createElement('div')
    glow.id = 'cursor-glow'
    document.body.appendChild(glow)

    let mx = 0, my = 0, gx = 0, gy = 0
    let isHero = false

    const onMove = e => {
      mx = e.clientX; my = e.clientY
      const hero = document.getElementById('morphHero')
      if (hero) {
        const r = hero.getBoundingClientRect()
        isHero = e.clientY >= r.top && e.clientY <= r.bottom
      }
      glow.style.opacity = isHero ? '0' : '1'
    }
    const onLeave = () => { glow.style.opacity = '0' }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    function animate() {
      gx += (mx - gx) * 0.09
      gy += (my - gy) * 0.09
      glow.style.left = gx + 'px'
      glow.style.top = gy + 'px'
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      glow.remove()
    }
  }, [])

  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <>
      <GlobalParticles />
      <Navbar />
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
      <VisionMission />
      <Products />
      <Architectural />
      <Automotive />
      <Security />
      <Projects />
      <Clients />
      <IsoStrip />
      <Contact />
      <Footer />
    </>
  )
}
