import React, { useEffect, useRef } from 'react'
import Security from './Security'

export default function SecurityPage() {
  const ref = useRef(null)
  useEffect(() => {
    window.scrollTo(0, 0)
    const els = ref.current?.querySelectorAll('[data-reveal]')
    if (!els) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target) } })
    }, { threshold: 0.08 })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {/* Hero */}
      <div style={{ background: 'var(--white)', padding: '100px 0 40px', borderBottom: '1px solid var(--border)' }} data-reveal>
        <div className="container">
          <a href="#products" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--green-600)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>← Products</a>
          <span className="label" style={{ display: 'block', marginTop: '16px' }}>Security Glazing</span>
          <h1 className="heading-lg" style={{ marginTop: '8px' }}>Bullet &amp; Fire<br />Resistant Glass</h1>
          <p className="body-lg" style={{ marginTop: '8px', maxWidth: '560px' }}>PSG engineers safety and security glazing for banks, embassies, courtrooms, and critical infrastructure — certified to international ballistic and fire standards.</p>
        </div>
      </div>
      <Security />
    </div>
  )
}
