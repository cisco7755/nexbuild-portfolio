import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { projects } from '../utils/data'
import ProjectCard from '../components/ProjectCard'
import ProjectCardSkeleton from '../components/ProjectCardSkeleton'
import CTASection from '../components/CTASection'

const industries = ['All', 'Health', 'Fintech', 'Logistics', 'SaaS', 'Social', 'E-commerce']
const serviceTypes = ['All', 'Web Development', 'Mobile Apps', 'Backend Systems']

function FilterGroup({ label, options, value, onChange }) {
  return (
    <div>
      <p id={`${label}-label`} className="eyebrow mb-2">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5" role="group" aria-labelledby={`${label}-label`}>
        {options.map(option => {
          const selected = value === option
          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option)}
              className={`rounded-md px-2.5 py-1 text-sm ${
                selected
                  ? 'bg-ink-500 text-paper dark:bg-mist dark:text-ink-500'
                  : 'text-ink-300 hover:text-ink-500 dark:text-ink-200 dark:hover:text-mist'
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function Projects() {
  const [searchParams] = useSearchParams()
  const initialIndustry = industries.includes(searchParams.get('industry'))
    ? searchParams.get('industry')
    : 'All'
  const [industryFilter, setIndustryFilter] = useState(initialIndustry)
  const [serviceFilter, setServiceFilter] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const next = searchParams.get('industry')
    if (industries.includes(next)) setIndustryFilter(next)
  }, [searchParams])

  const filtered = useMemo(() => {
    return projects.filter(project => {
      const byIndustry = industryFilter === 'All' || project.industry === industryFilter
      const byService = serviceFilter === 'All' || project.service === serviceFilter
      return byIndustry && byService
    })
  }, [industryFilter, serviceFilter])

  return (
    <main>
      <section className="border-b border-line dark:border-white/10">
        <div className="page py-14 md:py-20">
          <p className="eyebrow">Case studies</p>
          <h1 className="page-title mt-3 max-w-2xl">Projects that moved the needle</h1>
          <p className="lede mt-4 max-w-xl">
            Every project includes the problem, what we built, and the measurable outcome.
          </p>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-10">
            <FilterGroup
              label="Industry"
              options={industries}
              value={industryFilter}
              onChange={setIndustryFilter}
            />
            <FilterGroup
              label="Service"
              options={serviceTypes}
              value={serviceFilter}
              onChange={setServiceFilter}
            />
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="page">
          <p className="sr-only" aria-live="polite">
            {loading ? 'Loading projects' : `${filtered.length} projects`}
          </p>
          {loading ? (
            <div className="border-t border-line dark:border-white/10">
              {Array.from({ length: 6 }).map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))}
            </div>
          ) : filtered.length > 0 ? (
            <div className="border-t border-line dark:border-white/10">
              {filtered.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="border-t border-line py-16 dark:border-white/10">
              <p className="text-ink-400 dark:text-ink-200">No projects match those filters.</p>
              <button
                type="button"
                onClick={() => {
                  setIndustryFilter('All')
                  setServiceFilter('All')
                }}
                className="mt-3 text-sm font-medium text-ink-500 underline-offset-4 hover:underline dark:text-mist"
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
