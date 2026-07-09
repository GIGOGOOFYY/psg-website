import React, { useEffect, useState } from 'react'

function SupplierLogo({ s }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="hw-brand-item">
      {!failed
        ? <img src={s.img} alt={s.name} onError={() => setFailed(true)} />
        : <span className="hw-brand-fallback">{s.name}</span>
      }
    </div>
  )
}

const productData = {
  'saif-lam': {
    num: '01',
    brand: 'Saif',
    suffix: 'LAM',
    type: 'Laminated Glass',
    bgWord: 'LAM',
    tagline: 'Safety, Silence & Protection',
    desc: 'Saif Lam is PSG\'s premium laminated glass — bonding two or more glass layers with a PVB interlayer so glass holds together on impact, eliminating dangerous shards. Used across automotive windscreens, architectural facades, skylights, and security glazing.',
    features: [
      { label: 'Safety', value: 'Holds together on impact — no dangerous shard scatter' },
      { label: 'Acoustic', value: 'PVB interlayer reduces road and wind noise by up to 5dB' },
      { label: 'UV Protection', value: 'Blocks 99% of UV radiation, protecting occupants and interiors' },
      { label: 'Optical Clarity', value: 'High-clarity float glass base for undistorted vision' },
      { label: 'Customisation', value: 'Available tinted, solar-control, or with embedded antenna' },
    ],
    specs: [
      { label: 'Construction', value: 'Float Glass + PVB Interlayer' },
      { label: 'Standard', value: 'ECE R43 / ANSI Z26.1 / BS EN ISO 12543' },
      { label: 'Thickness Range', value: '4.76 mm – 10 mm' },
      { label: 'Interlayer', value: '0.38 mm – 1.52 mm PVB' },
    ],
    applications: [
      {
        sector: 'Automotive',
        icon: '🚗',
        uses: ['Windscreens', 'Sunroofs', 'Side Windows', 'Panoramic Roofs'],
      },
      {
        sector: 'Architectural',
        icon: '🏢',
        uses: ['Skylights', 'Glass Facades', 'Curtain Walls', 'Overhead Glazing'],
      },
      {
        sector: 'Security & Safety',
        icon: '🛡',
        uses: ['Bullet-Resistant Glazing', 'Safety Partitions', 'Blast-Resistant Glass', 'Anti-Intrusion Panels'],
      },
    ],
    suppliers: [
      { name: 'Eastman (Saflex)', img: '/logos/pvb/eastman.png' },
      { name: 'Kuraray (Trosifol)', img: '/logos/pvb/kuraray.png' },
      { name: 'Sekisui', img: '/logos/pvb/sekisui.png' },
      { name: 'Chang Chun', img: '/logos/pvb/changchun.png' },
      { name: 'DuPont (SentryGlas)', img: '/logos/pvb/dupont.png' },
    ],
  },
  'saif-curve': {
    num: '02',
    brand: 'Saif',
    suffix: 'CURVE',
    type: 'Bend Tempered Glass',
    bgWord: 'CURVE',
    tagline: 'Precision Curves, Modern Design',
    desc: 'Saif Curve is PSG\'s bend-tempered glass — shaped under precise heat forming to match exact curvatures, then thermally tempered for 4–5× the strength of ordinary glass. Used in curved automotive glazing and bold architectural forms.',
    features: [
      { label: 'Precision Forming', value: 'Computer-controlled bending for exact curvature match' },
      { label: 'Thermal Strength', value: '4–5× stronger than annealed glass after tempering' },
      { label: 'Safe Breakage', value: 'Shatters into small, blunt granules — not sharp shards' },
      { label: 'Aerodynamics', value: 'Smooth curves reduce drag and wind noise' },
      { label: 'Optical Quality', value: 'Distortion-free viewing across the curved surface' },
    ],
    specs: [
      { label: 'Process', value: 'Hot-Bending + Thermal Tempering' },
      { label: 'Standard', value: 'ECE R43 / EN 12150' },
      { label: 'Thickness Range', value: '3 mm – 8 mm' },
      { label: 'Bend Radius', value: 'Custom to specification' },
    ],
    applications: [
      {
        sector: 'Automotive',
        icon: '🚗',
        uses: ['Rear Windscreens', 'Quarter Glass', 'Vent Glass', 'Panoramic Rooflines'],
      },
      {
        sector: 'Architectural',
        icon: '🏢',
        uses: ['Curved Facades', 'Barrel Vault Skylights', 'Curved Balustrades', 'Feature Walls'],
      },
    ],
  },
  'saif-tough': {
    num: '03',
    brand: 'Saif',
    suffix: 'TOUGH',
    type: 'Tempered Glass',
    bgWord: 'TOUGH',
    tagline: 'Strength Under Stress',
    desc: 'Saif Tough is PSG\'s thermally tempered glass — the most versatile glass in our range. Rapid heating and cooling induces compressive surface stress giving 4–5× the impact resistance of standard glass. Used across automotive, architectural, and interior applications.',
    features: [
      { label: 'Impact Resistance', value: '4–5× stronger than standard glass under mechanical stress' },
      { label: 'Thermal Stability', value: 'Withstands temperature differentials of up to 250°C' },
      { label: 'Safe Breakage', value: 'Disintegrates into small granular pieces on failure' },
      { label: 'Edge Strength', value: 'Polished and seamed edges for superior edge durability' },
      { label: 'Versatile', value: 'Used across automotive, architectural, and interior applications' },
    ],
    specs: [
      { label: 'Process', value: 'Thermal Tempering' },
      { label: 'Standard', value: 'ECE R43 / EN 12150 / BS 6206' },
      { label: 'Thickness Range', value: '3 mm – 19 mm' },
      { label: 'Surface Stress', value: '≥ 90 MPa (fully tempered)' },
    ],
    applications: [
      {
        sector: 'Automotive',
        icon: '🚗',
        uses: ['Side Windows', 'Rear Windows', 'Vent Glass', 'Sunroofs'],
      },
      {
        sector: 'Architectural',
        icon: '🏢',
        uses: ['Shop Fronts', 'Glass Facades', 'Curtain Walls', 'Skylights'],
      },
      {
        sector: 'Interior Solutions',
        icon: '🪟',
        uses: ['Shower Enclosures', 'Glass Railings', 'Office Partitions', 'Glass Furniture'],
      },
    ],
  },
  'saif-cool': {
    num: '04',
    brand: 'Saif',
    suffix: 'COOL',
    type: 'Double Glaze Glass',
    bgWord: 'COOL',
    tagline: 'Efficiency, Silence & Comfort',
    desc: 'Saif Cool is PSG\'s double glazed insulating glass unit (IGU) — two panes of glass sealed with a dehydrated air or argon-filled spacer. Engineered to cut heat transfer, reduce noise, and lower energy consumption across commercial and residential buildings.',
    features: [
      { label: 'Thermal Insulation', value: 'Low U-values reduce heat gain and loss — ideal for Pakistan\'s extreme climate' },
      { label: 'Acoustic Control', value: 'Air or argon gap absorbs sound waves, reducing noise transmission significantly' },
      { label: 'Energy Saving', value: 'Reduces air-conditioning load and operating costs in commercial buildings' },
      { label: 'Anti-Condensation', value: 'Inner pane stays at room temperature, preventing surface condensation' },
      { label: 'Customisable', value: 'Available with Low-E coatings, tinted glass, or laminated inner pane' },
    ],
    specs: [
      { label: 'Construction', value: '4mm–12mm Glass + Spacer + 4mm–12mm Glass' },
      { label: 'Gap Fill', value: 'Dehydrated Air or Argon' },
      { label: 'U-Value', value: 'From 1.1 W/m²K (with Low-E)' },
      { label: 'Standard', value: 'EN 1279 / BS 5713' },
    ],
    applications: [
      {
        sector: 'Architectural',
        icon: '🏢',
        uses: ['Curtain Wall Facades', 'Commercial Windows', 'Skylights', 'Conservatories'],
      },
      {
        sector: 'Residential',
        icon: '🏠',
        uses: ['Aluminum Windows & Doors', 'UPVC Windows', 'Sliding Doors', 'Bedroom Windows'],
      },
    ],
  },
}

