import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCountUp } from '../hooks/useCountUp'

function StatValue({ raw }) {
  const prefix = raw.match(/^[^0-9]*/)?.[0] ?? ''
  const suffix = raw.match(/[^0-9.]+$/)?.[0] ?? ''
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const count = useCountUp(raw, 1800, inView)

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function AnimatedStat({ stat, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
    >
      <div className="font-heading text-4xl font-black text-slate-900 dark:text-white mb-1">
        <StatValue raw={stat.value} />
      </div>
      <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
        {stat.label}
      </div>
    </motion.div>
  )
}
