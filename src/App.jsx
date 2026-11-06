import { useState } from 'react'
import ReadingProgress from './components/ReadingProgress'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import ProjectModal from './components/ProjectModal'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import TechMarquee from './components/TechMarquee'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { useMotionPreference } from './hooks/useMotionPreference'

export default function App() {
  const { motionEnabled, toggleMotion } = useMotionPreference()
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      {/* Accessible skip link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* 2px Fixed Top Reading Progress Bar */}
      <ReadingProgress />

      {/* Sticky Header Navigation */}
      <Header
        motionEnabled={motionEnabled}
        onToggleMotion={toggleMotion}
      />

      {/* Main Page Flow */}
      <main id="main-content">
        <HeroSection
          motionEnabled={motionEnabled}
          onToggleMotion={toggleMotion}
        />

        <ProjectsSection onSelectProject={setSelectedProject} />

        <AboutSection />

        <ExperienceSection />

        <TechMarquee />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Case Study Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