export default function AutomotiveProductPage({ slug }) {
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  const p = productData[slug]
  if (!p) return (
    <div style={{ padding: '160px 0 80px', textAlign: 'center' }}>
      <p>Product not found.</p>
      <a href="#products">← Back</a>
    </div>
  )

  return (
    <>
      {/* Hero */}
      <div className="auto-prod-hero">
        <div className="container">
          <a className="auto-prod-back" href="#automotive">← Saif Glass Products</a>
          <span className="label" style={{ display: 'block', marginTop: '16px' }}>{p.type}</span>
          <h1 className="heading-lg auto-prod-hero-title" style={{ marginTop: '8px' }}>
            {p.brand}{' '}
            <span className="auto-prod-suffix" aria-hidden="true">
              {p.suffix.split('').map((ch, i) => <span className="bg-letter" key={i}>{ch}</span>)}
            </span>
          </h1>
          <p className="auto-prod-tagline" style={{ marginTop: '8px' }}>{p.tagline}</p>
        </div>
      </div>

      {/* Body */}
      <div className="auto-prod-body">
        <div className="container">

          {/* Description + Specs side by side */}
          <div className="auto-prod-grid">
            <div className="auto-prod-left">
              <span className="label">Overview</span>
              <p className="body-lg" style={{ marginTop: '16px' }}>{p.desc}</p>

              <div className="auto-prod-features">
                {p.features.map(f => (
                  <div className="auto-prod-feature" key={f.label}>
                    <span className="auto-prod-feat-label">{f.label}</span>
                    <span className="auto-prod-feat-value">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="auto-prod-right">
              <span className="label">Technical Specifications</span>
              <div className="auto-prod-specs">
                {p.specs.map(s => (
                  <div className="auto-prod-spec-row" key={s.label}>
                    <span className="auto-prod-spec-label">{s.label}</span>
                    <span className="auto-prod-spec-value">{s.value}</span>
                  </div>
                ))}
              </div>
              <div className="auto-prod-cta">
                <a href="#contact" className="btn-primary">Request a Quote</a>
              </div>
            </div>
          </div>

          {/* PVB Supplier Marquee — Saif Lam only */}
          {p.suppliers && p.suppliers.length > 0 && (
            <div className="hw-brands-strip" style={{ background: 'var(--sage-bg)', marginBottom: '0' }}>
              <div style={{ marginBottom: '16px' }}>
                <span className="label">PVB Brands</span>
              </div>
              <div className="hw-marquee-wrap sage">
                <div className="hw-marquee-track">
                  {[...p.suppliers, ...p.suppliers].map((s, i) => (
                    <SupplierLogo key={i} s={s} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Applications */}
          <div className="auto-prod-apps-section">
            <span className="label">Where We Use It</span>
            <div className="auto-prod-apps-grid">
              {p.applications.map(app => (
                <div className="auto-prod-app-card" key={app.sector}>
                  <div className="auto-prod-app-header">
                    <h4 className="auto-prod-app-sector">{app.sector}</h4>
                  </div>
                  <ul className="auto-prod-app-list">
                    {app.uses.map(u => (
                      <li key={u}>
                        <span className="auto-prod-app-dot" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Other products */}
          <div className="auto-prod-others">
            <span className="label">Other Products</span>
            <div className="auto-prod-others-row">
              {Object.entries(productData).filter(([s]) => s !== slug).map(([s, op]) => (
                <a className="auto-prod-other-card" href={`#/automotive/${s}`} key={s}>
                  <span className="auto-step-num">{op.num}</span>
                  <h4 className="auto-step-brand">{op.brand} {op.suffix}</h4>
                  <span className="auto-step-type">{op.type}</span>
                  <span className="auto-prod-other-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
