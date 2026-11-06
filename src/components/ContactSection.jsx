import { useState } from 'react'
import { ArrowUpRight, Check, Clock, Copy, Mail, MapPin } from 'lucide-react'
import { PROFILE } from '../data/profileData'
import { useDhakaTime } from '../hooks/useDhakaTime'
import { GitHubIcon, LinkedInIcon } from './Icons'

export default function ContactSection() {
  const dhakaTime = useDhakaTime()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="contact section-wrap" aria-label="Contact and Collaboration">
      <div className="contact-grid">
        {/* Left Column: Heading & CTA */}
        <div className="contact-intro">
          <span className="eyebrow">04 / YOUR NEXT PROJECT</span>
          <h2>
            LET’S BUILD <br />
            TOGETHER<span className="accent">.</span>
          </h2>
          <p>
            Have a mobile app, digital product, or engineering initiative in mind? <br />
            Let’s create something fast, fluid, and memorable.
          </p>

          <a
            href={`mailto:${PROFILE.email}`}
            className="contact-cta"
            style={{ marginTop: '8px' }}
          >
            <span className="round-arrow">
              <ArrowUpRight size={16} />
            </span>
            <span>Start a Conversation</span>
          </a>
        </div>

        {/* Right Column: Contact Cards */}
        <div className="contact-links-grid">
          {/* Email Card with 1-Click Copy */}
          <div
            className="contact-link-card"
            style={{ cursor: 'pointer' }}
            onClick={copyEmail}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                copyEmail()
              }
            }}
            title="Click to copy email address"
          >
            <div className="contact-link-card-left">
              <Mail size={22} style={{ color: 'var(--red)' }} />
              <div>
                <small>DIRECT INQUIRY</small>
                <strong>{PROFILE.email}</strong>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--muted)', fontSize: '11px' }}>
              {copied ? (
                <>
                  <Check size={14} style={{ color: 'var(--green)' }} />
                  <span style={{ color: 'var(--green)', fontWeight: 700 }}>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy</span>
                </>
              )}
            </div>
          </div>

          {/* GitHub Card */}
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-card"
          >
            <div className="contact-link-card-left">
              <GitHubIcon size={22} style={{ color: 'var(--red)' }} />
              <div>
                <small>OPEN SOURCE & CODE</small>
                <strong>github.com/mrhrafi3</strong>
              </div>
            </div>
            <ArrowUpRight size={18} style={{ color: 'var(--muted)' }} />
          </a>

          {/* LinkedIn Card */}
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-card"
          >
            <div className="contact-link-card-left">
              <LinkedInIcon size={22} style={{ color: 'var(--red)' }} />
              <div>
                <small>PROFESSIONAL NETWORK</small>
                <strong>linkedin.com/in/mrhrafi</strong>
              </div>
            </div>
            <ArrowUpRight size={18} style={{ color: 'var(--muted)' }} />
          </a>

          {/* Location & Time Card */}
          <div className="contact-link-card" style={{ cursor: 'default' }}>
            <div className="contact-link-card-left">
              <MapPin size={22} style={{ color: 'var(--red)' }} />
              <div>
                <small>BASE LOCATION & TIMEZONE</small>
                <strong>{PROFILE.location}</strong>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--ink)' }}>
              <Clock size={14} style={{ color: 'var(--muted)' }} />
              <span>{dhakaTime || 'GMT+6'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
