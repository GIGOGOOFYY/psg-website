import React, { useEffect, useRef, useState } from 'react'
import Footer from './Footer'
import { allProjects } from './ProjectsListPage'

export default function ProjectDetailPage({ category, slug }) {
  const ref = useRef(null)
  const [lightbox, setLightbox] = useState(null)

  const catData = allProjects[category]
  const project = catData?.items.find(p => p.slug === slug)

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

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!project) return null

  return (
    <div ref={ref}>
      {/* Hero */}
      <div style={{ background: 'var(--white)', padding: '140px 0 64px', borderBottom: '1px solid var(--border)' }} data-reveal>
        <div className="container">
          <a
            href={`#/projects/${category}`}
            className="sol-back"
            onClick={e => { e.preventDefault(); window.location.hash = `#/projects/${category}` }}
          >← Back to {catData.label}</a>
          <span className="label" style={{ display: 'block', marginTop: '20px' }}>{project.type}</span>
          <h1 className="heading-xl" style={{ marginTop: '10px' }}>{project.name}</h1>
          <p className="body-lg" style={{ marginTop: '16px', maxWidth: '600px', color: 'var(--text-light)' }}>{project.location}</p>
        </div>
      </div>

      {/* Description + tags */}
      <div style={{ background: 'var(--white)', padding: '64px 0', borderBottom: '1px solid var(--border)' }} data-reveal>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <p className="body-lg" style={{ color: 'var(--text-dark)' }}>{project.description}</p>
          <div>
            <span className="label" style={{ display: 'block', marginBottom: '16px' }}>Scope of Work</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.supplies.map(s => (
                <span key={s} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px', padding: '6px 16px', background: 'var(--green-50)', color: 'var(--green-700)', borderRadius: '100px', border: '1px solid var(--green-200)' }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Photo gallery */}
      <div style={{ background: 'var(--sage-bg)', padding: '80px 0' }} data-reveal>
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '32px' }}>Project Gallery</span>
          {project.images.length > 0 ? (
            <div className="proj-gallery">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className={`proj-gallery-item${i === 0 ? ' featured' : ''}`}
                  onClick={() => setLightbox(img)}
                >
                  <img
                    src={img}
                    alt={`${project.name} — photo ${i + 1}`}
                    onError={e => e.currentTarget.parentElement.classList.add('no-img')}
                  />
                  <div className="proj-gallery-overlay">
                    <span>View ↗</span>
                  </div>
                  <div className="proj-gallery-fallback" />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '80px', textAlign: 'center', background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border)', color: 'var(--text-light)', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', letterSpacing: '1px' }}>
              PHOTOS COMING SOON
            </div>
          )}
        </div>
      </div>

      {/* Video (if any) */}
      {project.video && (
        <div style={{ background: 'var(--white)', padding: '80px 0', borderTop: '1px solid var(--border)' }} data-reveal>
          <div className="container">
            <span className="label" style={{ display: 'block', marginBottom: '32px' }}>Project Video</span>
            <div className="proj-video-wrap">
              <iframe
                src={project.video}
                title={project.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div style={{ background: 'var(--sage-bg)', padding: '80px 0', textAlign: 'center', borderTop: '1px solid var(--border)' }} data-reveal>
        <div className="container" style={{ maxWidth: '520px' }}>
          <span className="label">Start Your Project</span>
          <h2 className="heading-lg" style={{ marginTop: '12px' }}>Have a Similar Project?</h2>
          <p className="body-md" style={{ marginTop: '16px', color: 'var(--text-light)' }}>Get in touch with our team for specifications, site visits, and a detailed quotation.</p>
          <a href="#contact" className="btn-primary" style={{ marginTop: '32px', display: 'inline-flex' }}
            onClick={e => { e.preventDefault(); window.location.hash = '#contact'; setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 80) }}
          >Get In Touch →</a>
        </div>
      </div>

      <Footer />

      {/* Lightbox */}
      {lightbox && (
        <div className="proj-lightbox" onClick={() => setLightbox(null)}>
          <button className="proj-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <img src={lightbox} alt="Project photo" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </div>
  )
}
