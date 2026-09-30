import { Link } from 'react-router-dom'

export default function CTASection({
  headline = 'Have a project in mind?',
  subtext = "Tell us what you're working on. We'll reply within one business day with questions, a rough scope, or a time to talk.",
  buttonLabel = 'Start a project',
  buttonTo = '/contact',
}) {
  return (
    <section className="border-t border-line dark:border-white/10">
      <div className="page grid items-end gap-6 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-8">
          <h2 className="section-title">{headline}</h2>
          <p className="mt-3 max-w-xl text-ink-300 dark:text-ink-200">{subtext}</p>
        </div>
        <div className="md:col-span-4 md:text-right">
          <Link to={buttonTo} className="btn btn-primary w-full sm:w-auto">
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
