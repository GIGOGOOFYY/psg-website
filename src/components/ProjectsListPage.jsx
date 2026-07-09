import React, { useEffect, useRef } from 'react'
import Footer from './Footer'

export const allProjects = {
  commercial: {
    label: 'Commercial Projects',
    sub: 'Malls · Hospitals · Institutions · Corporate',
    items: [
      { slug: 'luckyone', name: 'LuckyOne Mall', location: 'Karachi · 2014–2017', type: 'Commercial', supplies: ['Curtain Wall', 'Canopy', 'Shop Fronts', 'ACM Cladding'], images: ['/projects/luckyone-1.jpg', '/projects/luckyone-2.jpg', '/projects/luckyone-3.jpg'], video: '', description: 'PSG delivered a full curtain wall, canopy, shop fronts, and ACM cladding package for LuckyOne Mall — one of Karachi\'s largest shopping destinations.' },
      { slug: 'packages-mall', name: 'Packages Mall', location: 'Shahrah-e-Roomi, Lahore · 2015–2016', type: 'Commercial', supplies: ['Tempered Glass', 'Color Kote', 'ACM Cladding'], images: ['/projects/packages-1.jpg', '/projects/packages-2.jpg'], video: '', description: 'Supplied and installed tempered glass, Color Kote panels, and ACM cladding for Packages Mall in Lahore — a landmark retail complex in the city.' },
      { slug: 'quaid-hospital', name: 'Quaid-e-Azam International Hospital', location: 'Peshawar Road, Islamabad · 2009', type: 'Healthcare', supplies: ['Safe Tough Façade', 'Alucobond', 'Curtain Wall'], images: ['/projects/quaid-1.jpg', '/projects/quaid-2.jpg'], video: '', description: 'Delivered a comprehensive façade package including Safe Tough glass, Alucobond cladding, and curtain wall systems for this major healthcare institution in Islamabad.' },
      { slug: 'aga-khan', name: 'Aga Khan University', location: 'National Stadium Road, Karachi · Ongoing', type: 'Institutional', supplies: ['Window Glasses', 'Partitions', 'Skylights', 'Mirrors'], images: ['/projects/aga-khan-1.jpg', '/projects/aga-khan-2.jpg'], video: '', description: 'An ongoing partnership with Aga Khan University covering window glazing, interior glass partitions, skylights, and mirror installations across the campus.' },
    ],
  },
  residential: {
    label: 'Residential Projects',
    sub: 'Villas · Bungalows · Private Homes',
    items: [
      { slug: 'dha-bungalow', name: 'Luxury Bungalow — DHA', location: 'Karachi · Residential', type: 'Residential', supplies: ['Doors & Windows', 'Skylights', 'Railings'], images: ['/projects/dha-1.jpg', '/projects/dha-2.jpg', '/projects/dha-3.jpg'], video: '', description: 'Custom aluminium doors and windows, feature skylights, and frameless glass railings for a luxury residential bungalow in DHA Karachi.' },
      { slug: 'clifton-villa', name: 'Premium Villa — Clifton', location: 'Karachi · Residential', type: 'Residential', supplies: ['Doors & Windows', 'Shower Enclosures', 'Skylights'], images: ['/projects/clifton-1.jpg', '/projects/clifton-2.jpg'], video: '', description: 'Complete interior and exterior glass package for a premium villa in Clifton — including bespoke aluminium openings, frameless shower enclosures, and roof skylights.' },
    ],
  },
}

export default function ProjectsListPage({ category }) {
  const ref = useRef(null)
  const data = allProjects[category]

  useEffect(() => {
    window.scrollTo(0, 0)
    const els = ref.current?.querySelectorAll('[data-reveal]')
    if (!els) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target) } })
    }, { threshold: 0.08 })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [category])

  if (!data) return null

  return (
    <div ref={ref}>
      {/* Hero */}
      <div style={{ background: 'var(--white)', padding: '140px 0 64px', borderBottom: '1px solid var(--border)' }} data-reveal>
        <div className="container">
          <a
            href="#projects"
            className="sol-back"
            onClick={e => { e.preventDefault(); window.location.hash = '#projects'; setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 80) }}
          >← Back to Projects</a>
          <span className="label" style={{ display: 'block', marginTop: '20px' }}>{data.sub}</span>
          <h1 className="heading-xl" style={{ marginTop: '10px' }}>{data.label}</h1>
        </div>
      </div>

      {/* Project rows */}
      <div style={{ background: 'var(--white)', padding: '60px 0' }}>
        <div className="container">
          {data.items.map((p, i) => (
            <a
              key={p.slug}
              className="proj-row"
              href={`#/projects/${category}/${p.slug}`}
              data-reveal
            >
              <span className="proj-row-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="proj-row-info">
                <h3 className="proj-row-name">{p.name}</h3>
                <span className="proj-row-loc">{p.location}</span>
              </div>
              <div className="proj-row-tags">
                {p.supplies.map(s => <span key={s}>{s}</span>)}
              </div>
              <span className="proj-row-arrow">→</span>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
