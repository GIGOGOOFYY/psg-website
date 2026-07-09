import React, { useState, useEffect, useRef } from 'react'

const processes = [
  {
    id: 'tempering',
    label: 'Tempering',
    num: '01',
    title: 'Tempered Glass',
    body: 'Tempered or toughened glass is made by heating glass to around 650°C, at which point it begins to soften. After that, the external surfaces are rapidly cooled, resulting in a significant compression effect. The result is glass that is 4–5× stronger than standard float glass — and when broken, it shatters into small, blunt fragments rather than dangerous shards.',
    specs: ['4–5× stronger than standard glass', 'Shatters into blunt granules for safety', 'Heat resistant up to 250°C', 'Cannot be cut after tempering'],
  },
  {
    id: 'lamination',
    label: 'Lamination',
    num: '02',
    title: 'Laminated Glass',
    body: 'Lamination involves bonding two or more glass panes with a tough interlayer (PVB or EVA film). Dry and wet lamination techniques, as well as roll-to-roll continuous and one-by-one sheet batch lamination, are all available. When broken, the interlayer holds the fragments together — crucial for skylights, facades, automotive windscreens, and blast-resistant applications.',
    specs: ['Holds together when broken', 'UV filtering options available', 'Sound attenuation up to 50dB', 'Custom tint & colour interlayers'],
  },
  {
    id: 'drilling',
    label: 'Drilling',
    num: '03',
    title: 'Precision Drilling',
    body: 'All drilling machines use Head-To-Head technology — drilling is done with two diamond-tipped drills running parallel to each other, one beneath the glass and one above it. This eliminates chip-out on both surfaces. All holes are embossed to eliminate stress concentrations around the perforation, extending the service life of the finished product.',
    specs: ['Head-to-Head dual-drill technology', 'Zero chip-out on both surfaces', 'Stress-relief embossing on all holes', 'Diameters from 4mm to 200mm'],
  },
  {
    id: 'grinding',
    label: 'Grinding',
    num: '04',
    title: 'Edge Grinding & Polishing',
    body: 'We grind the edges of glass in different profiles depending on client requirements — chamfering, rough grinding, grinding without polishing, or full mirror polishing. With the help of advanced CNC grinding machines, edges are processed mechanically to precise tolerances, ensuring a perfect fit for frameless installations and structural glazing applications.',
    specs: ['Flat, pencil, bevelled & chamfered profiles', 'CNC-controlled tolerances', 'Mirror-polish or satin finish', 'Up to 25mm thick glass'],
  },
  {
    id: 'doubleglaze',
    label: 'Double Glaze',
    num: '05',
    title: 'Double Glazing (IGU)',
    body: 'Double glazing uses two panes of glass separated by a warm-edge spacer bar filled with desiccant and sealed with argon or krypton gas. Because argon is a poor heat conductor, it prevents warm air from escaping in winter and hot air from entering in summer. The second pane also provides a significant acoustic barrier — reducing outside noise by up to 40dB.',
    specs: ['Argon or krypton gas fill', 'U-value as low as 1.0 W/m²K', 'Sound reduction up to 40dB', 'Available with Low-E coatings'],
  },
]

export default function Technology() {
  const [active, setActive] = useState(0)
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

  const current = processes[active]

  return (
    <section className="technology-section" id="technology" ref={sectionRef}>
      <div className="container">
        <div className="tech-header" data-reveal>
          <div>
            <span className="label">Manufacturing Process</span>
            <h2 className="heading-lg">State-of-the-Art<br />Technology</h2>
            <div className="green-line" />
          </div>
          <p className="body-md">We utilise modern machinery and advanced methods for impeccable glass processing — from raw float glass to finished architectural panels.</p>
        </div>

        <div className="tech-layout" data-reveal data-delay="200">
          {/* Tab list */}
          <div className="tech-tabs">
            {processes.map((p, i) => (
              <button
                key={p.id}
                className={`tech-tab${active === i ? ' active' : ''}`}
                onClick={() => setActive(i)}
                aria-selected={active === i}
              >
                <span className="tech-tab-num">{p.num}</span>
                <span className="tech-tab-label">{p.label}</span>
                <span className="tech-tab-arrow">→</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="tech-panel" key={current.id}>
            <div className="tech-panel-inner">
              <span className="tech-panel-eyebrow">{current.num} / 05</span>
              <h3 className="heading-md" style={{ marginTop: '10px' }}>{current.title}</h3>
              <p className="body-md" style={{ marginTop: '16px' }}>{current.body}</p>
              <ul className="tech-specs">
                {current.specs.map(s => (
                  <li key={s}>
                    <span className="tech-spec-dot" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
