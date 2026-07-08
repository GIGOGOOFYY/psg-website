import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar" role="navigation" aria-label="Main navigation">
      <div className="container">
        <a href="#home" className="nav-logo" aria-label="Pakistan Safety Glass home">
          <div className="nav-logo-mark">
            <img
              src="/logos/psg-logo-nav.png"
              alt="PSG"
              onError={e => { e.currentTarget.parentElement.style.background = 'var(--green-700)'; e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <div className="nav-logo-text">
            <span className="nav-logo-name">Pakistan Safety Glass</span>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#clients">Clients</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Get In Touch</a>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </div>
      <ul className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        <li><a href="#about" onClick={close}>About</a></li>
        <li><a href="#products" onClick={close}>Products</a></li>
        <li><a href="#solutions" onClick={close}>Solutions</a></li>
        <li><a href="#projects" onClick={close}>Projects</a></li>
        <li><a href="#clients" onClick={close}>Clients</a></li>
        <li><a href="#contact" onClick={close}>Get In Touch</a></li>
      </ul>
    </nav>
  )
}
