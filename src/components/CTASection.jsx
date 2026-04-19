import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection({
  headline = 'Have a project in mind? Let\'s build it.',
  subtext = 'Tell us what you\'re working on and we\'ll figure out how to make it happen.',
  buttonLabel = 'Start a Project',
  buttonTo = '/contact',
}) {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 px-8 py-16 md:px-16 md:py-20 text-center"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white" />
          </div>
          <div className="relative">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {headline}
            </h2>
            <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">{subtext}</p>
            <Link
              to={buttonTo}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-700 font-semibold hover:bg-indigo-50 transition-colors text-sm"
            >
              {buttonLabel}
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
