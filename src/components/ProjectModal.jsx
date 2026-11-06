import { useEffect } from 'react'
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react'
import { GitHubIcon } from './Icons'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      <div className="modal-dialog">
        {/* Sticky Header */}
        <div className="modal-header">
          <div>
            <span className="eyebrow" style={{ color: 'var(--red)', display: 'block', marginBottom: '2px' }}>
              PROJECT {project.number} / {project.category}
            </span>
            <h2 id="dialog-title">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Main Thumbnail / Hero Image */}
          {project.thumbnail && (
            <div className="modal-hero-image">
              <img
                src={project.thumbnail}
                alt={`${project.title} interface preview`}
                loading="eager"
              />
            </div>
          )}

          {/* Metadata Grid */}
          <div className="modal-meta-grid">
            <div className="modal-meta-item">
              <strong>Role & Scope</strong>
              <span>{project.role}</span>
            </div>
            <div className="modal-meta-item">
              <strong>Timeline</strong>
              <span>{project.year}</span>
            </div>
            <div className="modal-meta-item">
              <strong>Category</strong>
              <span>{project.tag}</span>
            </div>
          </div>

          {/* Overview */}
          <h3 className="modal-section-title">Overview & Architecture</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'var(--ink-secondary)', marginBottom: '20px' }}>
            {project.description}
          </p>

          {/* Architectural Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '13px', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: '12px' }}>
                Engineering Highlights
              </h4>
              <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--muted)', fontSize: '13px', lineHeight: 1.8 }}>
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Core Features Grid */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="modal-section-title">Key Capabilities</h3>
              <div className="modal-features-list">
                {project.features.map((f, i) => (
                  <div key={i} className="modal-feature-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--red)' }} />
                      <h4>{f.title}</h4>
                    </div>
                    <p>{f.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Multi-Screenshot Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div>
              <h3 className="modal-section-title">Interface Showcase</h3>
              <div className="modal-gallery-grid">
                {project.screenshots.map((s, i) => (
                  <div key={i} className="modal-gallery-item">
                    <img
                      src={s.src}
                      alt={s.title || `${project.title} screenshot ${i + 1}`}
                      loading="lazy"
                    />
                    <div className="modal-gallery-caption">
                      <strong style={{ display: 'block', color: 'var(--ink)', marginBottom: '2px' }}>
                        {s.title}
                      </strong>
                      <span>{s.caption}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div style={{ marginTop: '32px', borderTop: '1px solid var(--line)', paddingTop: '20px' }}>
            <h4 style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '10px' }}>
              Technologies & Frameworks
            </h4>
            <div className="project-tech-tags">
              {project.techStack.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>

          {/* Actions / GitHub Link */}
          <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-link"
              >
                <GitHubIcon size={16} />
                <span>View on GitHub</span>
                <span className="round-arrow">
                  <ArrowUpRight size={14} />
                </span>
              </a>
            ) : (
              <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                ℹ️ {project.statusNote || 'Repository in active engineering.'}
              </div>
            )}

            <button
              onClick={onClose}
              className="text-link"
              style={{ padding: '8px 16px', border: '1px solid var(--line)', borderRadius: 'var(--radius-full)' }}
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
