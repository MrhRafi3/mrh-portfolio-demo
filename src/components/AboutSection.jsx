import { Cpu, Layers, Smartphone } from 'lucide-react'
import { PROFILE } from '../data/profileData'

export default function AboutSection() {
  const skillsMatrix = [
    {
      category: 'Mobile Engineering',
      year: 'Core Focus',
      description: 'Flutter & Dart cross-platform mobile apps with custom widget architectures, 60/120 FPS Impeller optimization, and responsive design systems.',
      tags: ['Flutter', 'Dart', 'Custom Painters', 'Impeller', 'Riverpod', 'Bloc'],
    },
    {
      category: 'Algorithmic Foundation',
      year: 'C++ & DSA',
      description: 'Deep computer science background in modern C++, Data Structures & Algorithms, memory management, and analytical problem-solving.',
      tags: ['C++', 'Data Structures', 'Algorithms', 'OOP', 'Memory Optimization'],
    },
    {
      category: 'UI/UX & Motion Craft',
      year: 'Design & Fidelity',
      description: 'Translating design visions into tactile mobile interfaces with natural gestures, micro-interactions, and accessible touch ergonomics.',
      tags: ['Material 3', 'Micro-interactions', 'Figma to Flutter', 'Touch Ergonomics'],
    },
    {
      category: 'Tooling & Ecosystem',
      year: 'Daily Workflow',
      description: 'Modern development workflow ensuring iterative delivery, clean Git history, and reliable multi-platform testing.',
      tags: ['Git & GitHub', 'Firebase', 'REST APIs', 'Android Studio', 'Xcode'],
    },
  ]

  const architectureLayers = [
    {
      level: 'LAYER 01 / PRESENTATION',
      title: 'High-Precision UI & Impeller Canvas',
      icon: Smartphone,
      description:
        'Tactile Flutter widget trees, custom Canvas painters, glowing horological dials, and fluid 120 FPS rendering without jank or dropped frames.',
    },
    {
      level: 'LAYER 02 / STATE & LOGIC',
      title: 'Reactive State & Clean Architecture',
      icon: Layers,
      description:
        'Strict separation of concerns using Riverpod and Bloc. Unidirectional data flow, immutable states, and resilient offline-first repositories.',
    },
    {
      level: 'LAYER 03 / FOUNDATIONS',
      title: 'Algorithmic Problem Solving & C++',
      icon: Cpu,
      description:
        'Foundational discipline in computational complexity, memory awareness, and predictable algorithms supporting scalable codebases.',
    },
  ]

  return (
    <section id="about" className="about section-wrap" aria-label="About and Craft">
      {/* Lead Narrative */}
      <div className="about-lead">
        <div>
          <span className="eyebrow">02 / BEHIND THE CRAFT</span>
          <h2 className="display">
            MORE THAN CODE. <br />
            CRAFTING <span className="accent">EXPERIENCES.</span>
          </h2>
        </div>
        <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--ink-secondary)' }}>
          I am {PROFILE.name}, an independent Flutter App Developer and Mobile UI Engineer based in {PROFILE.location}.
          I design and engineer mobile applications end to end—pairing high-contrast, tactile UI design with clean Dart
          architectures and solid C++ algorithmic foundations so products are not just visually refined, but rock-solid in performance.
        </p>
      </div>

      {/* Studio & Skills Grid */}
      <div className="studio-grid">
        {/* Left Panel: Expertise Matrix */}
        <div className="education-panel">
          <span className="eyebrow accent" style={{ display: 'block', marginBottom: '8px' }}>
            CAPABILITIES & SPECIALIZATION
          </span>
          <h3 className="panel-heading">TECHNICAL MASTERY</h3>

          {skillsMatrix.map((item, i) => (
            <div key={i} className="education-row">
              <div className="education-row-header">
                <strong>{item.category}</strong>
                <span>{item.year}</span>
              </div>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--muted)', marginBottom: '10px' }}>
                {item.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {item.tags.map((tag, t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      background: '#161616',
                      border: '1px solid var(--line)',
                      color: 'var(--ink)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel: Architecture Breakdown */}
        <div className="architecture-panel">
          <div>
            <span className="eyebrow accent" style={{ display: 'block', marginBottom: '8px' }}>
              UNDER THE HOOD
            </span>
            <h3 className="panel-heading">MOBILE ARCHITECTURE</h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '24px', lineHeight: 1.6 }}>
              How I structure mobile applications for long-term maintainability, high frame rates, and zero UI stutter:
            </p>

            <div>
              {architectureLayers.map((layer, i) => {
                const IconComponent = layer.icon
                return (
                  <div key={i} className="arch-layer">
                    <span className="eyebrow" style={{ color: 'var(--red)', fontSize: '10px', display: 'block', marginBottom: '4px' }}>
                      {layer.level}
                    </span>
                    <div className="arch-layer-title">
                      <IconComponent size={16} style={{ color: 'var(--red)' }} />
                      <span>{layer.title}</span>
                    </div>
                    <p className="arch-layer-detail">{layer.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            style={{
              marginTop: '20px',
              padding: '16px',
              border: '1px dashed var(--line)',
              borderRadius: 'var(--radius-sm)',
              background: '#0c0c0c',
              fontSize: '12px',
              color: 'var(--muted)',
            }}
          >
            <strong style={{ color: 'var(--ink)' }}>Engineering Principle: </strong>
            Every pixel on screen must serve a functional purpose. Zero decorative fluff that costs frame rates.
          </div>
        </div>
      </div>
    </section>
  )
}
