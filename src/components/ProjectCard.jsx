import { Link } from 'react-router-dom'
import { projectScreens } from '../utils/data'
import ScreenCarousel from './ScreenCarousel'

export default function ProjectCard({ project, card = false }) {
  const { id, title, industry, category, shortDescription, duration } = project
  const screens = card ? projectScreens(project) : []

  if (!card) {
    return (
      <article className="border-b border-line py-6 dark:border-white/10">
        <Link to={`/projects/${id}`} className="group grid gap-2 md:grid-cols-12 md:items-baseline md:gap-6">
          <p className="text-sm text-ink-300 dark:text-ink-200 md:col-span-3">
            {industry}
            <span aria-hidden="true"> · </span>
            {category}
          </p>
          <div className="md:col-span-7">
            <h3 className="font-heading text-lg font-semibold leading-snug text-ink-500 group-hover:underline group-hover:decoration-line group-hover:underline-offset-4 dark:text-mist">
              {title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-300 dark:text-ink-200">{shortDescription}</p>
          </div>
          <p className="text-sm text-ink-200 md:col-span-2 md:text-right">{duration || 'Case study'}</p>
        </Link>
      </article>
    )
  }

  return (
    <article className="card">
      {screens.length > 0 ? (
        <ScreenCarousel
          screens={screens}
          title={title}
          frameClassName="aspect-[3/2] w-full object-cover"
          controlsClassName="border-b border-line px-4 py-2 dark:border-white/10"
        />
      ) : null}
      <Link to={`/projects/${id}`} className="group flex flex-1 flex-col p-4">
        <p className="text-sm text-ink-300 dark:text-ink-200">
          {industry}
          <span aria-hidden="true"> · </span>
          {category}
        </p>
        <h3 className="mt-1.5 font-heading text-lg font-semibold leading-snug text-ink-500 group-hover:underline group-hover:decoration-line group-hover:underline-offset-4 dark:text-mist">
          {title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-300 dark:text-ink-200">
          {shortDescription}
        </p>
        <p className="mt-auto pt-3 text-sm text-ink-200">{duration || 'Case study'}</p>
      </Link>
    </article>
  )
}
