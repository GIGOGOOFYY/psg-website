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
              <a href="https://www.facebook.com/PakistanSafetyGlassWorks" className="social-btn" target="_blank" rel="noopener" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/pakistansafetyglassworks" className="social-btn" target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/pakistan-safety-glass-works/" className="social-btn" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <ul className="footer-links">
              <li><a href="#products">Tempered Glass</a></li>
              <li><a href="#products">Laminated Glass</a></li>
              <li><a href="#products">Double Glazing</a></li>
              <li><a href="#solutions">Decorative Glass</a></li>
              <li><a href="#solutions">Furniture Glass</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Technology</h4>
            <ul className="footer-links">
              <li><a href="#technology">Tempering</a></li>
              <li><a href="#technology">Lamination</a></li>
              <li><a href="#technology">Drilling</a></li>
              <li><a href="#technology">Grinding</a></li>
              <li><a href="#technology">Double Glaze</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#history">Our History</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#clients">Clientele</a></li>
              <li><a href="#career">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><a href="tel:+922135042275">+92-21-3504 2275</a></li>
              <li><a href="tel:+922135123091">+92-21-3512 3091</a></li>
              <li><a href="tel:+923082909634">+92-308-2909634</a></li>
              <li><a href="mailto:info@pakistansafetyglass.com.pk">info@pakistansafetyglass.com.pk</a></li>
              <li style={{ color: 'var(--text-light)', fontSize: '13px', lineHeight: '1.5' }}>
                Plot 58, Sector 28, Korangi Industrial Area, Karachi 75180
              </li>
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
