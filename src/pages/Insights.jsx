import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import Seo from '../components/Seo'
import { articles } from '../content/insights'
import { insightsDocument } from '../seo/documents'

export default function Insights() {
  return (
    <main>
      <Seo doc={insightsDocument()} />
      <section className="border-b border-line dark:border-white/10">
        <div className="page py-14 md:py-20">
          <p className="eyebrow">Insights</p>
          <h1 className="page-title mt-3 max-w-2xl">How we think</h1>
          <p className="lede mt-4 max-w-xl">
            Practical writing on software engineering, client work, and building products that last.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="page">
          <ul className="border-t border-line dark:border-white/10">
            {articles.map(article => (
              <li key={article.slug} className="border-b border-line dark:border-white/10">
                <Link
                  to={`/insights/${article.slug}`}
                  className="group grid gap-2 py-6 md:grid-cols-12 md:gap-6"
                >
                  <p className="text-sm text-ink-300 dark:text-ink-200 md:col-span-3">
                    {article.tag}
                    <span aria-hidden="true"> · </span>
                    {article.readTime}
                  </p>
                  <div className="md:col-span-9">
                    <h2 className="font-heading text-xl font-semibold leading-snug text-ink-500 group-hover:underline group-hover:underline-offset-4 dark:text-mist">
                      {article.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-300 dark:text-ink-200">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
