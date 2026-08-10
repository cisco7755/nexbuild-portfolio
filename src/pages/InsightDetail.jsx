import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react'
import CTASection from '../components/CTASection'

const articles = [
  {
    slug: 'scoping-software-projects',
    tag: 'Process',
    readTime: '5 min',
    color: 'from-indigo-500 to-violet-500',
    title: 'Why 80% of software projects fail at scoping, not execution',
    excerpt: "Most projects don't fail because of bad code. They fail because the problem was never defined tightly enough to build against.",
    body: [
      {
        type: 'p',
        text: "Ask a failed software project team what went wrong and you'll hear about missed deadlines, scope creep, and 'the requirements kept changing.' What you won't hear   because it's harder to admit   is that nobody defined the actual problem before the first line of code was written.",
      },
      {
        type: 'h2',
        text: 'The real cause of scope creep',
      },
      {
        type: 'p',
        text: "Scope creep doesn't happen because clients are indecisive. It happens because the initial scope was a wish list, not a definition. When a team kicks off with 'we want a platform that does X, Y, and Z,' they've defined features, not problems. Features are negotiable. Problems are not.",
      },
      {
        type: 'p',
        text: "Every time a stakeholder says 'can we also add…' during development, it's not a new requirement appearing   it's an old requirement that was never surfaced. The discovery process failed.",
      },
      {
        type: 'h2',
        text: 'What a tight scope actually looks like',
      },
      {
        type: 'p',
        text: 'A well-scoped project can answer four questions before development starts:',
      },
      {
        type: 'list',
        items: [
          'What is the specific user action that is currently broken, slow, or missing?',
          'What does success look like in a number   not a feeling?',
          'What is the minimum surface area of software required to achieve that number?',
          'What are we explicitly not building in this engagement?',
        ],
      },
      {
        type: 'p',
        text: "That last question is as important as the others. A scope document that doesn't say what's out of scope isn't a scope document. It's a polite intention.",
      },
      {
        type: 'h2',
        text: 'Our discovery framework',
      },
      {
        type: 'p',
        text: "Every Quoxova engagement starts with a structured discovery sprint before any code is written. We spend the first one to two weeks doing three things: mapping the current workflow end to end, identifying the exact constraint that limits business performance, and writing one sentence that describes what we're building and why it will move the constraint.",
      },
      {
        type: 'p',
        text: "If we can't write that sentence, we don't have a scope. We go back and keep looking. It feels slow. It prevents months of rework.",
      },
      {
        type: 'h2',
        text: 'The conversation that saves projects',
      },
      {
        type: 'p',
        text: "The most valuable thing we do in discovery is the conversation that nobody wants to have: 'If we only had four weeks and half the budget, what's the one thing this software absolutely must do?' The answer to that question is the real scope. Everything else is phase two.",
      },
    ],
  },
  {
    slug: 'africa-fintech-stack',
    tag: 'Engineering',
    readTime: '7 min',
    color: 'from-emerald-500 to-teal-600',
    title: 'The backend stack we reach for when building fintech products in Africa',
    excerpt: "Intermittent connectivity, mobile-first users, and multi-currency requirements change what 'good architecture' means.",
    body: [
      {
        type: 'p',
        text: "Building fintech in Africa is not the same as building fintech in Europe or North America. The constraints are different. The user behavior is different. And the architecture decisions that work in San Francisco can break spectacularly in Lagos.",
      },
      {
        type: 'h2',
        text: 'Constraint 1: Connectivity is intermittent',
      },
      {
        type: 'p',
        text: "Your API cannot assume a stable connection. Requests will drop mid-flight. Users will submit a payment form, lose signal, and reopen the app uncertain whether the transaction went through. If your backend isn't idempotent by design, you will create duplicate transactions, double charges, and support tickets that destroy trust fast.",
      },
      {
        type: 'p',
        text: "We design every financial transaction endpoint with idempotency keys from the start   not as a retrofit. The client generates a UUID before the request, sends it in the header, and the server uses it to deduplicate. If the same request arrives twice, the second one returns the same result as the first without re-executing.",
      },
      {
        type: 'h2',
        text: 'Constraint 2: Mobile-first means low-spec devices',
      },
      {
        type: 'p',
        text: "The median smartphone in Nigeria runs 2GB of RAM with a mid-range CPU. Heavy frontend applications that render fine on a MacBook Pro will stutter or crash on the device your actual users are holding. We paginate aggressively, lazy-load everything that's not in the first viewport, and keep JS bundles under 200KB for the initial load.",
      },
      {
        type: 'h2',
        text: 'Constraint 3: Multi-currency is not optional',
      },
      {
        type: 'p',
        text: "If you're building a fintech product that operates across Nigeria, Ghana, and Kenya, you're dealing with NGN, GHS, and KES   and the exchange rates between them change daily. We never store amounts as floats (floating-point precision errors in financial calculations are a nightmare). We store all monetary values as integers in the smallest currency unit (kobo for NGN, pesewa for GHS) and handle display formatting in a single utility layer.",
      },
      {
        type: 'h2',
        text: 'The stack we actually use',
      },
      {
        type: 'list',
        items: [
          'Node.js + Express for API layers   fast to iterate, massive ecosystem for payment integrations',
          'PostgreSQL for all financial data   ACID compliance is non-negotiable',
          'Redis for idempotency key storage and rate limiting',
          'BullMQ for async job queues   webhook retries, statement generation, notification dispatch',
          'Paystack or Flutterwave for payment rails   both have solid Nigerian bank coverage',
        ],
      },
      {
        type: 'h2',
        text: 'What we avoid',
      },
      {
        type: 'p',
        text: "MongoDB for financial data. The schema flexibility that makes it attractive for other use cases is a liability when you need to guarantee that every naira is accounted for. We've inherited MongoDB-backed fintech systems twice. Both had data integrity issues that took months to reconcile.",
      },
    ],
  },
  {
    slug: 'handoff-problem',
    tag: 'Clients',
    readTime: '4 min',
    color: 'from-orange-500 to-amber-500',
    title: "The handoff problem: why your agency's developers never talk to you",
    excerpt: "There's a structural reason why agencies sell with senior staff and deliver with juniors.",
    body: [
      {
        type: 'p',
        text: "If you've hired a software agency before, you may have noticed something: the person who sold you the project   articulate, experienced, clearly understood your business   is not the person who shows up to the kickoff call. And they're definitely not writing the code.",
      },
      {
        type: 'h2',
        text: "Why this happens (it's structural, not malicious)",
      },
      {
        type: 'p',
        text: "Large agencies have a business model problem. Senior engineers are expensive. Sales cycles are uncertain. The solution most agencies land on is to staff sales with senior people who can close deals, then hand those deals to a 'delivery team'   often a mix of mid-level and junior engineers   to execute at a lower cost margin.",
      },
      {
        type: 'p',
        text: "The senior engineer you fell in love with in the pitch meeting is now working their next three pitches while a developer who joined six months ago tries to interpret the scope document they left behind.",
      },
      {
        type: 'h2',
        text: 'What to ask before you sign',
      },
      {
        type: 'list',
        items: [
          "Who specifically will be writing the code on this project? Can I meet them before we sign?",
          "What's the ratio of senior to junior developers on this engagement?",
          "If the person leading the sales process is not building the product, who is my primary technical contact day to day?",
          "How do you handle it if the assigned developer leaves mid-project?",
        ],
      },
      {
        type: 'p',
        text: "A good agency will answer all of these without hesitation. An agency with a handoff problem will get vague, redirect to the account manager, or promise 'access to the whole team.'",
      },
      {
        type: 'h2',
        text: 'How we handle it',
      },
      {
        type: 'p',
        text: "At Quoxova, the engineers on your project are the engineers in your discovery sessions. There is no delivery team waiting behind a wall. We keep engagements to a size where this is sustainable   which means we turn down projects when we're at capacity rather than staffing them with people who don't have context.",
      },
    ],
  },
  {
    slug: 'react-native-vs-flutter',
    tag: 'Engineering',
    readTime: '6 min',
    color: 'from-cyan-500 to-indigo-500',
    title: 'React Native vs Flutter in 2025: the honest answer for product teams',
    excerpt: "Both are mature. The choice comes down to your team's existing skills and one architectural decision that most articles never mention.",
    body: [
      {
        type: 'p',
        text: "Most React Native vs Flutter articles are written by people who have a preference and are looking for evidence to support it. We've shipped production apps in both. Here's what actually matters when you're choosing.",
      },
      {
        type: 'h2',
        text: 'The question nobody asks: who is maintaining this after launch?',
      },
      {
        type: 'p',
        text: "If you're handing the codebase to an in-house team after launch, the framework choice is also a hiring decision. React Native developers are easier to hire   the pool is larger, and any strong React web developer can become productive in React Native within a few weeks. Flutter requires Dart, which narrows your hiring pool significantly outside of large tech centers.",
      },
      {
        type: 'h2',
        text: 'Where React Native wins',
      },
      {
        type: 'list',
        items: [
          'You have an existing React web codebase and want to share logic between web and mobile',
          'Your team already knows JavaScript/TypeScript',
          'You need deep integration with native modules   the bridge ecosystem is more mature',
          'Hiring and long-term maintenance are a consideration',
        ],
      },
      {
        type: 'h2',
        text: 'Where Flutter wins',
      },
      {
        type: 'list',
        items: [
          'You need pixel-perfect custom UI that behaves identically on iOS and Android',
          "You're building a highly animated, visually intensive app",
          'Your team already knows Flutter or is committed to learning it',
          "Performance is the primary constraint and you can't afford the JavaScript bridge overhead",
        ],
      },
      {
        type: 'h2',
        text: 'The honest default',
      },
      {
        type: 'p',
        text: "For most product teams building a standard mobile application   user authentication, data fetching, forms, push notifications, a few screens   React Native with Expo is the faster path to production. The ecosystem is larger, the tooling is more mature for common use cases, and the JavaScript/TypeScript knowledge is more transferable.",
      },
      {
        type: 'p',
        text: "We default to React Native unless there's a specific reason not to. That reason usually comes down to one of the Flutter advantages above, not abstract performance benchmarks.",
      },
    ],
  },
  {
    slug: 'measuring-software-roi',
    tag: 'Business',
    readTime: '5 min',
    color: 'from-violet-500 to-purple-600',
    title: 'How to measure the ROI of a custom software build',
    excerpt: "Cost per feature is not a useful metric. Here are the four numbers that actually tell you whether a software investment paid off.",
    body: [
      {
        type: 'p',
        text: "Most companies evaluate custom software projects the wrong way: they compare the final invoice to the original budget. That tells you whether the project was delivered on budget. It tells you almost nothing about whether the investment was worth making.",
      },
      {
        type: 'h2',
        text: 'The four numbers that actually matter',
      },
      {
        type: 'h3',
        text: '1. Cost of the problem before the software',
      },
      {
        type: 'p',
        text: "Before you build anything, calculate what the current broken process costs per month   in staff hours, error rates, delayed decisions, or lost revenue. This is your baseline. If you don't have this number, you have no way to evaluate success.",
      },
      {
        type: 'h3',
        text: '2. Time to first business impact',
      },
      {
        type: 'p',
        text: "How long after go-live did the software start delivering measurable results? A project that saves ₦5M per month but took 18 months to launch has a very different ROI profile than one that launched in 10 weeks. Fast value delivery matters as much as the eventual value delivered.",
      },
      {
        type: 'h3',
        text: '3. Total cost of ownership at 12 months',
      },
      {
        type: 'p',
        text: "The build cost is just the beginning. Add the cost of hosting, maintenance, bug fixes, and any feature additions in the first year. Poorly built software often costs more in maintenance than it did to build. Well-built software runs quietly and cheaply.",
      },
      {
        type: 'h3',
        text: '4. The metric the software was built to move',
      },
      {
        type: 'p',
        text: "Did the specific number you identified in scoping actually move? If the goal was to reduce order processing time from 4 hours to 30 minutes, did it? If yes, ROI calculation is straightforward. If no, you need to understand why before investing in more features.",
      },
      {
        type: 'h2',
        text: 'A framework for the conversation',
      },
      {
        type: 'p',
        text: "If a software vendor can't help you define these four numbers before you sign, that's a signal. Good vendors want clear success metrics because it protects them from scope arguments later. Vague vendors avoid them because it makes it harder for you to evaluate whether they delivered.",
      },
    ],
  },
  {
    slug: 'postgres-for-startups',
    tag: 'Engineering',
    readTime: '8 min',
    color: 'from-rose-500 to-pink-600',
    title: 'PostgreSQL is still the right default database for most startups',
    excerpt: "Every year a new database claims to replace Postgres. Every year we watch teams migrate back.",
    body: [
      {
        type: 'p',
        text: "There is a specific arc that plays out at a lot of startups. They pick a trendy database because it promises infinite scale and schema flexibility. Eighteen months later, they're rewriting to PostgreSQL because the data integrity guarantees were more important than they thought, and the operational complexity wasn't worth it.",
      },
      {
        type: 'p',
        text: "We've seen this arc often enough that we now default to PostgreSQL unless there's a very specific reason not to. Here's why.",
      },
      {
        type: 'h2',
        text: 'ACID compliance is not a nice-to-have',
      },
      {
        type: 'p',
        text: "Atomicity, consistency, isolation, and durability   the four ACID properties   are what guarantee that your database reflects reality. When a transaction fails halfway through, ACID-compliant databases roll it back. Non-ACID systems leave you with partial writes that corrupt your data silently.",
      },
      {
        type: 'p',
        text: "Most applications don't discover they need ACID compliance until they're debugging an incident at 2am. By then, if your database doesn't provide it, the debugging session is going to be very long.",
      },
      {
        type: 'h2',
        text: 'Schema flexibility is usually a liability, not an asset',
      },
      {
        type: 'p',
        text: "The argument for schema-less databases is that you can store anything without migration. The counter-argument is that if you can store anything, you will   and six months later your documents have fifteen different shapes and querying them consistently requires application-layer code that should have been a constraint.",
      },
      {
        type: 'p',
        text: "PostgreSQL schemas force you to think about your data model. That forcing function is annoying early and invaluable later.",
      },
      {
        type: 'h2',
        text: 'The operational maturity argument',
      },
      {
        type: 'p',
        text: "Postgres has 30 years of production usage. The failure modes are documented. The tooling is excellent   pgAdmin, Supabase, Railway, RDS, Cloud SQL. Monitoring, backup, replication, read replicas: all solved problems with multiple good options. When you hit a problem, the answer is on Stack Overflow.",
      },
      {
        type: 'h2',
        text: 'When we reach for something else',
      },
      {
        type: 'list',
        items: [
          'Redis: for caching, rate limiting, session storage, and pub/sub   not as a primary database',
          'MongoDB: when the document model genuinely fits (content management, product catalogs with highly variable attributes)',
          'ClickHouse or BigQuery: for analytics workloads with billions of rows where OLAP performance matters',
          'Vector databases (pgvector first): for semantic search and AI embedding storage',
        ],
      },
      {
        type: 'p',
        text: "Notice that 'we want to scale to millions of users' is not on that list. PostgreSQL with proper indexing, connection pooling via PgBouncer, and read replicas handles millions of users cleanly. The startups that prematurely reach for distributed databases are usually solving a problem they don't have yet.",
      },
    ],
  },
]

