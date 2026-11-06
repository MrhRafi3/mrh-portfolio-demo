import { useEffect, useState } from 'react'

/**
 * Fixed top 2px reading progress bar tracking scroll percentage.
 */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight <= 0) {
        setProgress(0)
        return
      }
      const currentScroll = window.scrollY
      setProgress(Math.min(1, Math.max(0, currentScroll / totalHeight)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="reading-progress"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  )
}
