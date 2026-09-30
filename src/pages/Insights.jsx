import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'

const articles = [
  {
    slug: 'scoping-software-projects',
    tag: 'Process',
    readTime: '5 min',
    title: 'Why 80% of software projects fail at scoping, not execution',
    excerpt:
      "Most projects don't fail because of bad code. They fail because the problem was never defined tightly enough to build against. Here's the scoping framework we use on every engagement.",
  },
  {
    slug: 'africa-fintech-stack',
    tag: 'Engineering',
    readTime: '7 min',
    title: "The backend stack we reach for when building fintech products in Africa",
    excerpt:
      "Intermittent connectivity, mobile-first users, and multi-currency requirements change what 'good architecture' means. We break down the decisions that matter most.",
  },
  {
    slug: 'handoff-problem',
    tag: 'Clients',
    readTime: '4 min',
    title: "The handoff problem: why your agency's developers never talk to you",
    excerpt:
      "There's a structural reason why agencies sell with senior staff and deliver with juniors. Understanding it will help you ask better questions before you sign.",
  },
  {
    slug: 'react-native-vs-flutter',
    tag: 'Engineering',
    readTime: '6 min',
    title: 'React Native vs Flutter in 2025: the honest answer for product teams',
    excerpt:
      "Both are mature. The choice comes down to your team's existing skills and one architectural decision that most articles never mention.",
  },
  {
    slug: 'measuring-software-roi',
    tag: 'Business',
    readTime: '5 min',
    title: 'How to measure the ROI of a custom software build',
    excerpt:
      'Cost per feature is not a useful metric. Here are the four numbers that actually tell you whether a software investment paid off.',
  },
  {
    slug: 'postgres-for-startups',
    tag: 'Engineering',
    readTime: '8 min',
    title: 'PostgreSQL is still the right default database for most startups',
    excerpt:
      "Every year a new database claims to replace Postgres. Every year we watch teams migrate back. Here's why we start with Postgres and the exact cases where we don't.",
  },
]

export default function Insights() {
  return (
    <main>
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
