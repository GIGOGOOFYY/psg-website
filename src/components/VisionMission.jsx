import React, { useEffect, useRef } from 'react'

export default function VisionMission() {
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
    <section className="vm-section" id="vision" ref={sectionRef}>
      <div className="vm-glow" aria-hidden="true" />
      <div className="container">
        <div className="vm-inner" data-reveal>
          <span className="label">Our Purpose</span>
          <p className="vm-quote">Shaping the future of glass —<br /><em>one pane at a time.</em></p>
          <div className="vm-twin">
            <div className="vm-card">
              <span className="vm-tag">Vision</span>
              <h3 className="vm-card-title">Lead <em style={{ fontStyle:'italic', color:'var(--green-300)' }}>locally</em> and globally</h3>
              <p>PSG delivers innovative, high-quality, and sustainable glass solutions for the evolving needs of architecture and automotive industries. Committed to integrity, customer satisfaction, and continuous improvement.</p>
            </div>
            <div className="vm-card">
              <span className="vm-tag">Mission</span>
              <h3 className="vm-card-title"><em style={{ fontStyle:'italic', color:'var(--green-300)' }}>Inspiring</em> the Future with Every Pane</h3>
              <p>We deliver innovative, sustainable solutions that enrich spaces and lives — committed to craftsmanship, customer satisfaction, and environmental harmony. Together, we're shaping the future of glass.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
