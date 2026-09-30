import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'

function StatValue({ raw }) {
  const prefix = raw.match(/^[^0-9]*/)?.[0] ?? ''
  const suffix = raw.match(/[^0-9.]+$/)?.[0] ?? ''
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const count = useCountUp(raw, 1200, inView)

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function AnimatedStat({ stat }) {
  return (
    <div>
      <div className="font-heading text-3xl font-semibold tracking-tight text-ink-500 dark:text-mist">
        <StatValue raw={stat.value} />
      </div>
      <div className="mt-1 text-sm text-ink-300 dark:text-ink-200">{stat.label}</div>
    </div>
  )
}
