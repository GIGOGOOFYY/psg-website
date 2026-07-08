import React, { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef(null)
  const [submitText, setSubmitText] = useState('Send Message →')
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [submitBg, setSubmitBg] = useState(undefined)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('[data-reveal]')
    if (!els) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target) } })
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitText('Sending…')
    setSubmitDisabled(true)
    setTimeout(() => {
      setSubmitText("✓ Message Sent — We'll be in touch soon!")
      setSubmitBg('var(--green-600)')
    }, 1200)
  }

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left" data-reveal>
            <span className="label">Contact Us</span>
            <h2 className="heading-lg">Let's Build<br />Something Great</h2>
            <p className="body-md">Whether you're an architect, contractor, or developer — reach out to discuss your glass requirements. Our expert team is ready.</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-dot" />
                <div>
                  <div className="contact-item-label">Address</div>
                  <div className="contact-item-val">Plot 58, Sector 28, Korangi Industrial Area<br />Karachi 75180, Sindh, Pakistan</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-dot" />
                <div>
                  <div className="contact-item-label">Phone</div>
                  <div className="contact-item-val">
                    <a href="tel:+922135042275">+92-21-35042275</a><br />
                    <a href="tel:+922135123091">+92-21-35123091</a><br />
                    <a href="tel:+923082909634">+92-308-2909634</a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-dot" />
                <div>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-val">
                    <a href="mailto:info@pakistansafetyglass.com.pk">info@pakistansafetyglass.com.pk</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrap" data-reveal data-delay="200">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" placeholder="Company name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" placeholder="+92 300 0000000" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="product">Product Interest</label>
                <select id="product">
                  <option value="">Select a category...</option>
                  <option>Tempered Glass</option>
                  <option>Laminated Glass</option>
                  <option>Double Glazing</option>
                  <option>Architectural Solutions</option>
                  <option>Automotive Glass</option>
                  <option>Bullet &amp; Fire Resistant Glass</option>
                  <option>ACM Cladding</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" placeholder="Describe your project requirements..." required></textarea>
              </div>
              <button
                type="submit"
                className="form-submit"
                disabled={submitDisabled}
                style={submitBg ? { background: submitBg } : undefined}
              >
                {submitText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
