import { useEffect, useState } from 'react'

/**
 * Syncs motion toggle state with html[data-motion="on|off"] and prefers-reduced-motion.
 */
export function useMotionPreference() {
  const [motionEnabled, setMotionEnabled] = useState(() => {
    if (typeof window === 'undefined') return true
    const saved = localStorage.getItem('rafi-motion')
    if (saved !== null) return saved === 'on'
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-motion',
      motionEnabled ? 'on' : 'off'
    )
    localStorage.setItem('rafi-motion', motionEnabled ? 'on' : 'off')
  }, [motionEnabled])

  const toggleMotion = () => setMotionEnabled((prev) => !prev)

  return { motionEnabled, toggleMotion }
}
