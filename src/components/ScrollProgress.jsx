import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const spring = useSpring(progress, { stiffness: 200, damping: 30 })

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? scrolled / total : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 z-[60] origin-left"
      style={{ scaleX: spring }}
    />
  )
}
