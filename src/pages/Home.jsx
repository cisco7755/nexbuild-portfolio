import { Link } from 'react-router-dom'
import { projects, services, stats, industries, processSteps, testimonials } from '../utils/data'
import ProjectCard from '../components/ProjectCard'
import CTASection from '../components/CTASection'

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <main>
      <section className="border-b border-line dark:border-white/10">
        <div className="page grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="eyebrow">Software studio</p>
            <h1 className="page-title mt-4">
              We build software that helps businesses launch faster and scale without friction.
            </h1>
            <p className="lede mt-5 max-w-xl">
              From healthcare platforms to fintech infrastructure. {stats[0].value} production products
              shipped across {stats[2].value} industries that businesses depend on every day.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/projects" className="btn btn-primary">
                View our work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Start a project
              </Link>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 self-end lg:col-span-4 lg:border-l lg:border-line lg:pl-10 dark:lg:border-white/10">
            {stats.map(stat => (
              <div key={stat.label}>
                <dt className="text-sm text-ink-300 dark:text-ink-200">{stat.label}</dt>
                <dd className="mt-1 font-heading text-2xl font-semibold text-ink-500 dark:text-mist">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="work-heading">
        <div className="page">
          <div className="mb-8 max-w-xl md:mb-10">
            <p className="eyebrow">Case studies</p>
            <h2 id="work-heading" className="section-title mt-3">
              Work we're proud of
            </h2>
            <p className="mt-3 text-ink-300 dark:text-ink-200">
              Each study covers the problem, what we built, and the result.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} card />
            ))}
          </div>

          <p className="mt-8">
            <Link to="/projects" className="text-sm font-medium text-ink-500 underline-offset-4 hover:underline dark:text-mist">
              All case studies
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-line dark:border-white/10" aria-labelledby="services-heading">
        <div className="page py-16 md:py-20">
          <div className="mb-2 max-w-xl">
            <p className="eyebrow">Services</p>
            <h2 id="services-heading" className="section-title mt-3">
              Built for the full stack
            </h2>
            <p className="mt-3 text-ink-300 dark:text-ink-200">
              From the interface to the infrastructure beneath it.
            </p>
          </div>

          <ol className="mt-8 border-t border-line dark:border-white/10">
            {services.map((service, index) => (
              <li key={service.id} className="border-b border-line dark:border-white/10">
                <Link
                  to={`/services#${service.id}`}
                  className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
                >
                  <span className="text-sm tabular-nums text-ink-200 md:col-span-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-ink-500 dark:text-mist md:col-span-3">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-300 dark:text-ink-200 md:col-span-8">
                    {service.tagline}
                  </p>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line dark:border-white/10" aria-labelledby="industries-heading">
        <div className="page py-16 md:py-20">
          <div className="max-w-xl">
            <p className="eyebrow">Industries</p>
            <h2 id="industries-heading" className="section-title mt-3">
              Industries we know deeply
            </h2>
            <p className="mt-3 text-ink-300 dark:text-ink-200">
              Domain knowledge changes the quality of the software. We've worked in these fields long enough to know what actually matters.
            </p>
          </div>

          <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {industries.map(industry => (
              <div key={industry.id} className="border-t border-line pt-5 dark:border-white/10">
                <h3 className="font-heading text-xl font-semibold text-ink-500 dark:text-mist">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300 dark:text-ink-200">
                  {industry.description}
                </p>
                <p className="mt-3 text-sm text-ink-400 dark:text-ink-200">
                  {industry.examples.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line dark:border-white/10" aria-labelledby="process-heading">
        <div className="page grid gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <p className="eyebrow">How we work</p>
            <h2 id="process-heading" className="section-title mt-3">
              No surprises at launch
            </h2>
            <p className="mt-3 text-ink-300 dark:text-ink-200">
              Decisions are made at the right time, not improvised under a deadline.
            </p>
          </div>
          <ol className="md:col-span-8">
            {processSteps.map(step => (
              <li key={step.number} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-5 dark:border-white/10">
                <span className="pt-1 text-sm tabular-nums text-ink-200">{step.number}</span>
                <div>
                  <h3 className="font-medium text-ink-500 dark:text-mist">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-300 dark:text-ink-200">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line dark:border-white/10">
        <div className="page grid gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-6">
            <p className="eyebrow">About</p>
            <h2 className="section-title mt-3">A team that ships, and keeps shipping.</h2>
            <p className="mt-4 leading-relaxed text-ink-300 dark:text-ink-200">
              Quoxova is a software development company focused on building products that work under real-world conditions. We don't prototype and hand off. We build, deploy, and stand behind the systems we ship.
            </p>
            <p className="mt-4 leading-relaxed text-ink-300 dark:text-ink-200">
              Our team has shipped software across health, fintech, logistics, and SaaS, and we bring that experience to every new engagement.
            </p>
            <p className="mt-6">
              <Link to="/about" className="text-sm font-medium text-ink-500 underline-offset-4 hover:underline dark:text-mist">
                About Quoxova
              </Link>
            </p>
          </div>
          <ul className="md:col-span-5 md:col-start-8">
            {[
              "We write code we'd maintain ourselves.",
              'No handoffs to junior devs after the sale.',
              'We flag scope problems before they become cost overruns.',
              'We document what we build so your team can own it.',
            ].map(point => (
              <li key={point} className="border-t border-line py-4 text-sm leading-relaxed text-ink-400 dark:border-white/10 dark:text-ink-200">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line dark:border-white/10" aria-labelledby="clients-heading">
        <div className="page py-16 md:py-20">
          <h2 id="clients-heading" className="section-title">
            What clients say
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {testimonials.map(item => (
              <figure key={item.name} className="border-t border-line pt-5 dark:border-white/10">
                <blockquote className="font-heading text-lg leading-snug text-ink-500 dark:text-mist">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="block font-medium text-ink-500 dark:text-mist">{item.name}</span>
                  <span className="text-ink-300 dark:text-ink-200">{item.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
