import { services } from '../utils/data'
import CTASection from '../components/CTASection'

const stack = [
  {
    category: 'Frontend',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native', 'Expo'],
  },
  {
    category: 'Backend',
    techs: ['Node.js', 'Python', 'FastAPI', 'Express', 'GraphQL', 'REST'],
  },
  {
    category: 'Data & storage',
    techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase', 'Prisma'],
  },
  {
    category: 'Infrastructure',
    techs: ['AWS', 'GCP', 'Vercel', 'Docker', 'GitHub Actions', 'Terraform'],
  },
]

export default function Services() {
  return (
    <main>
      <section className="border-b border-line dark:border-white/10">
        <div className="page py-14 md:py-20">
          <p className="eyebrow">Services</p>
          <h1 className="page-title mt-3 max-w-2xl">What we build</h1>
          <p className="lede mt-4 max-w-xl">
            We cover the full stack, from user interfaces to backend infrastructure. Everything is built to be handed off, maintained, and scaled.
          </p>
        </div>
      </section>

      {services.map(service => (
        <section
          key={service.id}
          id={service.id}
          className="scroll-mt-20 border-b border-line dark:border-white/10"
        >
          <div className="page grid gap-10 py-14 md:grid-cols-12 md:py-16">
            <div className="md:col-span-7">
              <h2 className="section-title">{service.title}</h2>
              <p className="mt-3 text-ink-400 dark:text-ink-200">{service.tagline}</p>
              <p className="mt-5 leading-relaxed text-ink-300 dark:text-ink-200">{service.description}</p>
              <p className="mt-6 border-l-2 border-brand-600 pl-4 text-sm leading-relaxed text-ink-400 dark:text-ink-200">
                {service.impact}
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-200">
                What you get
              </h3>
              <ul className="mt-4 space-y-3">
                {service.deliverables.map(item => (
                  <li key={item} className="text-sm leading-relaxed text-ink-400 dark:text-ink-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding" aria-labelledby="stack-heading">
        <div className="page">
          <p className="eyebrow">Stack</p>
          <h2 id="stack-heading" className="section-title mt-3 max-w-xl">
            Tools we ship with
          </h2>
          <p className="mt-3 max-w-xl text-ink-300 dark:text-ink-200">
            We choose boring, battle-tested technology over hype. Everything below has survived production.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map(group => (
              <div key={group.category} className="border-t border-line pt-4 dark:border-white/10">
                <h3 className="text-sm font-medium text-ink-500 dark:text-mist">{group.category}</h3>
                <ul className="mt-3 space-y-1.5">
                  {group.techs.map(tech => (
                    <li key={tech} className="text-sm text-ink-300 dark:text-ink-200">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
