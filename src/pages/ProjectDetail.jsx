import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { projects } from '../utils/data'
import CTASection from '../components/CTASection'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) return <Navigate to="/projects" replace />

  const { title, industry, category, overview, problem, solution, outcome, metrics, tech, color } =
    project

  const currentIndex = projects.findIndex(p => p.id === id)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  const otherProjects = projects.filter(p => p.id !== id).slice(0, 2)

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to Projects
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900">
                {industry}
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {category}
              </span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight max-w-3xl">
              {title}
            </h1>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-10">
              {tech.map(t => (
                <span
                  key={t}
                  className="text-sm px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Banner */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`relative h-72 md:h-96 rounded-3xl bg-gradient-to-br ${color} overflow-hidden`}
          >
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="detail-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#detail-grid)" />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-heading text-7xl md:text-9xl font-black text-white/10 select-none">
                {title.charAt(0)}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-4xl md:text-5xl font-black text-indigo-600 dark:text-indigo-400 mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12">
            {[
              { label: 'Overview', content: overview },
              { label: 'The Problem', content: problem },
              { label: 'Our Solution', content: solution },
              { label: 'The Outcome', content: outcome },
            ].map((section, i) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {section.label}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects */}
      {otherProjects.length > 0 && (
        <section className="section-padding bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                More work
              </h2>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-2.5 transition-all"
              >
                All projects <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map(p => (
                <Link
                  key={p.id}
                  to={`/projects/${p.id}`}
                  className={`relative h-48 rounded-2xl bg-gradient-to-br ${p.color} overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-6 left-6">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white mb-2 inline-block">
                      {p.industry}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next navigation */}
      {(prevProject || nextProject) && (
        <section className="border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between gap-4">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.id}`}
                className="group flex items-center gap-3 text-left"
              >
                <ArrowLeft size={16} className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">Previous</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : <div />}
            {nextProject && (
              <Link
                to={`/projects/${nextProject.id}`}
                className="group flex items-center gap-3 text-right"
              >
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">Next</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight size={16} className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex-shrink-0" />
              </Link>
            )}
          </div>
        </section>
      )}

      <CTASection />
    </main>
  )
}
