import { useState } from 'react'
import { Plus } from 'lucide-react'
import { MILESTONES } from '../data/milestonesData'

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(0) // Default first milestone open

  const toggleMilestone = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="experience" className="journey section-wrap" aria-label="Journey and Experience">
      {/* Section Heading */}
      <div className="section-heading">
        <div>
          <span className="eyebrow">03 / THE JOURNEY</span>
          <h2>
            KEEP BUILDING. KEEP SHIPPING<span className="accent">.</span>
          </h2>
        </div>
        <span className="text-link" style={{ cursor: 'default' }}>
          ENGINEERING TIMELINE
        </span>
      </div>

      {/* Accordion List */}
      <div className="journey-grid">
        <div className="experience-list">
          {MILESTONES.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.year}
                className={`experience-row ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="experience-button"
                  onClick={() => toggleMilestone(index)}
                  aria-expanded={isOpen}
                  aria-controls={`milestone-${index}`}
                >
                  <span className="experience-date">{item.date}</span>
                  <div className="experience-title">
                    <h3>{item.title}</h3>
                    <span className="experience-place">{item.place}</span>
                  </div>
                  <span className="experience-toggle-icon" aria-hidden="true">
                    <Plus size={16} />
                  </span>
                </button>

                {isOpen && (
                  <div id={`milestone-${index}`} className="experience-body">
                    <p>{item.summary}</p>
                    <ul className="experience-bullets">
                      {item.details.map((bullet, b) => (
                        <li key={b}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
