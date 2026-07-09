import React, { useState, useRef, useEffect } from 'react'

const positions = [
  'Glass Technician',
  'Sales Executive',
  'Site Installation Supervisor',
  'AutoCAD Draughtsman',
  'Quality Control Inspector',
  'Accounts & Finance',
  'Other / General Application',
]

const perks = [
  { icon: '💼', label: 'Competitive salary' },
  { icon: '🏥', label: 'EOBI & social security' },
  { icon: '📚', label: 'On-the-job training' },
  { icon: '📈', label: 'Growth opportunities' },
  { icon: '🤝', label: 'Friendly environment' },
]

export default function Career() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', experience: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('[data-reveal]')
    if (!els) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target) } })
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="career-page" ref={sectionRef}>
      {/* Page hero */}
      <div className="career-hero" data-reveal>
        <div className="container">
          <span className="label">Join Our Team</span>
          <h1 className="heading-xl" style={{ marginTop: '12px' }}>Build Your Career<br /><em>With PSG</em></h1>
          <p className="body-lg" style={{ maxWidth: '560px', marginTop: '20px' }}>
            Pakistan Safety Glass is always looking for passionate, skilled people. Work on landmark projects, learn from the best, and grow with a 55-year-old family legacy.
          </p>
          <a href="#home" className="btn-ghost" style={{ marginTop: '32px', display: 'inline-flex' }}>
            ← Back to Home
          </a>
        </div>
      </div>

      {/* Form section */}
      <div className="career-body">
        <div className="container">
          <div className="career-layout">
            <div className="career-info" data-reveal>
              <span className="label">Apply Now</span>
              <h2 className="heading-lg" style={{ marginTop: '12px' }}>Submit Your<br />Application</h2>
              <div className="green-line" />
              <p className="body-md" style={{ marginTop: '16px' }}>
                Fill in the form and our HR team will review your application. We welcome fresh graduates and experienced professionals alike.
              </p>

              <div className="career-contact-note">
                <p className="body-md" style={{ marginBottom: '6px' }}>Prefer to email directly?</p>
                <a href="mailto:hr@pakistansafetyglass.com.pk" className="career-email">
                  hr@pakistansafetyglass.com.pk
                </a>
              </div>

              <div className="career-contact-note" style={{ marginTop: '24px' }}>
                <p className="body-md" style={{ marginBottom: '4px' }}>Office address</p>
                <p className="body-md" style={{ color: 'var(--text-dark)', fontWeight: '500' }}>
                  Plot 58, Sector 28, Korangi Industrial Area<br />Karachi 75180, Pakistan
                </p>
              </div>
            </div>

            <div className="career-form-wrap" data-reveal data-delay="200">
              {submitted ? (
                <div className="career-success">
                  <div className="career-success-icon">✓</div>
                  <h3 className="heading-md">Application Received!</h3>
                  <p className="body-md" style={{ marginTop: '12px' }}>Thank you for your interest. Our HR team will review your application and get back to you soon.</p>
                  <button className="btn-primary" onClick={() => setSubmitted(false)} style={{ marginTop: '28px' }}>Submit Another</button>
                </div>
              ) : (
                <form className="career-form" onSubmit={handleSubmit} noValidate>
                  <h3 className="career-form-title">Application Form</h3>
                  <div className="career-form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" required placeholder="Muhammad Ali" value={form.name} onChange={set('name')} />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" required placeholder="you@example.com" value={form.email} onChange={set('email')} />
                    </div>
                  </div>
                  <div className="career-form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" required placeholder="+92 300 1234567" value={form.phone} onChange={set('phone')} />
                    </div>
                    <div className="form-group">
                      <label>Years of Experience</label>
                      <input type="text" placeholder="e.g. 3 years" value={form.experience} onChange={set('experience')} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Position of Interest *</label>
                    <select required value={form.position} onChange={set('position')}>
                      <option value="">— Select a position —</option>
                      {positions.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Cover Letter / Message</label>
                    <textarea rows={4} placeholder="Tell us about yourself and why you'd like to join PSG..." value={form.message} onChange={set('message')} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Submit Application →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
