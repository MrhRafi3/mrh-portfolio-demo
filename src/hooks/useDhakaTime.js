import { useEffect, useState } from 'react'

/**
 * Returns formatted live time in Dhaka, Bangladesh (Asia/Dhaka, GMT+6).
 */
export function useDhakaTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Dhaka',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
        setTime(formatter.format(new Date()))
      } catch {
        const now = new Date()
        setTime(now.toLocaleTimeString())
      }
    }

    update()
    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [])

  return time
}
