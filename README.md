# PSG Website — Vite + React

Pakistan Safety Glass Works website converted from plain HTML to a Vite + React project.

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Production Build

```bash
npm run build
```

Output goes to `dist/`. Preview with `npm run preview`.

## Asset Paths

The `clients/` and `logos/` folders live **two levels above** this project:

```
New website/
  clients/          ← client logos (PNG)
  logos/            ← PSG nav/full logos (PNG)
  psg-react/        ← this project
```

During development, the relative paths `../../clients/...` and `../../logos/...` work because Vite serves from the project root. For a production deployment, copy or symlink `clients/` and `logos/` to the same level as `dist/`, or update the paths in `Clients.jsx`, `Navbar.jsx`, and `Footer.jsx` to match your hosting structure.

## Structure

```
src/
  main.jsx            Entry point
  App.jsx             Root component — assembles all sections
  index.css           All CSS variables, global styles, responsive rules
  components/
    Navbar.jsx        Fixed navbar with scroll state + mobile menu
    Hero.jsx          Scroll-morph card animation + hero particles
    GlobalParticles.jsx  Fixed canvas particles across entire site
    TextReveal.jsx    Scroll-driven word-by-word text reveal
    About.jsx         Company history with animated glass art panel
    VisionMission.jsx Vision/Mission cards
    Products.jsx      4-panel product grid
    Architectural.jsx Architectural solutions with watermark
    Automotive.jsx    Automotive glass with specs table
    Security.jsx      Bullet/fire resistant glass with protection table
    Projects.jsx      Landmark projects list
    Clients.jsx       Dual marquee rows of client logos
    IsoStrip.jsx      ISO certification strip
    Contact.jsx       Contact details + enquiry form
    Footer.jsx        Site footer
```
