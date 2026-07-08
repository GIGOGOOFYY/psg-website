import React, { useEffect, useRef } from 'react'

const projects = [
  { num: '01', name: 'Aga Khan University', sub: 'National Stadium Road, Karachi · Ongoing', type: 'Institutional', supplies: ['Window Glasses','Partitions','Skylights','Mirrors'] },
  { num: '02', name: 'LuckyOne Mall', sub: 'Karachi · 2014–2017', type: 'Commercial', supplies: ['Curtain Wall','Canopy','Shop Fronts','ACM Cladding'] },
  { num: '03', name: 'Packages Mall', sub: 'Shahrah-e-Roomi, Lahore · 2015–2016', type: 'Commercial', supplies: ['Tempered Glass','Color Kote','ACM Cladding'] },
  { num: '04', name: 'Quaid-e-Azam International Hospital', sub: 'Peshawar Road, Islamabad · 2009', type: 'Healthcare', supplies: ['Safe Tough Façade','Alucobond','Curtain Wall'] },
  { num: '05', name: 'Luxury Bungalow — DHA', sub: 'Karachi · Residential', type: 'Residential', supplies: ['Doors/Windows','Skylights','Railings'] },
  { num: '06', name: 'Premium Villa — Clifton', sub: 'Karachi · Residential', type: 'Residential', supplies: ['Doors/Windows','Shower Enclosures','Skylights'] },
]

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
          <p className="body-md">PSG has delivered high-quality glass and material solutions for leading companies, malls, hospitals, and educational institutes across the country.</p>
        </div>
        <div data-reveal>
          {projects.map(p => (
            <a className="project-row" href="#contact" key={p.num}>
              <span className="project-row-num">{p.num}</span>
              <div>
                <h3>{p.name}</h3>
                <span className="project-row-sub">{p.sub}</span>
              </div>
              <div className="project-row-meta">
                <span className="project-type-badge">{p.type}</span>
                <ul className="project-supplies">
                  {p.supplies.map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
