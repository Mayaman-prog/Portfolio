import { useState } from 'react'
import useNavHide from '../hooks/useNavHide'
import profile from '../data/profile.json'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navHidden = useNavHide()

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`nav ${navHidden ? 'hidden' : ''}`}>
        <div className="nav-logo">MR</div>
        <ul className="nav-links">
          {profile.nav.map(item => (
            <li key={item.href}>
              <a href={`#${item.href}`} onClick={(e) => { e.preventDefault(); scrollTo(item.href) }}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {profile.nav.map(item => (
          <a key={item.href} href={`#${item.href}`} onClick={(e) => { e.preventDefault(); scrollTo(item.href) }}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  )
}
