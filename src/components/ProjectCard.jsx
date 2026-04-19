import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { id, title, industry, category, shortDescription, tech, color, featured, metrics } = project
  const topMetric = metrics?.[0]

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5"
    >
      <div className={`h-48 bg-gradient-to-br ${color} relative overflow-hidden flex-shrink-0`}>
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`grid-${id}`} width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${id})`} />
          </svg>
        </div>

        {/* Top badges */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
            {industry}
          </span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/80 backdrop-blur-sm">
            {category}
          </span>
        </div>

        {featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 text-amber-600">
              <Star size={10} className="fill-amber-500 text-amber-500" /> Featured
            </span>
          </div>
        )}

        {/* Key metric overlay */}
        {topMetric && (
          <div className="absolute bottom-0 inset-x-0 bg-black/30 backdrop-blur-sm px-4 py-3 flex items-center gap-3">
            <span className="font-heading font-black text-white text-xl leading-none">{topMetric.value}</span>
            <span className="text-white/70 text-xs leading-tight">{topMetric.label}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
            {shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tech.slice(0, 4).map(t => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
            >
              {t}
            </span>
          ))}
          {tech.length > 4 && (
            <span className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-500 font-medium">
              +{tech.length - 4}
            </span>
          )}
        </div>

        <Link
          to={`/projects/${id}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-2.5 transition-all"
        >
          View Case Study <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  )
}
