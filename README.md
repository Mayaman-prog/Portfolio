# Portfolio - Mayaman Ram

A modern, interactive 3D portfolio built with **React**, **Three.js**, and **React Three Fiber**.

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — Build tool
- **Three.js** — 3D rendering (r184)
- **React Three Fiber** — Declarative Three.js for React
- **React Three Drei** — R3F helpers & utilities

## Project Structure

```
frontend/
├── public/
│   └── favicon.svg              # Cyberpunk-themed SVG favicon
├── src/
│   ├── assets/
│   │   └── models/              # Reusable 3D model components
│   │       ├── CyberOrb.jsx
│   │       ├── OrbitingParticles.jsx
│   │       ├── Globe.jsx
│   │       ├── SkillIcon.jsx
│   │       ├── ProjectKnot.jsx
│   │       └── ContactOrb.jsx
│   ├── components/              # Reusable UI components
│   │   ├── LazyCanvas.jsx       # Defers Canvas mount until near viewport
│   │   ├── Navbar.jsx           # Nav with hamburger + mobile menu
│   │   ├── LoadingScreen.jsx    # Spinner shown on initial load
│   │   ├── ScrollProgress.jsx   # Gradient progress bar
│   │   ├── ThemeToggle.jsx      # Dark/light mode switcher
│   │   ├── BackToTop.jsx        # Floating back-to-top button
│   │   ├── Footer.jsx           # Site footer
│   │   └── ScrollReveal.jsx     # Animation wrapper
│   ├── pages/                   # Full page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── hooks/                   # Custom React hooks
│   │   ├── useScrollReveal.js
│   │   ├── useTyping.js
│   │   ├── useTheme.js
│   │   ├── useScrollProgress.js
│   │   ├── useBackToTop.js
│   │   ├── useNavHide.js
│   │   └── useOnScreen.js
│   ├── data/                    # JSON data files
│   │   ├── profile.json
│   │   ├── skills.json
│   │   └── projects.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
└── package.json
```

## Features

### 3D & Visual
- **Interactive 3D scenes** across all sections — hero orb, about globe, skill icons, project knots, contact orb
- **Lazy-loaded Canvas** — each `<Canvas>` mounts only when scrolled within 200px of viewport, preventing WebGL context exhaustion on load
- **Cyberpunk dark/light theme** with neon cyan, magenta, and yellow accents — toggle with the theme button
- **Scroll reveal** — fade-in/slide animations via IntersectionObserver
- **Glassmorphism** — blurred navigation & cards

### UX
- **Typing animation** — hero subtitle cycles through role titles
- **Auto-hide navbar** — hides on scroll down, shows on scroll up
- **Hamburger menu** — full-screen mobile navigation
- **Back-to-top button** — appears after scrolling past 400px
- **Progress scroll indicator** — gradient bar at top
- **Loading screen** — spinner on initial visit

### Architecture
- **JSON-driven content** — profile, skills, projects data in `src/data/`
- **Custom hooks** — reusable logic extracted into `src/hooks/`
- **Separated concerns** — pages (layouts) vs components (reusable pieces) vs models (3D)
- **PNG icons** — skill & project icons via Icons8 CDN
- **Advanced responsive design** — 7 breakpoints from 1400px to 360px + touch device support

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
