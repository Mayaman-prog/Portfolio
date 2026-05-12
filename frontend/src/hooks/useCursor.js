import { useState, useEffect } from 'react'

export default function useCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })

    const addListeners = () => {
      const sel = 'a, button, input, textarea, .tag, .social-link, .project-link, .nav-links a, .stat-card, .skill-card, .project-card'
      const els = document.querySelectorAll(sel)
      els.forEach(el => {
        el.addEventListener('mouseenter', () => setHovering(true))
        el.addEventListener('mouseleave', () => setHovering(false))
      })
    }

    window.addEventListener('mousemove', move)
    addListeners()

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return { pos, hovering }
}
