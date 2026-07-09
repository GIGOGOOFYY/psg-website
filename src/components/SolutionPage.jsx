import React, { useEffect, useRef, useState } from 'react'

function BrandLogo({ brand }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="hw-brand-item">
      {!failed
        ? <img src={brand.img} alt={brand.name} onError={() => setFailed(true)} />
        : <span className="hw-brand-fallback">{brand.name}</span>
      }
    </div>
  )
}

const solutions = {
  facade: {
    slug: 'facade',
    label: 'Architectural Solutions',
    title: 'Façade Solution',
    tagline: 'Redefining skylines with engineered glass.',
    intro: "PSG's facade solutions bring together structural integrity, energy performance, and architectural elegance. Whether a full curtain wall system, a point-fixed glass wall, or a cladded composite panel — we design, fabricate, and install bespoke facades for commercial towers, hospitals, hotels, and institutional buildings across Pakistan.",
    features: [
      { heading: 'Curtain Wall Systems', body: 'Stick-built and unitised curtain wall systems engineered for tall buildings. Thermally broken aluminium framing with high-performance IGU infill panels rated for wind, seismic, and thermal loads.' },
      { heading: 'Point Fixed Glass', body: 'Spider fittings and patch plates allow glass to appear suspended in mid-air — delivering an uninterrupted, frameless aesthetic for lobbies, atriums, and feature walls.' },
      { heading: 'Structural Sealant Glazing (SSG)', body: 'All-glass appearance with no visible aluminium — bonded glazing system where silicone bears the structural load, achieving a sleek monolithic look.' },
      { heading: 'Ventilated Rain-Screen Facades', body: "Two-stage drainage design eliminates water ingress risk. Ideal for high-rise facades in Karachi's coastal climate where wind-driven rain is a critical design factor." },
    ],
    specs: ['Available in single, double & triple glazing', 'Thermally broken aluminium frames', 'U-values from 0.8 W/m²K', 'PVDF powder-coat colour finish', 'Wind load testing per ASTM E330', 'BS 6262 & EN 12150 compliant glass'],
    projects: ['LuckyOne Mall — Curtain Wall & ACM', 'Packages Mall Lahore — Façade & Cladding', 'Quaid-e-Azam International Hospital — Façade'],
  },
  aluminum: {
    slug: 'aluminum',
    label: 'Doors & Windows',
    title: 'Aluminum Doors & Windows',
    tagline: 'Precision-engineered openings for modern buildings.',
    intro: 'PSG fabricates and installs a comprehensive range of aluminium doors and windows for commercial and residential projects. Using thermally broken profiles from leading European and Asian manufacturers, our systems meet the highest standards for weatherproofing, security, and thermal performance.',
    features: [
      { heading: 'Sliding Systems', body: 'Heavy-duty aluminium sliding doors and windows with multi-point locking, robust roller gear, and optional motorisation — ideal for balconies, partition walls, and large openings.' },
      { heading: 'Casement & Tilt-Turn', body: 'Inward-opening casement and tilt-turn windows offering superior ventilation control. Available with restrictors, child-safe locks, and integrated fly screens.' },
      { heading: 'Swing & Pivot Doors', body: 'Single and double swing doors in standard and custom sizes. Floor springs, overhead closers, and patch fittings for all-glass panic exit configurations.' },
      { heading: 'Louvre & Ventilation Systems', body: 'Aerofoil blade louvres for plant rooms, car parks, and facades requiring controlled airflow with weather exclusion.' },
    ],
    specs: ['Thermally broken 45–65mm profiles', 'Double or triple glazed IGU', 'Multi-point locking hardware', 'PVDF or anodised finish', 'Air/water/wind tested to EN 6375', 'Custom RAL colour on request'],
    projects: ['Aga Khan University — Windows & Partitions', 'DHA Luxury Bungalow — Doors & Windows', 'Various Commercial & Residential Projects'],
  },
  acm: {
    slug: 'acm',
    label: 'Cladding',
    title: 'ACM Cladding',
    tagline: 'The first in Pakistan to install Alucobond.',
    intro: "Pakistan Safety Glass was the first company in Pakistan to fabricate and install Aluminium Composite Material (ACM) cladding — a distinction we've held since the 1980s. Our expertise spans standard flat panels to complex curved, perforated, and backlit configurations, using Alucobond (Germany) and other premium ACM brands.",
    features: [
      { heading: 'Standard ACM Panels', body: 'Flat rectangular panels in a wide range of PVDF colours and metallic finishes. Lightweight, low-maintenance, and suitable for any building height with appropriate subframe engineering.' },
      { heading: 'Curved & 3D Forms', body: 'CNC-routed fold lines allow ACM to be curved or formed into 3D shapes — enabling dramatic architectural expressions that would be impossible with heavier materials.' },
      { heading: 'Perforated ACM', body: 'CNC-punched perforations in custom patterns for solar shading screens, car park facades, signage backdrops, and decorative feature walls.' },
      { heading: 'Backlit Translucent ACM', body: 'Specialised translucent core panels with LED backlighting — creating glowing branded facades for retail, hospitality, and corporate buildings.' },
    ],
    specs: ['Alucobond & equivalent brands', '3mm–6mm total thickness', 'PVDF or polyester coating', 'FR (fire-resistant) core options', 'Concealed or exposed fixings', 'Custom CNC routing & perforation'],
    projects: ['LuckyOne Mall — ACM Cladding', 'Packages Mall Lahore — ACM Cladding', 'Multiple Commercial Towers — Karachi & Lahore'],
    brandsLabel: 'ACM Brands',
    brands: [
      { name: 'Alucobond', img: '/logos/acm/alucobond.png' },
      { name: 'Reynobond', img: '/logos/acm/reynobond.png' },
      { name: 'Alpolic', img: '/logos/acm/alpolic.png' },
      { name: 'Alubond', img: '/logos/acm/alubond.png' },
      { name: 'Alucopanel', img: '/logos/acm/alucopanel.png' },
      { name: 'Larson', img: '/logos/acm/larson.png' },
      { name: 'Alucobang', img: '/logos/acm/alucobang.png' },
    ],
  },
  skylight: {
    slug: 'skylight',
    label: 'Roofing Solutions',
    title: 'Skylight',
    tagline: 'Flood your space with natural light.',
    intro: "PSG skylights transform dark interiors into bright, energy-efficient spaces. Fabricated with laminated or double-glazed tempered glass in aluminium or structural steel frames, our skylights handle Pakistan's intense UV exposure, monsoon rain loads, and seismic requirements — while delivering beautiful diffused daylight.",
    features: [
      { heading: 'Flat & Low-Pitch Skylights', body: 'Flush-to-roof or slightly raised skylights for terraces and flat roofs. Fully waterproof gutter system with internal drainage. Available walk-on rated with laminated glass.' },
      { heading: 'Pitched & Ridge Skylights', body: 'Symmetrical A-frame or asymmetric single-pitch ridge skylights for atriums, courtyards, and circulation spaces. Thermally broken aluminium ridge bar with continuous gutter.' },
      { heading: 'Barrel Vault & Curved', body: 'Curved aluminium rafter-and-purlin system glazed with curved or flat glass — delivering dramatic barrel-vault rooflines for malls, hotels, and public spaces.' },
      { heading: 'Operable & Venting Skylights', body: 'Motorised roof vents integrated into the skylight system for summer ventilation and smoke extraction compliance.' },
    ],
    specs: ['Laminated or tempered IGU', 'Rain/wind load engineered per site', 'Internal & external blind options', 'Walk-on rated panels available', 'Integrated LED uplighting', 'Self-cleaning glass coating option'],
    projects: ['Aga Khan University — Skylights', 'DHA Villas — Skylight & Rooflights', 'Commercial Atriums across Karachi'],
  },
  shopfronts: {
    slug: 'shopfronts',
    label: 'Retail Solutions',
    title: 'Shop Fronts',
    tagline: 'Make your brand impossible to ignore.',
    intro: "A great shop front is a brand's first impression. PSG designs and installs glass shop fronts that combine maximum transparency — drawing customers in — with robust, secure framing that protects your investment. From luxury boutiques to large-format retail, our systems are tailored to every brief.",
    features: [
      { heading: 'Full-Glass Frameless Fronts', body: 'Patch-fitted fully-tempered glass doors with minimal hardware — delivering a premium, high-end retail aesthetic with zero visual obstruction.' },
      { heading: 'Aluminium Framed Systems', body: 'Slim-line or standard aluminium frames in any RAL colour, housing single or double-glazed panels. Suitable for standard shopfronts, banks, showrooms, and offices.' },
      { heading: 'Automatic Sliding Entrances', body: 'Sensor-activated automatic sliding or swing door systems with safety sensors, break-out function, and access control integration.' },
      { heading: 'Security Glazing', body: 'Laminated or polycarbonate interlayer glass offering smash-and-grab resistance for jewellery stores, banks, and high-value retail environments.' },
    ],
    specs: ['Tempered or laminated safety glass', 'Patch fittings or framed aluminium', 'Automatic door systems available', 'Secure multi-point locking', 'Wide format up to 3m panels', 'Custom branding etching or film'],
    projects: ['Multiple Retail Outlets — Karachi & Lahore', 'Bank Branch Shopfronts', 'Showroom Fronts — Automotive & Luxury Retail'],
  },
  shower: {
    slug: 'shower',
    label: 'Interior Solutions',
    title: 'Shower Cubicle & Railings',
    tagline: 'Where safety meets refined aesthetics.',
    intro: "PSG's shower enclosures and glass railings bring the same precision and quality that we apply to large-scale architectural projects into the most personal spaces. Using heat-soaked, fully-tempered safety glass with premium stainless steel or brass fittings, every installation is engineered to be safe, durable, and beautiful.",
    features: [
      { heading: 'Frameless Shower Enclosures', body: 'Floor-to-ceiling frameless shower doors and panels in 8mm–12mm fully-tempered glass. Concealed hinges and bottom channels keep the look clean and maintenance minimal.' },
      { heading: 'Semi-Frameless & Framed', body: 'Aluminium channel-framed systems offering greater structural stability — ideal for heavy doors, wide openings, and steam rooms requiring a tighter seal.' },
      { heading: 'Glass Railings & Balustrades', body: 'Structurally engineered glass balustrades for staircases, mezzanines, and balconies. Post-mounted, channel-base, or structural silicone systems available to suit any architectural language.' },
      { heading: 'Pool Fencing & Barriers', body: 'Frameless toughened glass pool fencing meeting safety regulations — maximum transparency, minimum visual intrusion into your outdoor space.' },
    ],
    specs: ['8mm–12mm fully-tempered safety glass', 'Heat-soaked to DIN 18008', 'Stainless steel 304 / 316 fittings', 'Brushed, polished or PVD gold finish', 'Custom sizes & configurations', 'CE marked glass'],
    projects: ['Luxury Bungalows — DHA & Clifton Karachi', 'Hotel Bathrooms — Multiple Properties', 'Residential Staircases & Balconies'],
    images: [],
  },
  railing: {
    slug: 'railing',
    label: 'Structural Glass',
    title: 'Glass Railing',
    tagline: 'Strength, transparency, and timeless elegance.',
    intro: 'PSG glass railing systems combine structural engineering with architectural refinement. Whether for a high-rise balcony, a cantilevered staircase, or a mezzanine gallery, our frameless and semi-frameless balustrades deliver maximum transparency without compromising on safety or load performance.',
    features: [
      { heading: 'Frameless Post-Mounted Systems', body: 'Stainless steel spigots anchor the glass at the base or side, creating a clean frameless look with no top rail — ideal for unobstructed views on balconies and terraces.' },
      { heading: 'Channel Base (U-Channel) Systems', body: 'Glass panels seated in a continuous aluminium or stainless steel channel at floor level — ultra-minimal aesthetic with a continuous glass plane from floor to cap rail.' },
      { heading: 'Structural Silicone (SSG) Balustrade', body: 'Glass panels bonded edge-to-edge with structural silicone and supported via hidden anchors — delivering a seamless glass wall effect for interior galleries and staircases.' },
      { heading: 'Handrail Options', body: 'Stainless steel, timber, or glass-to-glass top rails in brushed, polished, or PVD finish — customised to complement any interior or exterior design language.' },
    ],
    specs: ['10mm–15mm fully-tempered or laminated glass', 'Heat-soaked per DIN 18008', 'Load-rated per BS 6180', 'SS 316 marine-grade fittings available', 'Custom height up to 1200mm standard', 'Matte, brushed or mirror polish hardware'],
    projects: ['DHA Luxury Villas — Staircase Balustrades', 'Corporate Offices — Mezzanine Railings', 'Hotel Lobbies — Feature Staircases'],
    images: [],
  },
  partition: {
    slug: 'partition',
    label: 'Office Solutions',
    title: 'Office Partition',
    tagline: 'Open, light-filled, collaborative workspaces.',
    intro: 'PSG office partition systems transform conventional enclosed offices into dynamic, light-filled environments. Our frameless and framed glass partition solutions are engineered for commercial fit-outs, co-working spaces, corporate headquarters, and institutional buildings — delivering acoustic performance without sacrificing openness.',
    features: [
      { heading: 'Frameless Single-Glazed Partitions', body: 'Floor-to-ceiling glass panels in 10mm–12mm tempered glass, connected with glass-to-glass fittings or aluminium patch plates — the purest, most transparent partition solution.' },
      { heading: 'Aluminium-Framed Demountable Systems', body: 'Modular demountable frames allowing rapid reconfiguration. Panels clip in and out without core drilling — ideal for tenants and fit-out contractors who need flexibility.' },
      { heading: 'Double-Glazed Acoustic Partitions', body: 'Two glass panes with an air gap and acoustic interlayer achieving Rw 38–48 dB — providing genuine acoustic separation for private offices, boardrooms, and meeting pods within open-plan floors.' },
      { heading: 'Integrated Blinds & Manifestation', body: 'Integrated venetian blinds between panes for privacy on demand. Frosted film, manifestation patterns, and branded graphics applied directly to glass.' },
    ],
    specs: ['10mm–12mm tempered or laminated glass', 'Single or double-glazed options', 'Acoustic rating up to Rw 48 dB', 'Floor-to-ceiling heights up to 4.5m', 'Integrated door systems available', 'Custom frosting, film & manifestation'],
    projects: ['Corporate HQ Fit-Outs — Karachi & Lahore', 'Co-Working Spaces — Multiple Locations', 'Bank Branch Interior Partitions'],
    images: [],
  },
  hardware: {
    slug: 'hardware',
    label: 'Architectural Hardware',
    title: 'Glass Hardware',
    tagline: 'Premium fittings that complement every glass installation.',
    intro: 'PSG supplies a comprehensive range of architectural glass hardware — patch fittings, spider fittings, hinges, handles, channels, and clamps — sourced from leading European and Asian manufacturers. Every hardware component is selected for durability, finish quality, and compatibility with our glass systems.',
    features: [
      { heading: 'Patch Fittings & Clamps', body: 'Stainless steel patch fittings for frameless glass doors — top pivots, bottom pivots, and patch locks in brushed or polished finish. Load-rated for heavy glass doors up to 200kg.' },
      { heading: 'Spider Fittings', body: 'Two-arm, four-arm, and corner spider fittings for point-fixed glass facades, structural glass walls, and feature installations requiring a floating glass aesthetic.' },
      { heading: 'Glass Hinges & Handles', body: 'Concealed and surface-mounted glass hinges with adjustable tension. Pull handles in D-bar, bow, and long-plate formats — matching sets for push/pull frameless doors.' },
      { heading: 'Channels, Sills & Tracks', body: 'Aluminium and stainless steel U-channels for glass balustrades, shower enclosures, and partition systems. Floor tracks and ceiling channels for sliding door systems.' },
    ],
    specs: ['Stainless Steel 304 / 316 (marine-grade)', 'Brushed, mirror polish, or PVD gold finish', 'Load-rated per EN 1154 / EN 1125', 'Compatible with 8mm – 19mm glass', 'Custom drilling and cut-outs available', 'European & Asian premium brands'],
    projects: ['Luxury Bungalows — Spider & Patch Fittings', 'Corporate Shopfronts — Frameless Door Hardware', 'Hotel Lobbies — Feature Handles & Hinges'],
    images: [],
    brandsLabel: 'Hardware Brands',
    brands: [
      { name: 'Kinlong', img: '/logos/hardware/Kinlong.png' },
      { name: 'Assa Abloy', img: '/logos/hardware/assa-abloy.png' },
      { name: 'Häfele', img: '/logos/hardware/hafele.png' },
      { name: 'Hettich', img: '/logos/hardware/hettich.png' },
      { name: 'Bilco', img: '/logos/hardware/bilco.png' },
      { name: 'Geze', img: '/logos/hardware/geze.png' },
      { name: 'VBH', img: '/logos/hardware/VBH.png' },
      { name: 'Kolf', img: '/logos/hardware/Kolf.png' },
      { name: 'BESAM', img: '/logos/hardware/Besam.png' },
      { name: 'KEDAO', img: '/logos/hardware/Kedao.png' },
    ],
  },
  furniture: {
    slug: 'furniture',
    label: 'Bespoke Glass',
    title: 'Glass Furniture & Mirrors',
    tagline: 'Precision-crafted glass for interiors that endure.',
    intro: 'PSG fabricates bespoke glass furniture, decorative mirrors, and interior glass elements to the exact specifications of interior designers, architects, and homeowners. Every piece is cut, ground, polished, and finished in-house — guaranteeing quality control from raw sheet to final installation.',
    features: [
      { heading: 'Custom Glass Tabletops', body: 'Dining tables, coffee tables, and conference tables in clear, tinted, or back-painted glass. Polished edges, bevelled borders, and cut-outs for cable management or base fixing as required.' },
      { heading: 'Decorative & Frameless Mirrors', body: 'Full-length, wall-mounted, and feature mirrors in any size. Safety-backed to prevent shattering. Bevelled, sandblasted, or etched borders for a bespoke finish.' },
      { heading: 'Back-Painted Glass Panels', body: "Lacobel-style back-painted glass in custom RAL colours — used for kitchen splashbacks, bathroom feature walls, and interior cladding. Impervious to moisture and easy to clean." },
      { heading: 'Shelving & Display Glass', body: 'Toughened glass shelves, retail display cases, and cabinet glazing. Polished edges, drilled holes, and clip or bracket mounting — precision-cut to your millimetre specification.' },
    ],
    specs: ['Clear, tinted, or extra-clear low-iron glass', 'Thickness 6mm–19mm to specification', 'Polished, pencil, or bevelled edge finish', 'Back-painted in any RAL colour', 'Safety backing on mirrors', 'Precision CNC cutting & drilling'],
    projects: ['Luxury Residential Interiors — DHA & Clifton', 'Hotel Lobbies & Suites — Mirrors & Feature Glass', 'Retail Boutiques — Custom Display Counters'],
    images: [],
  },
}

