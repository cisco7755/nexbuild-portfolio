import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? scrolled / total : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-brand-300 to-brand-600"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  )
}
