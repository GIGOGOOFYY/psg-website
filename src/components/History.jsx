import React, { useEffect, useRef } from 'react'

const milestones = [
  {
    year: '1969',
    title: 'Founded',
    body: 'Pakistan Safety Glass Works (Pvt) Ltd. was established — among the first glass processing companies in Pakistan, dedicated to revolutionising float glass processing and finishing.',
  },
  {
    year: '1980s',
    title: 'First ACM Installation',
    body: 'PSG became the first company in Pakistan to fabricate and install Aluminium Composite Material (Alucobond, Germany) — setting a new standard for modern building facades.',
  },
  {
    year: '1990s',
    title: 'Automotive Expansion',
    body: 'Expanded into the automotive glass segment, supplying laminated windscreens and tempered side/rear glass to leading manufacturers and distributors across the country.',
  },
  {
    year: '2000s',
    title: 'ISO Certification',
    body: 'Achieved ISO 9001 quality management certification, cementing our commitment to consistent quality, traceability, and continuous improvement across all product lines.',
  },
  {
    year: '2010s',
    title: 'Landmark Projects',
    body: 'Delivered façade, curtain wall, and interior glass solutions for landmark projects including LuckyOne Mall, Packages Mall Lahore, and Quaid-e-Azam International Hospital Islamabad.',
  },
  {
    year: '2020s',
    title: '3rd Generation & Beyond',
    body: 'Now a 3rd generation family-owned business, PSG continues importing premium raw materials from the USA, Europe, and Asia — expanding into smart glass, fire-rated systems, and high-security glazing.',
  },
]

export default function History() {
  const sectionRef = useRef(null)
  const lineProgressRef = useRef(null)
  const dotRefs = useRef([])
  const cardRefs = useRef([])

  useEffect(() => {
    // Header reveal
    const header = sectionRef.current?.querySelector('.history-header')
    const headerObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); headerObs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    if (header) headerObs.observe(header)

    const line = lineProgressRef.current
    const dots = dotRefs.current
    const cards = cardRefs.current
    if (!line || !dots.length) return

    function onScroll() {
      const timelineEl = sectionRef.current?.querySelector('.history-timeline')
      if (!timelineEl || !line) return

      const tlRect = timelineEl.getBoundingClientRect()
      const tlTop = tlRect.top
      const tlHeight = tlRect.height
      const winH = window.innerHeight

      // Progress: 0 when top of timeline hits bottom of viewport, 1 when bottom of timeline hits center
      const progress = Math.min(1, Math.max(0, (winH * 0.8 - tlTop) / (tlHeight * 0.95)))
      line.style.transform = `scaleY(${progress})`

      // Activate/deactivate dots and cards based on scroll
      dots.forEach((dot, i) => {
        if (!dot) return
        const dotRect = dot.getBoundingClientRect()
        const dotCenter = dotRect.top + dotRect.height / 2
        const active = dotCenter < winH * 0.82

        dot.classList.toggle('history-dot-active', active)

        const card = cards[i]
        if (!card) return
        if (active) {
          card.classList.add('history-card-visible')
          card.classList.remove('history-card-hidden')
        } else {
          card.classList.remove('history-card-visible')
          card.classList.add('history-card-hidden')
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // run once on mount
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="history-section" id="history" ref={sectionRef}>
      <div className="container">
        <div className="history-header" data-reveal>
          <span className="label">Our Journey</span>
          <h2 className="heading-lg">Promising Services<br />For Decades</h2>
          <div className="green-line" />
          <p className="body-md" style={{ maxWidth: '540px', marginTop: '12px' }}>
            PSG didn't become a reputable brand overnight. Decades of effort, hard work, and relentless focus on quality made us who we are today.
          </p>
        </div>

        <div className="history-timeline">
          {/* Background rail */}
          <div className="history-rail" />
          {/* Animated progress line */}
          <div className="history-line-progress" ref={lineProgressRef} />

          {milestones.map((m, i) => (
            <div
              className={`history-item${i % 2 === 0 ? ' left' : ' right'}`}
              key={m.year}
            >
              <div
                className="history-card history-card-hidden"
                ref={el => cardRefs.current[i] = el}
              >
                <span className="history-year">{m.year}</span>
                <h3 className="history-title">{m.title}</h3>
                <p className="body-md">{m.body}</p>
              </div>
              {/* Dot is absolutely positioned on the center line, not in flex flow */}
              <div
                className="history-dot"
                ref={el => dotRefs.current[i] = el}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
