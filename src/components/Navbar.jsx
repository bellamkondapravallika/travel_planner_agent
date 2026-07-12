import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

/**
 * Top navigation bar — transparent on hero, solid on scroll.
 */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isChat = location.pathname === '/chat'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '/#destinations' },
    { label: 'Features', href: '/#features' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Testimonials', href: '/#testimonials' },
  ]

  return (
    <nav className={`navbar ${scrolled || isChat ? 'navbar--solid' : ''} ${isChat ? 'navbar--chat' : ''}`}>
      <div className="navbar__inner">
        {/* Brand logo */}
        <Link to="/" className="navbar__brand">
          <div className="navbar__logo">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="url(#navLogoGrad)"/>
              <path d="M8 20L18 8L28 20H22V28H18V24H14V28H10V20H8Z" fill="white"/>
              <defs>
                <linearGradient id="navLogoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0ea5e9"/>
                  <stop offset="1" stopColor="#0d9488"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="navbar__brand-text">
            <span className="navbar__brand-ai">AI</span> TravelPlanner
          </span>
        </Link>

        {/* Desktop links */}
        {!isChat && (
          <ul className="navbar__links">
            {navLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} className="navbar__link">{link.label}</a>
              </li>
            ))}
          </ul>
        )}

        {/* Actions */}
        <div className="navbar__actions">
          {!isChat && (
            <Link to="/chat" className="btn btn--primary navbar__cta">
              <svg viewBox="0 0 20 20" fill="currentColor" className="btn-icon">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
              </svg>
              Start Planning
            </Link>
          )}
          {isChat && (
            <Link to="/" className="btn btn--ghost navbar__back">
              ← Back to Home
            </Link>
          )}
          {/* Mobile hamburger */}
          {!isChat && (
            <button
              className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(p => !p)}
              aria-label="Toggle menu"
            >
              <span/><span/><span/>
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {!isChat && (
        <div className={`navbar__mobile-menu ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link to="/chat" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
            Start Planning
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
