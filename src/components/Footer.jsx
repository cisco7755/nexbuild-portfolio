import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter } from 'lucide-react'

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Projects', to: '/projects' },
      { label: 'Services', to: '/services' },
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

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm font-heading">N</span>
              </div>
              <span className="font-heading font-bold text-lg text-slate-900 dark:text-white">Nexbuild</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              We design and build software that helps businesses launch faster and scale without friction.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Github size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {footerLinks.map(group => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Nexbuild. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500">
            Lagos, Nigeria · hello@nexbuild.io
          </p>
        </div>
      </div>
    </footer>
  )
}