export default function SolutionPage({ slug }) {
  const data = solutions[slug]
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
  }, [slug])

  if (!data) return null

  return (
    <div className="sol-page" ref={ref}>
      {/* Hero */}
      <div className="sol-hero" data-reveal style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: '100px 0 40px' }}>
        <div className="container">
          <a href="#solutions" className="sol-back" onClick={e => { e.preventDefault(); window.location.hash = '#solutions'; setTimeout(() => { document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' }) }, 80) }}>← Back to Solutions</a>
          <span className="label" style={{ marginTop: '16px', display: 'block' }}>{data.label}</span>
          <h1 className="heading-lg sol-hero-title" style={{ marginTop: '8px' }}>{data.title}</h1>
          <p className="sol-tagline" style={{ marginTop: '8px' }}>{data.tagline}</p>
        </div>
      </div>

      {/* Intro */}
      <div className="sol-intro-section">
        <div className="container sol-intro-grid">
          <p className="body-lg sol-intro-text" data-reveal>{data.intro}</p>
          <div className="sol-specs-box" data-reveal data-delay="200">
            <h4 className="sol-specs-title">Specifications</h4>
            <ul className="sol-specs-list">
              {data.specs.map(s => (
                <li key={s}>
                  <span className="sol-spec-dot" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Hardware Brand Marquee */}
      {data.brands && data.brands.length > 0 && (
        <div className="hw-brands-strip" data-reveal>
          <div className="container" style={{ marginBottom: '16px' }}>
            <span className="label">{data.brandsLabel || 'Partner Brands'}</span>
          </div>
          <div className="hw-marquee-wrap">
            <div className="hw-marquee-track">
              {[...data.brands, ...data.brands].map((b, i) => (
                <BrandLogo key={i} brand={b} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Features */}
      <div className="sol-features-section">
        <div className="container">
          <span className="label" data-reveal>What We Offer</span>
          <div className="sol-features-grid">
            {data.features.map((f, i) => (
              <div className="sol-feature-card" key={f.heading} data-reveal data-delay={String(i * 100)}>
                <span className="sol-feature-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="sol-feature-heading">{f.heading}</h3>
                <p className="body-md">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      {data.images && data.images.length > 0 && (
        <div className="sol-gallery-section">
          <div className="container">
            <span className="label" data-reveal>Project Photos</span>
            <div className="sol-gallery-grid" data-reveal data-delay="100">
              {data.images.map((img, i) => (
                <div className="sol-gallery-item" key={i}>
                  <img src={img.src} alt={img.caption || data.title} loading="lazy" />
                  {img.caption && <p className="sol-gallery-caption">{img.caption}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Projects + CTA */}
      <div className="sol-bottom-section">
        <div className="container sol-bottom-grid">
          <div data-reveal>
            <span className="label">Notable Projects</span>
            <ul className="sol-project-list">
              {data.projects.map(p => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="sol-cta-box" data-reveal data-delay="200">
            <h3 className="heading-md">Ready to discuss<br />your project?</h3>
            <p className="body-md" style={{ marginTop: '12px' }}>Our team is available to provide specifications, site visits, and detailed quotations.</p>
            <a href="#contact" className="btn-primary" style={{ marginTop: '28px', display: 'inline-flex' }}>Get In Touch →</a>
          </div>
        </div>
      </div>
    </div>
  )
}