const tagColors = {
  Process: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400',
  Engineering: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400',
  Clients: 'bg-orange-50 text-orange-700 dark:bg-orange-950/50 dark:text-orange-400',
  Business: 'bg-violet-50 text-violet-700 dark:bg-violet-950/50 dark:text-violet-400',
}

function renderBody(blocks) {
  return blocks.map((block, i) => {
    if (block.type === 'p') {
      return (
        <p key={i} className="text-ink-400 dark:text-ink-100 leading-relaxed text-base mb-5">
          {block.text}
        </p>
      )
    }
    if (block.type === 'h2') {
      return (
        <h2 key={i} className="font-heading text-xl md:text-2xl font-bold text-ink-500 dark:text-white mt-10 mb-4">
          {block.text}
        </h2>
      )
    }
    if (block.type === 'h3') {
      return (
        <h3 key={i} className="font-heading text-lg font-bold text-ink-500 dark:text-white mt-6 mb-3">
          {block.text}
        </h3>
      )
    }
    if (block.type === 'list') {
      return (
        <ul key={i} className="space-y-3 mb-6 pl-1">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 text-ink-400 dark:text-ink-100 text-base leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0 mt-2.5" />
              {item}
            </li>
          ))}
        </ul>
      )
    }
    return null
  })
}

