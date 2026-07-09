import React, { useEffect, useRef } from 'react'

const shields = [
  {
    title: 'Bandit Shield',
    subtitle: 'Anti-Intrusion Glass',
    desc: 'Resists manual attacks — withstands hammers, axes, and rods. Holds when broken, denying access and protecting occupants.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z"/>
      </svg>
    ),
    specs: [
      { label: 'Standard', value: 'EN 356' },
      { label: 'Classes', value: 'P1A – P8B' },
      { label: 'Thickness', value: '7 – 52 mm' },
      { label: 'Glass Type', value: 'Laminated' },
      { label: 'Applications', value: 'Banks, Jewellery, Embassies' },
    ],
  },
  {
    title: 'Blast Shield',
    subtitle: 'Explosion-Resistant Glass',
    desc: 'Designed to reduce blast injury risk. Ideal for embassies, banks, courtrooms, and armored vehicles under explosive threat.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    specs: [
      { label: 'Standard', value: 'EN 13541' },
      { label: 'Classes', value: 'ER1 – ER4' },
      { label: 'Thickness', value: '19 – 60 mm' },
      { label: 'Glass Type', value: 'Laminated + PVB' },
      { label: 'Applications', value: 'Embassies, Courtrooms, Vehicles' },
    ],
  },
  {
    title: 'Fire Shield',
    subtitle: 'Fire-Rated Glass',
    desc: 'Transparent fire-protection glass — maintains openness while safeguarding against fire, smoke, and radiated heat.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z"/>
        <path d="M9 14s0-3 3-4c0 0-1 3 2 4s0 3-2 3-3-3-3-3z"/>
      </svg>
    ),
    specs: [
      { label: 'Standard', value: 'EN 1364 / BS 476' },
      { label: 'Rating', value: 'E30 – EI120' },
      { label: 'Thickness', value: '6 – 40 mm' },
      { label: 'Glass Type', value: 'Tempered / Wired / Gel' },
      { label: 'Applications', value: 'Stairwells, Corridors, Facades' },
    ],
  },
]

export default function Security() {
  const sectionRef = useRef(null)
  const bgTextRef = useRef(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('[data-reveal]')
    if (!els) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target) } })
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    const bgText = bgTextRef.current
    if (!section || !bgText) return
    const onMove = e => {
      const r = bgText.getBoundingClientRect()
      const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom
      bgText.classList.toggle('bg-text-lit', inside)
    }
    const onLeave = () => bgText.classList.remove('bg-text-lit')
    section.addEventListener('mousemove', onMove)
    section.addEventListener('mouseleave', onLeave)
    return () => { section.removeEventListener('mousemove', onMove); section.removeEventListener('mouseleave', onLeave) }
  }, [])

  return (
    <section className="bullet-section" id="security" ref={sectionRef}>
      <div className="bullet-bg-text" aria-hidden="true">{'Security'.split('').map((ch, i) => <span className="bg-letter" key={i}>{ch}</span>)}</div>
      <div className="container">

        <div className="security-header" data-reveal>
          <div>
            <span className="label">Security Glazing</span>
            <h2 className="heading-lg">Bullet &amp; Fire<br />Resistant Glass</h2>
          </div>
          <p className="body-md">PSG is a leading manufacturer of innovative safety and security glazing — toughened, laminated, bullet-resistant, and heat-strengthened glass for security, defense, and architectural industries.</p>
        </div>

        <div className="sec-cards" data-reveal>
          {shields.map((s, i) => (
            <div className="sec-card" key={s.title}>
              <div className="sec-card-top">
                <div className="sec-card-icon">{s.icon}</div>
                <span className="sec-card-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="sec-card-title">{s.title}</h3>
              <span className="sec-card-subtitle">{s.subtitle}</span>
              <p className="sec-card-desc">{s.desc}</p>
              <div className="sec-card-divider" />
              <div className="sec-card-specs">
                {s.specs.map(sp => (
                  <div className="sec-spec-row" key={sp.label}>
                    <span className="sec-spec-label">{sp.label}</span>
                    <span className="sec-spec-value">{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
