import React, { useEffect, useState, useRef } from 'react'

const NAV = [
  {
    label: 'Company',
    dropdown: [
      { label: 'Who We Are', href: '#about' },
      { label: 'History', href: '#history' },
      { label: 'Vision & Mission', href: '#vision' },
      { label: 'Quality Care', href: '#/quality-care' },
      { label: 'Certificates', href: '#certificates' },
    ],
  },
  {
    label: 'Products',
    dropdown: [
      { label: 'Saif Tough — Tempered', href: '#/automotive/saif-tough' },
      { label: 'Saif Lam — Laminated', href: '#/automotive/saif-lam' },
      { label: 'Saif Curve — Bend Tempered', href: '#/automotive/saif-curve' },
      { label: 'Saif Cool — Double Glaze', href: '#/automotive/saif-cool' },
      { label: 'Architectural Hardware', href: '#/solutions/hardware' },
      { label: 'Aluminium Composite Panels', href: '#/solutions/acm' },
      { label: 'Aluminum Doors & Windows', href: '#/solutions/aluminum' },
      { label: 'Fire Safety & Security', href: '#/security' },
    ],
  },
  {
    label: 'Solutions',
    dropdown: [
      { label: 'Façade Solution', href: '#/solutions/facade' },
      { label: 'Shop Fronts', href: '#/solutions/shopfronts' },
      { label: 'Skylight', href: '#/solutions/skylight' },
      { label: 'Aluminum Doors & Windows', href: '#/solutions/aluminum' },
      { label: 'Shower Cubicle & Railings', href: '#/solutions/shower' },
      { label: 'Glass Railing', href: '#/solutions/railing' },
      { label: 'Office Partition', href: '#/solutions/partition' },
      { label: 'Glass Furniture & Mirrors', href: '#/solutions/furniture' },
      { label: 'ACM Cladding', href: '#/solutions/acm' },
    ],
  },
  {
    label: 'Technology',
    dropdown: [
      { label: 'Tempering', href: '#/technology' },
      { label: 'Lamination', href: '#/technology' },
      { label: 'Drilling', href: '#/technology' },
      { label: 'Grinding', href: '#/technology' },
      { label: 'Double Glaze', href: '#/technology' },
    ],
  },
  {
    label: 'Projects',
    dropdown: [
      { label: 'Commercial', href: '#/projects/commercial' },
      { label: 'Residential', href: '#/projects/residential' },
    ],
  },
  { label: 'Clients', href: '#clients' },
  { label: 'Careers', href: '#/careers' },
]

function DropdownItem({ item, close }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  if (!item.dropdown) {
    return (
      <li>
        <a href={item.href} onClick={close}>{item.label}</a>
      </li>
    )
  }

  return (
    <li className={`nav-dropdown-parent${open ? ' open' : ''}`} ref={ref}>
      <button
        className="nav-dropdown-trigger"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <ul className="nav-dropdown" role="menu">
        {item.dropdown.map(sub => (
          <li key={sub.label} role="none">
            <a href={sub.href} onClick={() => { setOpen(false); close() }} role="menuitem">{sub.label}</a>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default function Navbar({ currentPage = 'home' }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => { setMenuOpen(false); setMobileExpanded(null) }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar" role="navigation" aria-label="Main navigation">
      <div className="container">
        <a href={currentPage === 'careers' ? '#home' : '#home'} onClick={() => { if (currentPage === 'careers') { window.location.hash = '#home' } }} className="nav-logo" aria-label="Pakistan Safety Glass home">
          <div className="nav-logo-mark">
            <img
              src="/logos/psg-logo-nav.png"
              alt="PSG"
              onError={e => { e.currentTarget.parentElement.style.background = 'var(--green-700)'; e.currentTarget.style.display = 'none' }}
            />
          </div>
          <div className="nav-logo-text">
            <span className="nav-logo-name">Pakistan Safety Glass</span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="nav-links">
          {NAV.map(item => (
            <DropdownItem key={item.label} item={item} close={close} />
          ))}
        </ul>

        <a href="#contact" className="nav-cta">Get In Touch</a>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <ul className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV.map(item => item.dropdown ? (
          <li key={item.label} className="nav-mobile-parent">
            <button
              className={`nav-mobile-group-btn${mobileExpanded === item.label ? ' open' : ''}`}
              onClick={() => setMobileExpanded(e => e === item.label ? null : item.label)}
            >
              {item.label}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {mobileExpanded === item.label && (
              <ul className="nav-mobile-sub">
                {item.dropdown.map(sub => (
                  <li key={sub.label}><a href={sub.href} onClick={close}>{sub.label}</a></li>
                ))}
              </ul>
            )}
          </li>
        ) : (
          <li key={item.label}><a href={item.href} onClick={close}>{item.label}</a></li>
        ))}
        <li><a href="#contact" onClick={close}>Get In Touch</a></li>
      </ul>
    </nav>
  )
}
