import React, { useEffect, useRef } from 'react'

const items = [
  {
    title: 'Façade Solution',
    desc: 'Sleek glass façades combining natural light, energy efficiency, and modern aesthetics.',
    icon: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>,
  },
  {
    title: 'Aluminum Doors & Windows',
    desc: 'Robust yet lightweight aluminum — the contemporary standard for commercial openings.',
    icon: <svg viewBox="0 0 24 24"><rect x="3" y="2" width="8" height="20" rx="1"/><rect x="13" y="2" width="8" height="20" rx="1"/><line x1="11" y1="12" x2="13" y2="12"/></svg>,
  },
  {
    title: 'ACM Cladding',
    desc: 'Lightweight aluminum composite panels — durable, economical façade finishing.',
    icon: <svg viewBox="0 0 24 24"><rect x="2" y="2" width="9" height="9"/><rect x="13" y="2" width="9" height="9"/><rect x="2" y="13" width="9" height="9"/><rect x="13" y="13" width="9" height="9"/></svg>,
  },
  {
    title: 'Skylight',
    desc: 'Custom skylights flooding interiors with natural light while maintaining structural integrity.',
    icon: <svg viewBox="0 0 24 24"><path d="M12 2L2 12h3v8h14v-8h3L12 2z"/><line x1="12" y1="12" x2="12" y2="20"/></svg>,
  },
  {
    title: 'Shop Fronts',
    desc: 'Premium glass shop fronts enhancing brand visibility and creating inviting entrances.',
    icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="18" rx="1"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="7" y1="9" x2="7" y2="21"/></svg>,
  },
  {
    title: 'Shower Cubicle & Railings',
    desc: 'Custom glass enclosures and structural railings — safety meets elegant aesthetics.',
    icon: <svg viewBox="0 0 24 24"><path d="M4 4h16v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4z"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="12" y1="4" x2="12" y2="10"/></svg>,
  },
]

export default function Architectural() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('[data-reveal]')
    if (!els) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target) } })
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="arch" id="solutions" ref={sectionRef}>
      <div className="arch-bg-text" aria-hidden="true">Architectural</div>
      <div className="container">
        <div className="arch-layout">
          <div className="arch-label-col" data-reveal>
            <span className="label">Architectural Solutions</span>
            <h2 className="heading-lg">Bold Solutions<br />for Modern Spaces</h2>
            <p className="body-lg">From full glass façades to intricate interior elements — PSG delivers precision-crafted solutions for commercial, hospitality, residential, and institutional spaces.</p>
            <a href="#contact" className="arch-cta">Discuss Your Project →</a>
          </div>
          <div className="arch-solutions-list" data-reveal data-delay="200">
            {items.map(item => (
              <div className="arch-item" key={item.title}>
                <div className="arch-item-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                <span className="arch-arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
