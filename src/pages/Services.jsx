import { motion } from 'framer-motion'
import { Globe, Smartphone, Layers, Server, CheckCircle2 } from 'lucide-react'
import { services } from '../utils/data'
import CTASection from '../components/CTASection'

const icons = { Globe, Smartphone, Layers, Server }

export default function Services() {
  return (
    <main className="pt-24">
      <section className="section-padding pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-20"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 block">
              Services
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
              What we build
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              We cover the full stack — from user interfaces to backend infrastructure. Everything is
              built to be handed off, maintained, and scaled.
            </p>
          </motion.div>
        </div>
      </section>

      {services.map((service, i) => {
        const Icon = icons[service.icon]
        const isEven = i % 2 === 0

        return (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${
              isEven
                ? 'bg-white dark:bg-slate-950'
                : 'bg-slate-50 dark:bg-slate-900/30'
            } border-t border-slate-200 dark:border-slate-800`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className={`grid md:grid-cols-2 gap-12 items-start ${!isEven ? 'md:[&>*:first-child]:order-2' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center mb-6 border border-indigo-100 dark:border-indigo-900">
                    <Icon size={24} className="text-indigo-600 dark:text-indigo-400" />
                  </div>

                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h2>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-6 text-lg">
                    {service.tagline}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg mb-8">
                    {service.description}
                  </p>

                  <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
                    <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-1">
                      Business Impact
                    </p>
                    <p className="text-sm text-amber-700 dark:text-amber-500 leading-relaxed">
                      {service.impact}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-6 text-lg">
                      What you get
                    </h3>
                    <ul className="space-y-4">
                      {service.deliverables.map(item => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle2
                            size={18}
                            className="text-indigo-500 flex-shrink-0 mt-0.5"
                          />
                          <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      <CTASection />
    </main>
  )
}
