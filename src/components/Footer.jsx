import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Logo from './Logo'

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Projects', to: '/projects' },
      { label: 'Services', to: '/services' },
      { label: 'Insights', to: '/insights' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', to: '/services#web-development' },
      { label: 'Mobile Apps', to: '/services#mobile-apps' },
      { label: 'UI/UX Design', to: '/services#ui-ux-design' },
      { label: 'Backend Systems', to: '/services#backend-systems' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Health & MedTech', to: '/projects?industry=Health' },
      { label: 'Fintech', to: '/projects?industry=Fintech' },
      { label: 'Logistics', to: '/projects?industry=Logistics' },
      { label: 'SaaS', to: '/projects?industry=SaaS' },
    ],
  },
]

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    if (!email.includes('@')) {
      setError('Enter a valid email address.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setDone(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <p className="text-sm text-ink-500 dark:text-mist" role="status">
        You're subscribed. Check your inbox.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md" noValidate>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="you@company.com"
          autoComplete="email"
          className="field sm:flex-1"
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? 'newsletter-error' : undefined}
        />
        <button type="submit" disabled={loading} className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60">
          {loading ? 'Sending…' : 'Subscribe'}
        </button>
      </div>
      {error && (
        <p id="newsletter-error" className="mt-2 text-sm text-red-700 dark:text-red-300" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper dark:border-white/10 dark:bg-night">
      <div className="page flex flex-col gap-6 border-b border-line py-10 dark:border-white/10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <h2 className="font-heading text-xl font-semibold text-ink-500 dark:text-mist">
            Notes from the studio
          </h2>
          <p className="mt-1 text-sm text-ink-300 dark:text-ink-200">
            Practical writing on engineering and client work. No newsletter filler.
          </p>
        </div>
        <NewsletterForm />
      </div>

      <div className="page py-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" aria-label="Quoxova" className="inline-flex">
              <Logo className="h-14 lg:h-20" />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-300 dark:text-ink-200">
              We design and build software that helps businesses launch faster and scale without friction.
            </p>
            <div className="mt-4 flex items-center gap-1">
              <a
                href={import.meta.env.VITE_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-md p-2 text-ink-300 hover:text-ink-500 dark:text-ink-200 dark:hover:text-mist"
              >
                <Github size={16} />
              </a>
              <a
                href={import.meta.env.VITE_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-md p-2 text-ink-300 hover:text-ink-500 dark:text-ink-200 dark:hover:text-mist"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={import.meta.env.VITE_TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="rounded-md p-2 text-ink-300 hover:text-ink-500 dark:text-ink-200 dark:hover:text-mist"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {footerLinks.map(group => (
            <div key={group.title}>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-200">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ink-400 hover:text-ink-500 dark:text-ink-200 dark:hover:text-mist"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-200 dark:border-white/10 dark:text-ink-200 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Quoxova</p>
          <p>
            {import.meta.env.VITE_COMPANY_LOCATION}
            {import.meta.env.VITE_CONTACT_EMAIL ? ` · ${import.meta.env.VITE_CONTACT_EMAIL}` : ''}
          </p>
        </div>
      </div>
    </footer>
  )
}
