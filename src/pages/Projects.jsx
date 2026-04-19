import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../utils/data'
import ProjectCard from '../components/ProjectCard'
import ProjectCardSkeleton from '../components/ProjectCardSkeleton'
import CTASection from '../components/CTASection'

const trustStats = [
  { value: `${projects.length}`, label: 'Case Studies' },
  { value: `${[...new Set(projects.map(p => p.industry))].length}`, label: 'Industries' },
  { value: '6+', label: 'Years Delivering' },
  { value: '98%', label: 'Client Retention' },
]

const industries = ['All', 'Health', 'Fintech', 'Logistics', 'SaaS', 'Social', 'E-commerce']
const serviceTypes = ['All', 'Web Development', 'Mobile Apps', 'Backend Systems']

export default function Projects() {
  const [industryFilter, setIndustryFilter] = useState('All')
  const [serviceFilter, setServiceFilter] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [])

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const byIndustry = industryFilter === 'All' || p.industry === industryFilter
      const byService = serviceFilter === 'All' || p.service === serviceFilter
      return byIndustry && byService
    })
  }, [industryFilter, serviceFilter])

  return (
    <main className="pt-24">
      <section className="section-padding pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 block">
              Case Studies
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
              Projects that moved the needle
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Every project here includes the actual problem, what we built, and the measurable
              outcome. No vague descriptions.
            </p>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-6 mb-12 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800"
          >
            {trustStats.map(s => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="font-heading font-black text-2xl text-indigo-600 dark:text-indigo-400">{s.value}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-6 mb-12"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Industry
              </p>
              <div className="flex flex-wrap gap-2">
                {industries.map(f => (
                  <button
                    key={f}
                    onClick={() => setIndustryFilter(f)}
                    className={`text-sm px-4 py-1.5 rounded-lg font-medium transition-colors ${
                      industryFilter === f
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Service
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceTypes.map(f => (
                  <button
                    key={f}
                    onClick={() => setServiceFilter(f)}
                    className={`text-sm px-4 py-1.5 rounded-lg font-medium transition-colors ${
                      serviceFilter === f
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => <ProjectCardSkeleton key={i} />)}
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-400 dark:text-slate-500 text-lg">
                No projects match those filters.
              </p>
              <button
                onClick={() => { setIndustryFilter('All'); setServiceFilter('All') }}
                className="mt-4 text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </main>
  )
}
