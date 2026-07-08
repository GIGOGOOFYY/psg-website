import React, { useEffect, useRef } from 'react'

export default function Automotive() {
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
    <section className="automotive" ref={sectionRef}>
      <div className="auto-bg-text" aria-hidden="true">Automotive</div>
      <div className="container">
        <div className="auto-layout">
          <div className="auto-text" data-reveal>
            <span className="label">Automotive Glass</span>
            <h2 className="heading-lg">Superior Safety,<br />Design &amp; Strength</h2>
            <p className="body-lg">PSG provides automotive glass — Windscreens, Side and Rear Windows, and Glass Roofs — with superior safety, precision design, and structural strength.</p>
            <div className="auto-steps">
              {[
                { num: '01', title: 'Lamination', desc: 'Safety, sound insulation, and UV protection for enhanced passenger comfort.' },
                { num: '02', title: 'Bending', desc: 'Precision-engineered curves matching modern vehicle aesthetics and aerodynamics.' },
                { num: '03', title: 'Tempering', desc: 'Thermally fortified for strength and resilience against impacts and thermal stress.' },
              ].map(step => (
                <div className="auto-step" key={step.num}>
                  <span className="auto-step-num">{step.num}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal data-delay="200">
            <div className="auto-data-panel">
              <div className="auto-data-header">
                <span>Technical Specifications</span>
                <div className="auto-data-dots">
                  <div className="auto-data-dot" style={{ background: '#ef4444' }} />
                  <div className="auto-data-dot" style={{ background: '#f59e0b' }} />
                  <div className="auto-data-dot" style={{ background: '#22c55e' }} />
                </div>
              </div>
              <table className="auto-data-table">
                <thead>
                  <tr><th>Specification</th><th>Length</th><th>Width</th><th>Height</th></tr>
                </thead>
                <tbody>
                  <tr><td>Max Glass Size</td><td className="val">2800</td><td className="val">1900</td><td className="val">500</td></tr>
                  <tr><td>Bend Specification</td><td className="val">2800</td><td className="val">1900</td><td className="val">500</td></tr>
                  <tr><td>Thickness Range</td><td className="val" colSpan="2">4 mm – 19 mm</td><td></td></tr>
                </tbody>
              </table>
              <div className="auto-client-footer">
                <p>Automotive Clients</p>
                <div className="auto-client-tags">
                  {['Master Motor','Daewoo','Hino','Higer','Ghandhara','SunLong'].map(t => (
                    <span className="auto-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
