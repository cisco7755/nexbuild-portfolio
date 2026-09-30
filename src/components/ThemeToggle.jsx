import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ theme, toggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="rounded-md p-2 text-ink-300 hover:bg-black/[0.04] hover:text-ink-500 dark:text-ink-200 dark:hover:bg-white/[0.06] dark:hover:text-mist"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
