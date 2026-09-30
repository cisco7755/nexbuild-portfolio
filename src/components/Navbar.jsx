import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

const navLinks = [
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar({ theme, toggle }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = event => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 dark:border-white/10 dark:bg-night/95">
      <div className="header-bar flex h-16 items-center justify-between gap-4 lg:h-24">
        <Link to="/" aria-label="Quoxova" className="shrink-0">
          <Logo className="h-11 lg:h-[72px]" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map(link => {
            const active = location.pathname.startsWith(link.to)
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? 'page' : undefined}
                className={`text-sm ${
                  active
                    ? 'text-ink-500 dark:text-mist'
                    : 'text-ink-300 hover:text-ink-500 dark:text-ink-200 dark:hover:text-mist'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle theme={theme} toggle={toggle} />
          <Link to="/contact" className="btn btn-primary">
            Start a project
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            onClick={() => setMenuOpen(open => !open)}
            className="rounded-md p-2 text-ink-400 hover:bg-black/[0.04] dark:text-ink-200 dark:hover:bg-white/[0.06]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="header-bar border-t border-line py-3 dark:border-white/10 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {navLinks.map(link => {
              const active = location.pathname.startsWith(link.to)
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    aria-current={active ? 'page' : undefined}
                    className={`block py-2.5 text-sm ${
                      active ? 'text-ink-500 dark:text-mist' : 'text-ink-300 dark:text-ink-200'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <Link to="/contact" className="btn btn-primary mt-3 w-full">
            Start a project
          </Link>
        </nav>
      )}
    </header>
  )
}
