import React, { useEffect, useRef } from 'react'

export default function Projects() {
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
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="projects-header" data-reveal>
          <div>
            <span className="label">Featured Projects</span>
            <h2 className="heading-lg">Landmark Projects<br />Across Pakistan</h2>
          </div>
          <p className="body-md">PSG has delivered high-quality glass and material solutions for leading companies, malls, hospitals, and residential developments across the country.</p>
        </div>

        <div className="projects-cat-grid" data-reveal>

          <a className="pcat-card" href="#/projects/commercial">
            <div className="pcat-num" aria-hidden="true">01</div>
            <div className="pcat-inner">
              <span className="label">Malls · Hospitals · Institutions</span>
              <h3 className="pcat-title">Commercial<br />Projects</h3>
              <div className="pcat-divider" />
              <div className="pcat-footer">
                <span className="pcat-count">4 Projects</span>
                <span className="pcat-arrow">Explore →</span>
              </div>
            </div>
          </a>

          <a className="pcat-card" href="#/projects/residential">
            <div className="pcat-num" aria-hidden="true">02</div>
            <div className="pcat-inner">
              <span className="label">Villas · Bungalows · Private Homes</span>
              <h3 className="pcat-title">Residential<br />Projects</h3>
              <div className="pcat-divider" />
              <div className="pcat-footer">
                <span className="pcat-count">2 Projects</span>
                <span className="pcat-arrow">Explore →</span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}
