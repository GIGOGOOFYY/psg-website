import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark">
                <img src="/logos/psg-logo-nav.png" alt="PSG" onError={e => { e.currentTarget.style.display = 'none' }} />
              </div>
              <span className="footer-logo-name">Pakistan Safety Glass</span>
            </div>
            <p className="footer-desc">Crafting Excellence in glass since 1969. A legacy of quality across 3 generations — delivering innovative safety glass solutions for architecture, automotive, and security industries.</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/PakistanSafetyGlassWorks" className="social-btn" target="_blank" rel="noopener" aria-label="Facebook">f</a>
              <a href="#" className="social-btn" aria-label="Instagram">◉</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <ul className="footer-links">
              <li><a href="#products">Tempered Glass</a></li>
              <li><a href="#products">Laminated Glass</a></li>
              <li><a href="#products">Double Glazing</a></li>
              <li><a href="#products">Bend Tempered Glass</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <ul className="footer-links">
              <li><a href="#solutions">Architectural</a></li>
              <li><a href="#solutions">Automotive Glass</a></li>
              <li><a href="#security">Bullet Resistant</a></li>
              <li><a href="#solutions">Façade Systems</a></li>
              <li><a href="#solutions">ACM Cladding</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#clients">Clientele</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="mailto:info@pakistansafetyglass.com.pk">info@pakistansafetyglass.com.pk</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2024 Pakistan Safety Glass Works (Pvt) Ltd. All rights reserved. |{' '}
            <a href="http://www.pakistansafetyglass.com.pk" style={{ color: 'inherit' }}>www.pakistansafetyglass.com.pk</a>
          </p>
          <span className="footer-iso">ISO 9001:2015 Certified</span>
        </div>
      </div>
    </footer>
  )
}
