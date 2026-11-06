import { X, ArrowUpRight, Mail } from 'lucide-react'
import { PROFILE } from '../data/profileData'

export default function MobileMenu({ isOpen, onClose, motionEnabled, onToggleMotion }) {
  if (!isOpen) return null

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    onClose()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      id="mobile-menu"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        background: 'rgba(9, 9, 9, 0.98)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px var(--gutter)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 'var(--header-height)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <span className="wordmark">
          {PROFILE.wordmark}<span>.</span>
        </span>
        <button
          onClick={onClose}
          className="icon-button"
          aria-label="Close navigation menu"
        >
          <X size={20} />
        </button>
      </div>

      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          margin: 'auto 0',
        }}
      >
        {navItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleLinkClick(e, item.href)}
            style={{
              fontFamily: 'var(--display)',
              fontSize: '40px',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--line)',
              paddingBottom: '12px',
            }}
          >
            <span>{item.label}</span>
            <span style={{ fontSize: '14px', fontFamily: 'var(--body)', color: 'var(--muted)' }}>
              0{index + 1}
            </span>
          </a>
        ))}
      </nav>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          borderTop: '1px solid var(--line)',
          paddingTop: '20px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Motion Effects</span>
          <button
            onClick={onToggleMotion}
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--ink)',
              border: '1px solid var(--line)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--panel)',
            }}
          >
            {motionEnabled ? 'ON' : 'OFF'}
          </button>
        </div>
        <a
          href={`mailto:${PROFILE.email}`}
          className="primary-link"
          style={{ justifyContent: 'center', width: '100%' }}
        >
          <Mail size={16} />
          <span>Get in touch</span>
          <span className="round-arrow">
            <ArrowUpRight size={14} />
          </span>
        </a>
      </div>
    </div>
  )
}
