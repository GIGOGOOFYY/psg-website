import React, { useEffect, useRef } from 'react'

const shieldCards = [
  {
    title: 'Bandit Shield',
    desc: 'Resists manual attacks — withstands hammers, axes, and rods. Holds when broken, denying access.',
    icon: <svg viewBox="0 0 24 24"><path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z"/></svg>,
  },
  {
    title: 'Blast Shield',
    desc: 'Designed to reduce blast injury risk. Ideal for embassies, banks, courtrooms, and armored vehicles.',
    icon: <svg viewBox="0 0 24 24"><path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z"/><path d="M9 12l2 2 4-4" strokeWidth="2"/></svg>,
  },
  {
    title: 'Fire Shield',
    desc: 'Transparent fire-protection glass — maintains openness while safeguarding against fire, smoke, and heat.',
    icon: <svg viewBox="0 0 24 24"><path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z"/><path d="M8 14s1-1 2-1 2 1 4 1 2-1 2-1" strokeWidth="1.5"/></svg>,
  },
]

const bulletRows = [
  { cls: 'BR1', weapon: 'Rifle', calibre: '0.22LR', ammo: 'L/RN', noSpall: '19mm', spall: '23mm' },
  { cls: 'BR2', weapon: 'Hand Gun', calibre: '9mm Luger', ammo: 'FJ 1/RN/SC', noSpall: '19mm', spall: '23mm' },
  { cls: 'BR3', weapon: 'Hand Gun', calibre: '0.357 Mag', ammo: 'FJ 1/RN/SC', noSpall: '19mm', spall: '27mm' },
  { cls: 'BR4', weapon: 'Hand Gun', calibre: '0.44 Rem Mag', ammo: 'FJ 1/PB/SCPI', noSpall: '23–26mm', spall: '35mm' },
  { cls: 'BR5', weapon: 'Rifle', calibre: '5.56×45', ammo: 'FJ 1/PB/SC', noSpall: '34–38mm', spall: '44mm' },
  { cls: 'BR6', weapon: 'Rifle', calibre: '7.62×51', ammo: 'FJ 1/PB/SC', noSpall: '42mm', spall: '54mm' },
  { cls: 'BR7', weapon: 'Rifle', calibre: '7.62×51', ammo: 'FJ 1/PB/HC1', noSpall: '68mm', spall: '80mm' },
  { cls: 'AK47', weapon: 'Rifle', calibre: '7.62×39', ammo: 'FJ 1/PB/SC', noSpall: '—', spall: '44mm' },
]

export default function Security() {
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
    <section className="bullet-section" id="security" ref={sectionRef}>
      <div className="bullet-bg-text" aria-hidden="true">Security</div>
      <div className="container">
        <div className="security-layout">
          <div className="security-text" data-reveal>
            <span className="label">Security Glazing</span>
            <h2 className="heading-lg">Bullet &amp; Fire<br />Resistant Glass</h2>
            <p className="body-md">PSG is a leading manufacturer of innovative safety and security glazing — toughened, laminated, bullet-resistant, and heat-strengthened glass for security, defense, and architectural industries.</p>
            <ul className="security-targets">
              {['Commercial and Government Buildings','VIP Residences, Banks, Embassies','Armored Towers & Panic Rooms','Armored Military and Civil Vehicles'].map(t => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div data-reveal data-delay="200">
            <div className="shield-cards">
              {shieldCards.map(c => (
                <div className="shield-card" key={c.title}>
                  <div className="shield-icon-wrap">{c.icon}</div>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bullet-table-wrap">
              <div className="bullet-table-header"><span>Bullet Shield Protection Levels</span></div>
              <div style={{ overflowX: 'auto' }}>
                <table className="bullet-table">
                  <thead>
                    <tr><th>Class</th><th>Weapon</th><th>Calibre</th><th>Ammo</th><th>No Spall</th><th>Spall OK</th></tr>
                  </thead>
                  <tbody>
                    {bulletRows.map(r => (
                      <tr key={r.cls}>
                        <td><span className="class-badge">{r.cls}</span></td>
                        <td>{r.weapon}</td><td>{r.calibre}</td><td>{r.ammo}</td>
                        <td>{r.noSpall}</td><td>{r.spall}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
