import React, { useEffect, useRef } from 'react'

const pillars = [
  {
    num: '01',
    title: 'ISO 9001:2015 Certified',
    desc: 'PSG operates under a fully documented Quality Management System certified to ISO 9001:2015 — ensuring every process from raw material intake to final dispatch meets international benchmarks of consistency and reliability.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'In-Process Inspection',
    desc: 'Every batch undergoes rigorous in-process checks — dimensional accuracy, optical clarity, edge finish, and thermal compliance — before it advances to the next production stage.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Raw Material Standards',
    desc: 'We source premium float glass exclusively from certified suppliers in Europe, USA, and Asia. Every incoming shipment is tested for thickness tolerance, light transmission, and coating integrity.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Customer Satisfaction First',
    desc: 'Our quality commitment extends beyond the factory floor. Dedicated after-sales support, on-time delivery guarantees, and structured feedback loops ensure every client experience reflects our standards.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Continuous Improvement',
    desc: 'PSG follows a PDCA (Plan-Do-Check-Act) cycle across all departments. Regular internal audits, management reviews, and corrective action protocols keep our processes evolving toward zero defects.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Environmental Responsibility',
    desc: 'Quality at PSG includes sustainable practices — energy-efficient tempering furnaces, responsible waste management, and sourcing from suppliers who meet environmental compliance standards.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

const stats = [
  { value: '55+', label: 'Years of Excellence' },
  { value: 'ISO', label: '9001:2015 Certified' },
  { value: '3rd', label: 'Generation Family Business' },
  { value: '100%', label: 'In-house Quality Control' },
]

export default function QualityCarePage() {
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
      <div className="qc-hero">
        <div className="container">
          <a href="#about" className="qc-back">← Company</a>
          <span className="label" style={{ display: 'block', marginTop: '20px' }}>Our Commitment</span>
          <h1 className="heading-xl" style={{ marginTop: '10px' }}>
            Quality<br />
            <em style={{ fontStyle: 'italic', color: 'var(--green-700)' }}>Without Compromise</em>
          </h1>
          <p className="body-lg" style={{ marginTop: '20px', maxWidth: '560px' }}>
            Since 1969, every pane of glass that leaves PSG has been held to the highest standards of safety, precision, and durability. Quality is not a department — it is our culture.
          </p>
        </div>
      </div>

      {/* Stats strip */}
      <div className="qc-stats-strip" data-reveal>
        <div className="container">
          <div className="qc-stats-grid">
            {stats.map(s => (
              <div className="qc-stat" key={s.label}>
                <span className="qc-stat-value">{s.value}</span>
                <span className="qc-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality pillars */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container">
          <div data-reveal style={{ marginBottom: '56px' }}>
            <span className="label">Our Standards</span>
            <h2 className="heading-lg" style={{ marginTop: '8px' }}>Six Pillars of<br />Quality Assurance</h2>
            <div className="green-line" />
          </div>
          <div className="qc-pillars-grid" data-reveal>
            {pillars.map(p => (
              <div className="qc-pillar-card" key={p.num}>
                <div className="qc-pillar-icon">{p.icon}</div>
                <span className="qc-pillar-num">{p.num}</span>
                <h3 className="qc-pillar-title">{p.title}</h3>
                <p className="qc-pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process image band */}
      <section className="qc-process-band" data-reveal>
        <div className="container">
          <div className="qc-process-grid">
            <div className="qc-process-text">
              <span className="label">Our Process</span>
              <h2 className="heading-lg" style={{ marginTop: '10px' }}>From Raw Glass<br />to Finished Perfection</h2>
              <div className="green-line" />
              <p className="body-md" style={{ marginTop: '16px' }}>
                Every order follows a documented production workflow. Glass is inspected at intake, processed through certified machinery, checked at each stage, and signed off before dispatch. No shortcuts. No compromises.
              </p>
              <ul className="qc-process-list">
                {['Raw material verification','In-line optical & dimensional checks','Post-process surface inspection','Packaging & transit quality control','Customer delivery confirmation'].map(item => (
                  <li key={item}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="qc-process-images">
              <div className="qc-img-tall">
                <img src="/quality/process-1.jpg" alt="Quality inspection" onError={e => { e.currentTarget.parentElement.style.background='var(--sage-bg)' ; e.currentTarget.style.display='none' }} />
              </div>
              <div className="qc-img-short">
                <img src="/quality/process-2.jpg" alt="Glass tempering" onError={e => { e.currentTarget.parentElement.style.background='rgba(61,107,71,0.08)'; e.currentTarget.style.display='none' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--sage-bg)', textAlign: 'center' }} data-reveal>
        <div className="container">
          <span className="label">Get In Touch</span>
          <h2 className="heading-lg" style={{ marginTop: '10px', marginBottom: '20px' }}>Have a Quality Requirement?</h2>
          <p className="body-md" style={{ maxWidth: '480px', margin: '0 auto 32px' }}>
            Our team is ready to discuss certifications, compliance documents, and custom quality assurance plans for your project.
          </p>
          <a href="#contact" className="btn-primary">Contact Our Team →</a>
        </div>
      </section>

    </div>
  )
}
