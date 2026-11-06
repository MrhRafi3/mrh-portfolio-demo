import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu } from 'lucide-react'
import { PROFILE } from '../data/profileData'
import MobileMenu from './MobileMenu'

export default function Header({ motionEnabled, onToggleMotion }) {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'portfolio', label: 'Work', href: '#portfolio' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Journey', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'about', 'experience', 'contact']
      const scrollPos = window.scrollY + 120

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className="site-header">
        <a
          href="#home"
          className="wordmark"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Mrh Rafi Home"
        >
          {PROFILE.wordmark}<span>.</span>
        </a>

        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={activeSection === link.id ? 'active' : ''}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            onClick={onToggleMotion}
            className="motion-toggle"
            aria-label="Toggle animations and motion"
            title="Toggle Motion"
          >
            <span>MOTION:</span>
            <span style={{ color: motionEnabled ? 'var(--red)' : 'var(--muted)' }}>
              {motionEnabled ? 'ON' : 'OFF'}
            </span>
          </button>

          <a
            href={`mailto:${PROFILE.email}`}
            className="text-link"
            style={{ display: 'none' }} // Visible on desktop via media query or inline flex
          >
            <span>{PROFILE.email}</span>
            <ArrowUpRight size={14} />
          </a>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="icon-button mobile-menu-btn"
            aria-label="Open mobile navigation menu"
            style={{ display: 'none' }} // Controlled by CSS
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        motionEnabled={motionEnabled}
        onToggleMotion={onToggleMotion}
      />
    </>
  )
}
