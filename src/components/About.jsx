import React, { useEffect, useRef } from 'react'

export default function About() {
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
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-bg-num" aria-hidden="true">1969</div>
      <div className="container">
        <div className="about-grid">
          <div data-reveal style={{display:'flex', flexDirection:'column', gap:'12px'}}>
            {/* Badge + year above image */}
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <div className="agl-badge" style={{position:'static'}}>
                <div className="agl-badge-dot" />
                <span style={{color:'var(--text-dark)'}}>Family Owned · 3 Generations</span>
              </div>
              <div className="agl-year" style={{position:'static', color:'var(--text-dark)'}}>Est. 1969</div>
            </div>
            {/* Photo */}
            <div className="about-glass-art" style={{position:'relative', overflow:'hidden', borderRadius:'var(--radius-lg)', flexShrink:0}}>
              <img
                src="/about/photo.png"
                alt="Pakistan Safety Glass — our facility"
                style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}
                onError={e => { e.currentTarget.style.display='none' }}
              />
            </div>
            {/* Quote below image */}
            <p className="agl-quote" style={{position:'static', margin:0, color:'var(--text-dark)'}}>
              "A legacy of quality across 3 generations — Crafting Excellence in glass since 1969."
            </p>
          </div>
          <div className="about-text" data-reveal data-delay="200">
            <span className="label">Who We Are</span>
            <h2 className="heading-lg">Pakistan's Pioneer<br />Glass Processing Company</h2>
            <p className="body-lg">Established in 1969, Pakistan Safety Glass Works is among the pioneer glass processing companies in Pakistan — dedicated to revolutionizing float glass processing and finishing.</p>
            <p className="body-md">A 3rd generation, family-owned private enterprise that has established itself as a role model in the glass processing industry — locally and globally.</p>
            <div className="about-pillars">
              {[
                { num: '01', title: 'ISO 9001:2015 Certified', desc: 'Excellent quality, economical cost, and on-time delivery — certified and verified.' },
                { num: '02', title: 'Local & Global Ambition', desc: 'Committed to continuous improvement and integrity across every market we serve.' },
                { num: '03', title: 'Sustainable Craftsmanship', desc: 'Customer satisfaction and environmental harmony at the core of every product line.' },
              ].map(p => (
                <div className="about-pillar" key={p.num}>
                  <div className="about-pillar-num">{p.num}</div>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
