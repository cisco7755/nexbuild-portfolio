import { useState, useEffect, useRef } from 'react'

export function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!start) return
    const numeric = parseFloat(target.replace(/[^0-9.]/g, ''))
    if (isNaN(numeric) || numeric === 0) {
      setCount(numeric)
      return
    }
    const startTime = performance.now()
    const tick = now => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numeric))
      if (progress < 1) frameRef.current = requestAnimationFrame(tick)
      else setCount(numeric)
    }
    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [start, target, duration])

  return count
}
