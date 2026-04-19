import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Globe,
  Smartphone,
  Layers,
  Server,
  Heart,
  TrendingUp,
  Truck,
  Cloud,
  CheckCircle2,
} from 'lucide-react'
import { projects, services, stats, industries, processSteps, testimonials } from '../utils/data'
import ProjectCard from '../components/ProjectCard'
import CTASection from '../components/CTASection'
import SectionWrapper from '../components/SectionWrapper'

const serviceIcons = { Globe, Smartphone, Layers, Server }
const industryIcons = { Heart, TrendingUp, Truck, Cloud }

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-violet-950/10 dark:from-indigo-950/40 dark:via-slate-950 dark:to-violet-950/20" />
        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/8 dark:bg-indigo-500/12 blur-3xl pointer-events-none"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/6 dark:bg-violet-500/10 blur-3xl pointer-events-none"
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-cyan-500/4 dark:bg-cyan-500/8 blur-3xl pointer-events-none"
          animate={{ x: [0, 20, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-6 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900">
              Software Development Company
            </span>

            <h1 className="font-heading text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-6 max-w-4xl mx-auto">
              We build software that helps businesses{' '}
              <span className="gradient-text">launch faster</span> and scale without friction.
            </h1>

            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              From healthcare platforms to fintech infrastructure — we ship production-ready software
              that your business depends on.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-500/25 text-sm w-full sm:w-auto justify-center"
              >
                View Our Work <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-sm w-full sm:w-auto justify-center"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted by strip */}
      <div className="border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 py-5 overflow-hidden">
        <div className="flex items-center gap-3 mb-1 px-6 max-w-7xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 whitespace-nowrap">
            Trusted by
          </span>
        </div>
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-12 items-center whitespace-nowrap px-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[
              'HealthTrack Network', 'ClearPay', 'FleetOps Africa', 'TalentHive',
              'MediSync EMR', 'TradeFlow Analytics', 'HealthTrack Network', 'ClearPay',
              'FleetOps Africa', 'TalentHive', 'MediSync EMR', 'TradeFlow Analytics',
            ].map((name, i) => (
              <span key={i} className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <SectionWrapper className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 !py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper id="projects">
        <motion.div {...fadeUp} className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 block">
            Case Studies
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Work we're proud of
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl">
            Real projects. Real outcomes. Every case study includes the problem, the solution, and the
            measurable result.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <motion.div {...fadeUp} className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all"
          >
            View all case studies <ArrowRight size={14} />
          </Link>
        </motion.div>
      </SectionWrapper>

      {/* Services Overview */}
      <SectionWrapper className="bg-slate-50 dark:bg-slate-900/30">
        <motion.div {...fadeUp} className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 block">
            What We Do
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Built for the full stack
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl">
            From the user interface to the infrastructure beneath it — we own the entire build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center mb-4 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors">
                  <Icon size={18} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {service.tagline}
                </p>
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-4 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight size={12} />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Industries */}
      <SectionWrapper>
        <motion.div {...fadeUp} className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 block">
            Specialization
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Industries we know deeply
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl">
            Domain knowledge changes the quality of the software. We've worked deep enough in these
            industries to know what actually matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {industries.map((industry, i) => {
            const Icon = industryIcons[industry.icon]
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {industry.examples.map(ex => (
                      <span
                        key={ex}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper className="bg-slate-50 dark:bg-slate-900/30">
        <motion.div {...fadeUp} className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 block">
            How We Work
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            No surprises at launch
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl">
            A structured process means every decision is made at the right time — not improvised
            under deadline pressure.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-slate-200 dark:bg-slate-800" />
          <div className="space-y-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 md:ml-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center md:relative md:-left-8">
                  <span className="text-white text-xs font-bold font-heading">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* About Preview */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 block">
              Who We Are
            </span>
            <h2 className="font-heading text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              A team that ships — and keeps shipping.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Nexbuild is a software development company focused on building products that work under
              real-world conditions. We don't prototype and hand off. We build, deploy, and stand
              behind the systems we ship.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              Our team has shipped software across four industries — health, fintech, logistics, and
              SaaS — and we bring that cross-domain experience to every new engagement.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all"
            >
              Learn more about Nexbuild <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              "We write code we'd maintain ourselves.",
              'No handoffs to junior devs after the sale.',
              'We flag scope problems before they become cost overruns.',
              'We document what we build so your team can own it.',
            ].map((point, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex gap-3"
              >
                <CheckCircle2 size={16} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{point}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="section-padding bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 block">
              Client Results
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Don't take our word for it.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                {/* Quote marks */}
                <svg className="w-8 h-8 text-indigo-200 dark:text-indigo-900 mb-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-xs font-heading">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTASection />
    </main>
  )
}
