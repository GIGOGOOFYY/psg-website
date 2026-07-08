import React, { useEffect, useRef } from 'react'

const TEXT = "Established in 1969, Pakistan Safety Glass Works has spent over five decades crafting the finest safety glass solutions — tempered, laminated, and bullet-resistant — for architecture, automotive, and security applications across Pakistan and beyond."

export default function TextReveal() {
  const innerRef = useRef(null)
  const wordsRef = useRef(null)

  useEffect(() => {
    const inner = innerRef.current
    const wordsEl = wordsRef.current
    if (!inner || !wordsEl) return

    const words = TEXT.split(' ')
    const liveSpans = []

    words.forEach(word => {
      const outer = document.createElement('span')
      outer.className = 'tr-word'
      const ghost = document.createElement('span')
      ghost.className = 'tr-ghost'
      ghost.textContent = word
      const live = document.createElement('span')
      live.className = 'tr-live'
      live.textContent = word
      outer.appendChild(ghost)
      outer.appendChild(live)
      wordsEl.appendChild(outer)
      liveSpans.push(live)
    })

    function onScroll() {
      const sectionTop = inner.offsetTop
      const sectionH = inner.offsetHeight
      const scrollY = window.scrollY || window.pageYOffset
      const vh = window.innerHeight
      const scrollable = sectionH - vh
      const progress = Math.min(1, Math.max(0, (scrollY - sectionTop) / scrollable))
      liveSpans.forEach((live, i) => {
        const start = i / words.length
        if (progress >= start + 0.5 / words.length) live.classList.add('visible')
        else live.classList.remove('visible')
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    const timer = setTimeout(onScroll, 100)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      wordsEl.innerHTML = ''
    }
  }, [])

  return (
    <section className="text-reveal-section" id="text-reveal" aria-label="Brand statement">
      <div className="text-reveal-inner" id="textRevealInner" ref={innerRef}>
        <div className="text-reveal-sticky" id="textRevealSticky">
          <p className="text-reveal-words" id="textRevealWords" ref={wordsRef}></p>
        </div>
      </div>
    </section>
  )
}
