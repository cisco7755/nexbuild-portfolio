import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react'

const projectTypes = [
  'Web Application',
  'Mobile App',
  'Backend System',
  'UI/UX Design',
  'Full Product Build',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email is required'
    if (!form.message.trim()) errs.message = 'Tell us about your project'
    return errs
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setSubmitted(true)
    } catch (err) {
      setServerError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 block">
                Get in Touch
              </span>
              <h1 className="font-heading text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                Let's build something that works.
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10">
                Tell us about your project. We'll respond within one business day with questions, a
                rough scope estimate, or a meeting request — whichever makes sense for where you are.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'hello@nexbuild.io',
                    sub: 'We respond within 1 business day',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'Remote-first',
                    sub: 'Clients across North America & Europe',
                  },
                  {
                    icon: Clock,
                    label: 'Availability',
                    value: 'Currently accepting projects',
                    sub: 'Next intake: Q2 2026',
                  },
                ].map(item => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-slate-900 dark:text-white font-medium text-sm">{item.value}</p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">{item.sub}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {submitted ? (
                <div className="p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                  <div className="w-16 h-16 rounded-full bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={28} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    Message received
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Thanks for reaching out. We'll review your project details and get back to you
                    within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Alex Johnson"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border ${
                          errors.name
                            ? 'border-red-400 dark:border-red-600'
                            : 'border-slate-200 dark:border-slate-700'
                        } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border ${
                        errors.email
                          ? 'border-red-400 dark:border-red-600'
                          : 'border-slate-200 dark:border-slate-700'
                      } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors appearance-none"
                      >
                        <option value="">Select...</option>
                        {projectTypes.map(t => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors appearance-none"
                      >
                        <option value="">Select...</option>
                        <option>Under $25K</option>
                        <option>$25K – $75K</option>
                        <option>$75K – $150K</option>
                        <option>$150K+</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe the problem you're trying to solve, what you've tried, and what success looks like..."
                      className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border ${
                        errors.message
                          ? 'border-red-400 dark:border-red-600'
                          : 'border-slate-200 dark:border-slate-700'
                      } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {serverError && (
                    <p className="text-sm text-red-500 text-center py-2 px-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900">
                      {serverError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-500/25 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>Send Message <ArrowRight size={16} /></>
                    )}
                  </button>

                  <p className="text-xs text-center text-slate-400 dark:text-slate-500">
                    We respond within 1 business day. No spam, no sales pressure.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
