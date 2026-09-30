import { useParams, Link, Navigate } from 'react-router-dom'
import { projects, projectScreens } from '../utils/data'
import CTASection from '../components/CTASection'
import ScreenGrid from '../components/ScreenGrid'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(item => item.id === id)

  if (!project) return <Navigate to="/projects" replace />

  const {
    title,
    industry,
    category,
    overview,
    problem,
    solution,
    outcome,
    metrics,
    tech,
    liveUrl,
    liveLabel,
    duration,
    deliverables,
  } = project

  const screens = projectScreens(project)

  const currentIndex = projects.findIndex(item => item.id === id)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  const sections = [
    { label: 'Overview', content: overview },
    { label: 'The problem', content: problem },
    { label: 'What we built', content: solution },
    { label: 'The outcome', content: outcome },
  ]

  return (
    <main>
      <article>
        <header className="border-b border-line dark:border-white/10">
          <div className="page py-12 md:py-16">
            <Link
              to="/projects"
              className="text-sm text-ink-300 underline-offset-4 hover:text-ink-500 hover:underline dark:text-ink-200 dark:hover:text-mist"
            >
              All projects
            </Link>
            <p className="eyebrow mt-8">
              {industry}
              <span aria-hidden="true"> · </span>
              {category}
              {duration ? (
                <>
                  <span aria-hidden="true"> · </span>
                  {duration}
                </>
              ) : null}
            </p>
            <h1 className="page-title mt-3 max-w-3xl">{title}</h1>
            {screens.length > 0 ? (
              <div className="mt-8">
                <ScreenGrid key={id} screens={screens} title={title} />
              </div>
            ) : null}
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-300 dark:text-ink-200">
              {tech.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </header>

        {metrics?.length > 0 && (
          <section aria-label="Results" className="border-b border-line dark:border-white/10">
            <dl className="page grid sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`py-6 sm:px-6 sm:first:pl-0 ${
                    index > 0 ? 'border-t border-line sm:border-l sm:border-t-0 dark:border-white/10' : ''
                  }`}
                >
                  <dt className="text-sm text-ink-300 dark:text-ink-200">{metric.label}</dt>
                  <dd className="mt-1 font-heading text-2xl font-semibold text-ink-500 dark:text-mist">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <div className="page grid gap-12 py-14 lg:grid-cols-12 lg:py-16">
          <div className="space-y-10 lg:col-span-7">
            {sections.map(section => (
              <section key={section.label}>
                <h2 className="font-heading text-xl font-semibold text-ink-500 dark:text-mist">
                  {section.label}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-300 dark:text-ink-200">{section.content}</p>
              </section>
            ))}
            <p className="border-t border-line pt-6 text-sm text-ink-300 dark:border-white/10 dark:text-ink-200">
              Building something in this space?{' '}
              <Link to="/contact" className="font-medium text-ink-500 underline-offset-4 hover:underline dark:text-mist">
                Start a conversation
              </Link>
            </p>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-8 lg:sticky lg:top-20">
              <div>
                <h2 className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-200">Engagement</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b border-line pb-3 dark:border-white/10">
                    <dt className="text-ink-300 dark:text-ink-200">Type</dt>
                    <dd className="text-right text-ink-500 dark:text-mist">{category}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-line pb-3 dark:border-white/10">
                    <dt className="text-ink-300 dark:text-ink-200">Industry</dt>
                    <dd className="text-right text-ink-500 dark:text-mist">{industry}</dd>
                  </div>
                  {duration && (
                    <div className="flex justify-between gap-4 border-b border-line pb-3 dark:border-white/10">
                      <dt className="text-ink-300 dark:text-ink-200">Duration</dt>
                      <dd className="text-right text-ink-500 dark:text-mist">{duration}</dd>
                    </div>
                  )}
                </dl>
              </div>

              {deliverables?.length > 0 && (
                <div>
                  <h2 className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-200">
                    Delivered
                  </h2>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-400 dark:text-ink-200">
                    {deliverables.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  {liveLabel || 'View live'}
                </a>
              )}
            </div>
          </aside>
        </div>
      </article>

      {(prevProject || nextProject) && (
        <nav aria-label="More projects" className="border-t border-line dark:border-white/10">
          <div className="page grid gap-6 py-8 sm:grid-cols-2">
            {prevProject ? (
              <Link to={`/projects/${prevProject.id}`} className="group">
                <p className="text-sm text-ink-200">Previous</p>
                <p className="mt-1 font-medium text-ink-500 group-hover:underline group-hover:underline-offset-4 dark:text-mist">
                  {prevProject.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextProject && (
              <Link to={`/projects/${nextProject.id}`} className="group sm:text-right">
                <p className="text-sm text-ink-200">Next</p>
                <p className="mt-1 font-medium text-ink-500 group-hover:underline group-hover:underline-offset-4 dark:text-mist">
                  {nextProject.title}
                </p>
              </Link>
            )}
          </div>
        </nav>
      )}

      <CTASection />
    </main>
  )
}
