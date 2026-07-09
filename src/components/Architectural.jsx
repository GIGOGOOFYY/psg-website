import React, { useEffect, useRef } from 'react'

const items = [
  {
    title: 'Façade Solution',
    desc: 'Curtain wall systems, point-fixed glass, and full-height glazing that combine light, efficiency, and modern aesthetics.',
    href: '#/solutions/facade',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>,
  },
  {
    title: 'Aluminum Doors & Windows',
    desc: 'Robust yet lightweight aluminum frames — the contemporary standard for commercial and residential openings.',
    href: '#/solutions/aluminum',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="2" width="8" height="20" rx="1"/><rect x="13" y="2" width="8" height="20" rx="1"/><line x1="11" y1="12" x2="13" y2="12"/></svg>,
  },
  {
    title: 'ACM Cladding',
    desc: 'Aluminum composite panels offering a durable, economical, and visually striking façade finish.',
    href: '#/solutions/acm',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="9" height="9"/><rect x="13" y="2" width="9" height="9"/><rect x="2" y="13" width="9" height="9"/><rect x="13" y="13" width="9" height="9"/></svg>,
  },
  {
    title: 'Skylight',
    desc: 'Custom skylights and roof glazing that flood interiors with natural light while maintaining structural integrity.',
    href: '#/solutions/skylight',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 12h3v8h14v-8h3L12 2z"/><line x1="12" y1="12" x2="12" y2="20"/></svg>,
  },
  {
    title: 'Shop Fronts',
    desc: 'Premium glass shop fronts enhancing brand visibility, foot traffic, and creating inviting commercial entrances.',
    href: '#/solutions/shopfronts',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="1"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="7" y1="9" x2="7" y2="21"/></svg>,
  },
  {
    title: 'Shower Cubicle & Railings',
    desc: 'Frameless and semi-frameless glass enclosures and structural railings — safety meets elegant aesthetics.',
    href: '#/solutions/shower',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4z"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="12" y1="4" x2="12" y2="10"/></svg>,
  },
  {
    title: 'Glass Railing',
    desc: 'Structural glass balustrades and railings for staircases, balconies, and mezzanines — strength with transparency.',
    href: '#/solutions/railing',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="5" y1="6" x2="5" y2="20"/><line x1="9" y1="6" x2="9" y2="20"/><line x1="13" y1="6" x2="13" y2="20"/><line x1="17" y1="6" x2="17" y2="20"/><line x1="3" y1="20" x2="21" y2="20"/></svg>,
  },
  {
    title: 'Office Partition',
    desc: 'Frameless and framed glass partition systems that create open, light-filled, and collaborative workspaces.',
    href: '#/solutions/partition',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="1"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="2" y1="10" x2="12" y2="10"/><line x1="12" y1="14" x2="22" y2="14"/></svg>,
  },
  {
    title: 'Glass Furniture & Mirrors',
    desc: 'Bespoke glass furniture, decorative mirrors, and interior glass elements crafted with precision.',
    href: '#/solutions/furniture',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="12" rx="1"/><line x1="4" y1="18" x2="8" y2="15"/><line x1="20" y1="18" x2="16" y2="15"/><line x1="4" y1="18" x2="20" y2="18"/></svg>,
  },
]

export default function Architectural() {
  const sectionRef = useRef(null)
  const lineProgressRef = useRef(null)
  const dotRefs = useRef([])
  const rowRefs = useRef([])

  useEffect(() => {
    // Header reveal
    const header = sectionRef.current?.querySelector('.arch-milestone-header')
    const headerObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); headerObs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    if (header) headerObs.observe(header)

    const line = lineProgressRef.current
    const dots = dotRefs.current
    const rows = rowRefs.current
    if (!line || !dots.length) return

    function onScroll() {
      const trackEl = sectionRef.current?.querySelector('.arch-sol-track')
      if (!trackEl || !line) return

      const tlRect = trackEl.getBoundingClientRect()
      const tlTop = tlRect.top
      const tlHeight = tlRect.height
      const winH = window.innerHeight

      const progress = Math.min(1, Math.max(0, (winH * 0.8 - tlTop) / (tlHeight * 0.95)))
      line.style.transform = `scaleY(${progress})`

      dots.forEach((dot, i) => {
        if (!dot) return
        const dotRect = dot.getBoundingClientRect()
        const dotCenter = dotRect.top + dotRect.height / 2
        const active = dotCenter < winH * 0.82

        dot.classList.toggle('arch-sol-dot-active', active)

        const row = rows[i]
        if (!row) return
        if (active) {
          row.classList.add('arch-sol-row-visible')
          row.classList.remove('arch-sol-row-hidden')
        } else {
          row.classList.remove('arch-sol-row-visible')
          row.classList.add('arch-sol-row-hidden')
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="arch" id="solutions" ref={sectionRef}>
      <div className="arch-bg-text" aria-hidden="true">{'Solutions'.split('').map((ch, i) => <span className="bg-letter" key={i}>{ch}</span>)}</div>
      <div className="container">

        <div className="arch-milestone-header" data-reveal>
          <span className="label">Our Solutions</span>
          <h2 className="heading-lg">Complete Glass</h2>
          <div className="green-line" />
          <p className="body-md" style={{ maxWidth: '520px', marginTop: '12px' }}>From full glass façades to interior elements — PSG delivers precision-crafted solutions for commercial, hospitality, residential, and institutional spaces.</p>
        </div>

        <div className="arch-sol-track">
          {/* Background rail */}
          <div className="arch-sol-rail" />
          {/* Animated progress line */}
          <div className="arch-sol-line-progress" ref={lineProgressRef} />

          {items.map((item, i) => (
            <div className={`arch-sol-item${i % 2 === 0 ? ' left' : ' right'}`} key={item.title}>
              <a
                className="arch-sol-card arch-sol-row-hidden"
                href={item.href}
                ref={el => rowRefs.current[i] = el}
              >
                <div className="arch-sol-card-icon">{item.icon}</div>
                <div className="arch-sol-card-body">
                  <span className="arch-sol-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="arch-sol-title">{item.title}</h3>
                  <p className="arch-sol-desc">{item.desc}</p>
                </div>
                <span className="arch-sol-arrow">→</span>
              </a>
              <div
                className="arch-sol-dot"
                ref={el => dotRefs.current[i] = el}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        <div className="arch-milestone-cta" data-reveal style={{ textAlign: 'center', marginTop: '56px' }}>
          <a href="#contact" className="btn-primary">Discuss Your Project →</a>
        </div>

      </div>
    </section>
  )
}
