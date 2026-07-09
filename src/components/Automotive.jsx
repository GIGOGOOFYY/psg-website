import React, { useEffect, useRef, useState } from 'react'

const products = [
  { num: '01', brand: 'Saif Lam', suffix: 'LAM', type: 'Laminated Glass', slug: 'saif-lam' },
  { num: '02', brand: 'Saif Curve', suffix: 'CURVE', type: 'Bend Tempered Glass', slug: 'saif-curve' },
  { num: '03', brand: 'Saif Tough', suffix: 'TOUGH', type: 'Tempered Glass', slug: 'saif-tough' },
  { num: '04', brand: 'Saif Cool', suffix: 'COOL', type: 'Double Glaze Glass', slug: 'saif-cool' },
]

const clients = [
  { name: 'Master Motor', img: '/logos/oem/master-motor.png' },
  { name: 'Daewoo', img: '/logos/oem/daewoo.png' },
  { name: 'Hino', img: '/logos/oem/hino.png' },
  { name: 'Higer', img: '/logos/oem/higer.png' },
  { name: 'Ghandhara', img: '/logos/oem/ghandhara.png' },
  { name: 'SunLong', img: '/logos/oem/sunlong.png' },
]

function OemLogo({ client }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="oem-logo-item">
      {!failed
        ? <img src={client.img} alt={client.name} onError={() => setFailed(true)} />
        : <span className="oem-logo-fallback">{client.name}</span>
      }
    </div>
  )
}

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
      <div className="container">

        {/* Header */}
        <div className="auto-header" data-reveal>
          <div>
            <span className="label">Automotive Glass</span>
            <h2 className="heading-lg">Superior Safety,<br />Design &amp; Strength</h2>
          </div>
          <p className="body-lg auto-inline-ghost-wrap">
            PSG provides{' '}
            <span className="auto-inline-ghost" aria-hidden="true">{'Automotive'.split('').map((ch, i) => <span className="bg-letter" key={i}>{ch}</span>)}</span>
            {' '}glass — Windscreens, Side and Rear Windows, and Glass Roofs — with superior safety, precision design, and structural strength.
          </p>
        </div>

        {/* OEM Partner logos */}
        <div className="oem-strip" data-reveal>
          <span className="oem-strip-label">OEM Partners</span>
          <div className="oem-marquee-wrap">
            <div className="oem-marquee-track">
              {[...clients, ...clients].map((c, i) => <OemLogo key={i} client={c} />)}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
