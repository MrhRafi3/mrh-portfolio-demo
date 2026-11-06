import { ArrowUp } from 'lucide-react'
import { PROFILE } from '../data/profileData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer" role="contentinfo">
      <div>
        <span className="wordmark" style={{ fontSize: '20px' }}>
          {PROFILE.wordmark}<span>.</span>
        </span>
        <span style={{ marginLeft: '12px', color: 'var(--muted)', fontSize: '11px' }}>
          © 2026 {PROFILE.name}. Every pixel has a purpose.
        </span>
      </div>

      <button
        onClick={scrollToTop}
        className="footer-back-to-top"
        aria-label="Scroll back to top of the page"
      >
        <span>Back to Top</span>
        <ArrowUp size={14} style={{ color: 'var(--red)' }} />
      </button>
    </footer>
  )
}
