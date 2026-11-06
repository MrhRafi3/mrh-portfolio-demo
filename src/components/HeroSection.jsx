import { ArrowDown, ArrowUpRight, Clock, MapPin } from 'lucide-react'
import { PROFILE } from '../data/profileData'
import { useDhakaTime } from '../hooks/useDhakaTime'

export default function HeroSection({ motionEnabled, onToggleMotion }) {
  const dhakaTime = useDhakaTime()

  const scrollToPortfolio = (e) => {
    e.preventDefault()
    const target = document.getElementById('portfolio')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero" aria-label="Introduction and Hero">
      {/* Top Eyebrow & Live Availability Badge */}
      <div className="hero-top">
        <span className="hero-top-eyebrow">
          FLUTTER APP DEVELOPER & MOBILE UI ENGINEER
        </span>
        <div className="availability" title="Available for freelance and full-time opportunities">
          <i aria-hidden="true" />
          <span>{PROFILE.availability}</span>
        </div>
      </div>

      {/* Giant Background Display Title (Touquir Akhtar Signature) */}
      <div className="hero-title" aria-hidden="true">
        MRH RAFI
      </div>

      {/* Authentic Portrait Cutout Layer */}
      <div className="hero-portrait">
        <img
          src="/images/rafi-portrait.jpg"
          alt={`${PROFILE.name} — Flutter App Developer`}
          width="1086"
          height="1448"
          fetchPriority="high"
          decoding="sync"
        />
      </div>

      {/* Left Intro Overlay */}
      <div className="hero-intro">
        <span className="handwriting">Hi, I am</span>
        <h1>{PROFILE.name}</h1>
        <p className="hero-role">{PROFILE.title}</p>
        <p className="hero-description">{PROFILE.bio}</p>

        <div className="hero-actions">
          <a
            href="#portfolio"
            onClick={scrollToPortfolio}
            className="primary-link"
          >
            <span>See Selected Work</span>
            <span className="round-arrow">
              <ArrowUpRight size={14} />
            </span>
          </a>

          <div className="hero-location">
            <MapPin size={13} style={{ color: 'var(--red)' }} />
            <span>{PROFILE.location}</span>
            <span style={{ color: 'var(--line-strong)' }}>·</span>
            <Clock size={13} style={{ color: 'var(--muted)' }} />
            <span>{dhakaTime || 'GMT+6'}</span>
          </div>
        </div>
      </div>

      {/* Right Stats & Highlights Panel */}
      <div className="hero-side">
        <div className="hero-stats">
          {PROFILE.stats.map((stat, i) => (
            <div key={i} className="hero-stat-item">
              <div className="hero-stat-number">
                {stat.value}
                {stat.suffix && <span> {stat.suffix}</span>}
              </div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Hero Bar */}
      <div className="hero-bottom">
        <a
          href="#portfolio"
          onClick={scrollToPortfolio}
          className="hero-scroll"
        >
          <span>Scroll to explore</span>
          <ArrowDown size={14} style={{ color: 'var(--red)' }} />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button
            onClick={onToggleMotion}
            className="motion-toggle"
            aria-label="Toggle motion effects"
          >
            <span>Motion:</span>
            <span style={{ color: motionEnabled ? 'var(--red)' : 'var(--muted)' }}>
              {motionEnabled ? 'ON' : 'OFF'}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
