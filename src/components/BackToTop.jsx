import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-20 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-md border border-line bg-paper text-ink-400 hover:text-ink-500 dark:border-white/15 dark:bg-night dark:text-ink-200 dark:hover:text-mist"
    >
      <ArrowUp size={16} />
    </button>
  )
}
