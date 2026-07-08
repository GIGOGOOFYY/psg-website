import React, { useEffect, useRef } from 'react'

const row1clients = [
  { name: 'Standard Chartered', src: '/clients/Standard Chartered.png' },
  { name: 'Abbott', src: '/clients/Abbott.png' },
  { name: 'BMW', src: '/clients/BMW.png' },
  { name: 'Johnson & Johnson', src: '/clients/Johnson Joh.png' },
  { name: 'Hilton Pharma', src: '/clients/HiltonPharma.png' },
  { name: 'Toyota', src: '/clients/Toyota.png' },
  { name: 'DHL', src: '/clients/DHL.png' },
  { name: 'HBL', src: '/clients/HBL.png' },
  { name: 'Marriott', src: '/clients/Marriott.png' },
  { name: 'Bosch', src: '/clients/Bosch.png' },
  { name: 'Mövenpick', src: '/clients/Mövenpick.png' },
  { name: 'EFU Life', src: '/clients/EFU.png' },
  { name: 'Faysal Bank', src: '/clients/Faysal.png' },
  { name: 'KFC', src: '/clients/KFC.png' },
  { name: 'Pearl-Continental', src: '/clients/Pearl-Continental.png' },
]

const row2clients = [
  { name: 'GSK', domain: 'gsk.com' },
  { name: 'Sanofi', domain: 'sanofi.com' },
  { name: 'Tetra Pak', domain: 'tetrapak.com' },
  { name: 'Arif Habib Group', domain: 'arifhabibgroup.com' },
  { name: 'Beaconhouse', domain: 'beaconhouse.edu.pk' },
  { name: 'Lucky Textile', domain: 'luckytextile.com.pk' },
  { name: 'Daewoo', domain: 'daewoo.com' },
  { name: 'Hino Motors', domain: 'hino.com' },
  { name: 'Getz Pharma', domain: 'getzpharma.com' },
  { name: 'ADM', domain: 'adm.com' },
  { name: 'Master Motor', domain: 'mastermotor.com.pk' },
  { name: 'Ghandhara Ind.', domain: 'ghandhara.com.pk' },
  { name: 'Aga Khan Univ.', domain: 'aku.edu' },
  { name: 'Shan Foods', domain: 'shanfoods.com' },
  { name: 'Packages Mall', domain: 'packagesmall.com.pk' },
  { name: 'FFBL', domain: 'ffbl.com' },
]

function ClientChip({ name, src, domain }) {
  const imgSrc = src || `https://logo.clearbit.com/${domain}`
  return (
    <div className="client-chip">
      <img
        src={imgSrc}
        alt={name}
        onLoad={e => { const span = e.currentTarget.nextElementSibling; if (span) span.style.display = 'none' }}
        onError={e => { e.currentTarget.style.display = 'none' }}
      />
      <span>{name}</span>
    </div>
  )
}

export default function Clients() {
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

  // Duplicate arrays for seamless marquee loop
  const row1 = [...row1clients, ...row1clients]
  const row2 = [...row2clients, ...row2clients]

  return (
    <section className="clients-section" id="clients" ref={sectionRef}>
      <div className="container">
        <div className="clients-header" data-reveal>
          <span className="label">Our Valued Clientele</span>
          <h2 className="heading-lg">Trusted by Pakistan's<br />Leading Organizations</h2>
        </div>
      </div>
      <div className="clients-marquee-wrap" data-reveal>
        <div className="clients-marquee-row">
          <div className="clients-marquee-track">
            {row1.map((c, i) => <ClientChip key={i} {...c} />)}
          </div>
        </div>
        <div className="clients-marquee-row">
          <div className="clients-marquee-track">
            {row2.map((c, i) => <ClientChip key={i} {...c} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
