import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { stats, processSteps } from '../utils/data'
import CTASection from '../components/CTASection'
import AnimatedStat from '../components/AnimatedStat'

const values = [
  {
    title: 'Outcomes over output',
    description:
      "Lines of code and tickets closed are proxies. The thing that matters is whether the software solved the actual problem. We measure ourselves against that.",
  },
  {
    title: 'Honest scoping',
    description:
      "We'd rather have the hard conversation about timeline and budget upfront than deliver something incomplete on time. Scope problems surface in discovery, not at launch.",
  },
  {
    title: 'Ownership, not hand-offs',
    description:
      "When we build something, we own it end to end. There's no internal pass-off to a 'delivery team' after the sale. The people you talk to in discovery are the people who build it.",
  },
  {
    title: 'Simple over clever',
    description:
      "Clever code impresses developers. Simple code survives team changes, scaling events, and 2am production incidents. We optimize for the latter.",
  },
]

const teamMembers = [
  {
    name: 'Engineering Team',
    role: 'Full-Stack & Mobile',
    description: 'React, Next.js, Node.js, React Native, Python — across web and mobile.',
    initials: 'ENG',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    name: 'Design Team',
    role: 'Product & UI/UX',
    description: 'Figma-native designers who think in systems, not screens.',
    initials: 'DES',
    color: 'from-violet-500 to-purple-500',
  },
  {
    name: 'Infrastructure Team',
    role: 'Backend & DevOps',
    description: 'AWS, GCP, Azure — plus the pipelines, queues, and APIs that tie it together.',
    initials: 'INF',
    color: 'from-cyan-500 to-indigo-500',
  },
]

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 block">
              About Nexbuild
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              We build software companies depend on.
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Nexbuild is a Nigerian software development company with one focus: building products
              that work under real-world conditions. Based in Lagos, we work with businesses across
              Africa and globally — not demos, not prototypes handed off with a prayer. Software that
              ships, scales, and earns trust over time.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-20 border-b border-slate-200 dark:border-slate-800">
            {stats.map((stat, i) => (
              <AnimatedStat key={stat.label} stat={stat} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 block">
                Mission
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Software that solves real problems and earns its place in your stack.
              </h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Too much software is built to impress in demos and struggle in production. We've seen
                it on both sides — as the team that inherited broken systems and as the team that had
                to fix them.
              </p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Our goal is to build software that's still running cleanly 3 years after launch. That
                your team can operate without us. That earns trust through reliability, not promises.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              {values.map(value => (
                <div
                  key={value.title}
                  className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex gap-3">
                    <CheckCircle2 size={18} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-sm">
                        {value.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 block">
              The Team
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Specialists, not generalists.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl">
              The people who talk to clients are the people who build. No junior dev handoffs.
              No outsourced execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-5`}
                >
                  <span className="text-white font-bold text-sm font-heading">{member.initials}</span>
                </div>
                <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3 uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 block">
              Process
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              How we run every engagement
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl">
              Every project follows the same structured approach — regardless of size or industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative"
              >
                <div className="text-4xl font-black text-slate-100 dark:text-slate-800 font-heading mb-4">
                  {step.number}
                </div>
                <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* View Work */}
      <section className="section-padding border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              See the work behind the words.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Every case study on our projects page includes the real problem, what we built, and the
              measurable result.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors text-sm"
            >
              View Case Studies <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
