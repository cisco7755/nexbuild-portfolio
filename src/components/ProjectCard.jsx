import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { id, title, industry, category, shortDescription, image } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
    >
      <div className="aspect-[8/3] bg-slate-100 dark:bg-slate-800 overflow-hidden">
        {image && (
          <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-ink-400 dark:text-ink-200">
            {industry}
          </span>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-ink-400 dark:text-ink-200">
            {category}
          </span>
        </div>

        <h3 className="font-heading text-lg font-bold text-ink-500 dark:text-white mb-1.5 leading-snug">
          {title}
        </h3>

        <p className="text-ink-300 dark:text-ink-200 text-sm leading-relaxed mb-4 line-clamp-2">
          {shortDescription}
        </p>

        <Link
          to={`/projects/${id}`}
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline w-fit"
        >
          View Case Study <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  )
}
