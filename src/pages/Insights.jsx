import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
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
    color: 'from-indigo-500 to-violet-500',
  },
  {
    slug: 'africa-fintech-stack',
    tag: 'Engineering',
    readTime: '7 min',
    title: "The backend stack we reach for when building fintech products in Africa",
    excerpt:
      "Intermittent connectivity, mobile-first users, and multi-currency requirements change what 'good architecture' means. We break down the decisions that matter most.",
    color: 'from-emerald-500 to-teal-600',
  },
  {
    slug: 'handoff-problem',
    tag: 'Clients',
    readTime: '4 min',
    title: "The handoff problem: why your agency's developers never talk to you",
    excerpt:
      "There's a structural reason why agencies sell with senior staff and deliver with juniors. Understanding it will help you ask better questions before you sign.",
    color: 'from-orange-500 to-amber-500',
  },
  {
    slug: 'react-native-vs-flutter',
    tag: 'Engineering',
    readTime: '6 min',
    title: 'React Native vs Flutter in 2025: the honest answer for product teams',
    excerpt:
      "Both are mature. The choice comes down to your team's existing skills and one architectural decision that most articles never mention.",
    color: 'from-cyan-500 to-indigo-500',
  },
  {
    slug: 'measuring-software-roi',
    tag: 'Business',
    readTime: '5 min',
    title: 'How to measure the ROI of a custom software build',
    excerpt:
      "Cost per feature is not a useful metric. Here are the four numbers that actually tell you whether a software investment paid off.",
    color: 'from-violet-500 to-purple-600',
  },
  {
    slug: 'postgres-for-startups',
    tag: 'Engineering',
    readTime: '8 min',
    title: 'PostgreSQL is still the right default database for most startups',
    excerpt:
      "Every year a new database claims to replace Postgres. Every year we watch teams migrate back. Here's why we start with Postgres and the exact cases where we don't.",
    color: 'from-rose-500 to-pink-600',
  },
]

const tagColors = {
  Process: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400',
  Engineering: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400',
  Clients: 'bg-orange-50 text-orange-700 dark:bg-orange-950/50 dark:text-orange-400',
  Business: 'bg-violet-50 text-violet-700 dark:bg-violet-950/50 dark:text-violet-400',
}

export default function Insights() {
  const [featured, ...rest] = articles

  return (
    <main className="pt-20">
      <section className="pt-0 pb-0">
        <div className="max-w-[1800px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 block">
              Insights
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-black text-ink-500 dark:text-white mb-4 leading-tight">
              How we think.
            </h1>
            <p className="text-lg text-ink-300 dark:text-ink-200 leading-relaxed">
              Practical writing on software engineering, client work, and building products that last.
              No fluff, no hot takes   just things we've actually learned.
            </p>
          </motion.div>

          {/* Featured article */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 pb-16 border-b border-slate-200 dark:border-slate-800"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className={`h-64 rounded-2xl bg-gradient-to-br ${featured.color} flex items-center justify-center`}>
                <span className="text-white/20 font-heading font-black text-8xl select-none">01</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[featured.tag]}`}>
                    {featured.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-ink-200">
                    <Clock size={12} /> {featured.readTime} read
                  </span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink-500 dark:text-white mb-4 leading-snug">
                  {featured.title}
                </h2>
                <p className="text-ink-300 dark:text-ink-200 leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <Link to={`/insights/${featured.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all">
                  Read article <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article grid */}
      <section className="section-padding pt-0">
        <div className="max-w-[1800px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/insights/${article.slug}`}
                  className="group flex flex-col p-4 md:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors h-full"
                >
                  <div className={`h-32 rounded-xl bg-gradient-to-br ${article.color} mb-5 flex items-center justify-center`}>
                    <span className="text-white/20 font-heading font-black text-5xl select-none">
                      {String(i + 2).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[article.tag]}`}>
                      {article.tag}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-ink-200">
                      <Clock size={12} /> {article.readTime} read
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-ink-500 dark:text-white mb-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-ink-300 dark:text-ink-200 leading-relaxed flex-1 mb-4">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:gap-2.5 transition-all">
                    Read article <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
