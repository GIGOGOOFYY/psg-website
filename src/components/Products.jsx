import React, { useEffect, useRef } from 'react'

const products = [
  { num: '01', tag: 'Safe Tough Series', title: 'Tempered Glass', desc: 'Heat-treated to be 4–5× stronger than standard glass. Shatters into safe granules on breakage — the safety standard for architecture and automotive.' },
  { num: '02', tag: 'Custom Bending', title: 'Bend Tempered Glass', desc: 'Heated to softening point and formed to any required shape. Ideal for curved facades, automotive windscreens, and distinctive architectural features.' },
  { num: '03', tag: 'Safe Cool Series', title: 'Double Glazing', desc: 'Two or more plies separated by a desiccant-filled spacer. Maximizes energy efficiency, thermal insulation, and noise reduction in modern buildings.' },
  { num: '04', tag: 'Safe Lam Series', title: 'Laminated Glass', desc: 'Multiple sheets bonded with PVB interlayers under high heat and pressure. If broken, the interlayer holds glass in place — maintaining safety and visibility.' },
]

export default function Products() {
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
    <section className="products" id="products" ref={sectionRef}>
      <div className="container">
        <div className="products-header" data-reveal>
          <div>
            <span className="label">Our Products</span>
            <h2 className="heading-lg">Precision Glass,<br />Engineered for Every Need</h2>
          </div>
          <p className="body-md">From tempered safety glass to advanced laminated systems — each product is precision-engineered to the highest standards.</p>
        </div>
        <div className="products-grid">
          {products.map((p, i) => (
            <div className="product-panel" data-reveal data-delay={i * 100} key={p.num}>
              <div className="product-panel-glass">
                <div className="product-panel-shine" />
                <div className="product-panel-num">{p.num}</div>
                <div className="product-panel-tag">{p.tag}</div>
              </div>
              <div className="product-panel-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="product-panel-link">Learn More</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
