import { Link } from 'react-router-dom'
import { stats, processSteps } from '../utils/data'
import CTASection from '../components/CTASection'
import AnimatedStat from '../components/AnimatedStat'

const values = [
  {
    title: 'Outcomes over output',
    description:
      'Lines of code and tickets closed are proxies. The thing that matters is whether the software solved the actual problem. We measure ourselves against that.',
  },
  {
    title: 'Honest scoping',
    description:
      "We'd rather have the hard conversation about timeline and budget upfront than deliver something incomplete on time. Scope problems surface in discovery, not at launch.",
  },
  {
    title: 'Ownership, not hand-offs',
    description:
      "When we build something, we own it end to end. There's no internal pass-off to a delivery team after the sale. The people you talk to in discovery are the people who build it.",
  },
  {
    title: 'Simple over clever',
    description:
      'Clever code impresses developers. Simple code survives team changes, scaling events, and 2am production incidents. We optimize for the latter.',
  },
]

const teamMembers = [
  {
    name: 'Engineering',
    role: 'Full-stack and mobile',
    description: 'React, Next.js, Node.js, React Native, and Python across web and mobile.',
  },
  {
    name: 'Design',
    role: 'Product and interface',
    description: 'Designers who work in systems, not isolated screens.',
  },
  {
    name: 'Infrastructure',
    role: 'Backend and operations',
    description: 'AWS, GCP, and Azure, plus the pipelines, queues, and APIs that tie it together.',
  },
]

const comparison = [
  ['Senior devs on your project, start to finish', true, false],
  ['Fixed scope with hard conversations upfront', true, false],
  ['Codebase you can operate without us', true, false],
  ['Direct access to the people building it', true, false],
  ['Outcome metrics tracked after launch', true, false],
  ['Sales team separate from delivery team', false, true],
  ['Post-launch ghosting', false, true],
]

function Mark({ yes }) {
  return (
    <span className={yes ? 'text-ink-500 dark:text-mist' : 'text-ink-200'}>
      {yes ? 'Yes' : 'No'}
    </span>
  )
}

export default function About() {
  return (
    <main>
      <section className="border-b border-line dark:border-white/10">
        <div className="page py-14 md:py-20">
          <p className="eyebrow">About</p>
          <h1 className="page-title mt-3 max-w-3xl">We build software companies depend on.</h1>
          <p className="lede mt-5 max-w-2xl">
            Quoxova is a Nigerian software development company with one focus: building products that work under real-world conditions. Based in Lagos, we work with businesses across Africa and globally. Software that ships, scales, and earns trust over time.
          </p>
          <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-line pt-8 dark:border-white/10 md:grid-cols-4">
            {stats.map(stat => (
              <AnimatedStat key={stat.label} stat={stat} />
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-line dark:border-white/10">
        <div className="page grid gap-12 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <p className="eyebrow">Mission</p>
            <h2 className="section-title mt-3">
              Software that solves real problems and earns its place in your stack.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="leading-relaxed text-ink-300 dark:text-ink-200">
              Too much software is built to impress in demos and struggle in production. We've seen it on both sides: as the team that inherited broken systems and as the team that had to fix them.
            </p>
            <p className="mt-4 leading-relaxed text-ink-300 dark:text-ink-200">
              Our goal is to build software that's still running cleanly 3 years after launch. That your team can operate without us. That earns trust through reliability, not promises.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line dark:border-white/10">
        <div className="page py-16 md:py-20">
          <h2 className="section-title">How we decide</h2>
          <dl className="mt-8 border-t border-line dark:border-white/10">
            {values.map(value => (
              <div key={value.title} className="grid gap-2 border-b border-line py-5 dark:border-white/10 md:grid-cols-12 md:gap-6">
                <dt className="font-medium text-ink-500 dark:text-mist md:col-span-4">{value.title}</dt>
                <dd className="text-sm leading-relaxed text-ink-300 dark:text-ink-200 md:col-span-8">
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-line dark:border-white/10">
        <div className="page py-16 md:py-20">
          <p className="eyebrow">Team</p>
          <h2 className="section-title mt-3 max-w-xl">Specialists, not generalists.</h2>
          <p className="mt-3 max-w-xl text-ink-300 dark:text-ink-200">
            The people who talk to clients are the people who build. No junior handoffs. No outsourced execution.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {teamMembers.map(member => (
              <div key={member.name} className="border-t border-line pt-4 dark:border-white/10">
                <h3 className="font-heading text-xl font-semibold text-ink-500 dark:text-mist">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-ink-300 dark:text-ink-200">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-300 dark:text-ink-200">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line dark:border-white/10">
        <div className="page py-16 md:py-20">
          <p className="eyebrow">Process</p>
          <h2 className="section-title mt-3">How we run every engagement</h2>
          <ol className="mt-8 border-t border-line dark:border-white/10">
            {processSteps.map(step => (
              <li key={step.number} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-5 dark:border-white/10 md:grid-cols-12">
                <span className="text-sm tabular-nums text-ink-200 md:col-span-1">{step.number}</span>
                <h3 className="font-medium text-ink-500 dark:text-mist md:col-span-3">{step.title}</h3>
                <p className="col-start-2 text-sm leading-relaxed text-ink-300 dark:text-ink-200 md:col-span-8 md:col-start-5">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line dark:border-white/10">
        <div className="page py-16 md:py-20">
          <h2 className="section-title max-w-xl">Not all agencies are built the same.</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead>
                <tr className="border-b border-line dark:border-white/10">
                  <th scope="col" className="py-3 pr-6 font-medium text-ink-300 dark:text-ink-200">
                    What you're evaluating
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium text-ink-500 dark:text-mist">
                    Quoxova
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium text-ink-300 dark:text-ink-200">
                    Typical agency
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([label, us, them]) => (
                  <tr key={label} className="border-b border-line dark:border-white/10">
                    <th scope="row" className="py-3 pr-6 font-normal text-ink-400 dark:text-ink-200">
                      {label}
                    </th>
                    <td className="px-4 py-3">
                      <Mark yes={us} />
                    </td>
                    <td className="px-4 py-3">
                      <Mark yes={them} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-line dark:border-white/10">
        <div className="page flex flex-col gap-6 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <div className="max-w-xl">
            <h2 className="section-title">See the work behind the words.</h2>
            <p className="mt-3 text-ink-300 dark:text-ink-200">
              Every case study includes the problem, what we built, and the measurable result.
            </p>
          </div>
          <Link to="/projects" className="btn btn-primary w-full sm:w-auto">
            View case studies
          </Link>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
