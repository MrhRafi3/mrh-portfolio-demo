import { useState, useMemo } from 'react'
import { ArrowUpRight, Search } from 'lucide-react'
import { CATEGORIES, PROJECTS } from '../data/projectsData'

export default function ProjectsSection({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        project.category === selectedCategory ||
        (selectedCategory === 'Flutter' && project.techStack.includes('Flutter')) ||
        (selectedCategory === 'Mobile Apps' && (project.tag.includes('APP') || project.tag.includes('MOBILE'))) ||
        (selectedCategory === 'UI / UX' && (project.category.includes('UI') || project.techStack.includes('Custom Canvas UI')))

      const matchesSearch =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <section id="portfolio" className="portfolio section-wrap" aria-label="Selected Projects">
      {/* Section Heading */}
      <div className="section-heading">
        <div>
          <span className="eyebrow">01 / SELECTED WORK</span>
          <h2>
            WORK THAT SPEAKS<span className="accent">.</span>
          </h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="text-link" style={{ cursor: 'default' }}>
            <span>{filteredProjects.length} OF {PROJECTS.length} SHIPPED</span>
          </span>
        </div>
      </div>

      {/* Toolbar: Category Filters + Search Box */}
      <div className="portfolio-toolbar">
        <div className="filters" role="group" aria-label="Project Categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? 'selected' : ''}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <label className="search-box">
          <Search size={14} />
          <input
            type="search"
            placeholder="Search projects or tech…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects"
          />
        </label>
      </div>

      {/* Project Cards Grid */}
      <div className="project-grid">
        {filteredProjects.map((project, index) => {
          const isFeatured = index === 0 && selectedCategory === 'All' && searchQuery === ''
          return (
            <article
              key={project.id}
              className={`project-card ${isFeatured ? 'featured' : ''}`}
              onClick={() => onSelectProject(project)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onSelectProject(project)
                }
              }}
              aria-label={`View case study for ${project.title}`}
            >
              {/* Thumbnail Container */}
              <div className="project-thumb-wrap">
                <span className="project-number">{project.number}</span>
                <span className="project-badge">{project.tag}</span>
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} app interface`}
                    className="project-thumb"
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: '#121212',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--muted)',
                      fontFamily: 'var(--display)',
                      fontSize: '32px',
                    }}
                  >
                    {project.title}
                  </div>
                )}
                <div className="project-thumb-overlay" />
              </div>

              {/* Caption & Metadata */}
              <div className="project-caption">
                <div className="project-caption-header">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-open-btn" aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <p>{project.tagline}</p>

                <div className="project-tech-tags">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--muted)' }}>
          <p>No projects found matching "{searchQuery}". Try selecting another category.</p>
        </div>
      )}
    </section>
  )
}