export default function InsightDetail() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)

  if (!article) return <Navigate to="/insights" replace />

  const currentIndex = articles.findIndex(a => a.slug === slug)
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="pt-0 pb-0">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm text-ink-300 dark:text-ink-200 hover:text-ink-500 dark:hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to Insights
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[article.tag]}`}>
                {article.tag}
              </span>
              <span className="flex items-center gap-1 text-xs text-ink-200 dark:text-ink-300">
                <Clock size={12} /> {article.readTime} read
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-5xl font-black text-ink-500 dark:text-white leading-tight mb-6">
              {article.title}
            </h1>

            <p className="text-lg text-ink-300 dark:text-ink-200 leading-relaxed mb-6 md:mb-10 border-b border-slate-200 dark:border-slate-800 pb-10">
              {article.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {renderBody(article.body)}
          </motion.div>

          {/* Author block */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${article.color} flex items-center justify-center flex-shrink-0`}>
              <span className="text-white font-bold text-sm font-heading">N</span>
            </div>
            <div>
              <p className="font-semibold text-ink-500 dark:text-white text-sm">Quoxova Engineering</p>
              <p className="text-xs text-ink-300 dark:text-ink-200">Lagos, Nigeria · hello@quoxova.io</p>
            </div>
          </div>

          {/* Prev / Next */}
          {(prevArticle || nextArticle) && (
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between gap-4">
              {prevArticle ? (
                <Link to={`/insights/${prevArticle.slug}`} className="group flex items-center gap-3 text-left max-w-xs">
                  <ArrowLeft size={16} className="text-ink-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex-shrink-0" />
                  <div>
                    <p className="text-xs text-ink-200 mb-0.5">Previous</p>
                    <p className="text-sm font-semibold text-ink-500 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                      {prevArticle.title}
                    </p>
                  </div>
                </Link>
              ) : <div />}
              {nextArticle && (
                <Link to={`/insights/${nextArticle.slug}`} className="group flex items-center gap-3 text-right max-w-xs">
                  <div>
                    <p className="text-xs text-ink-200 mb-0.5">Next</p>
                    <p className="text-sm font-semibold text-ink-500 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                      {nextArticle.title}
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-ink-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex-shrink-0" />
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </main>
  )
}
