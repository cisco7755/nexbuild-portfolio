import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Seo from '../components/Seo'
import { contactDocument } from '../seo/documents'

const projectTypes = [
  'Web Application',
  'Mobile App',
  'Backend System',
  'UI/UX Design',
  'Full Product Build',
  'Other',
]

const budgets = ['Under $25K', '$25K – $75K', '$75K – $150K', '$150K+', 'Not sure yet']

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm text-ink-400 dark:text-ink-200">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-700 dark:text-red-300" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

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
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) next.email = 'A valid email is required'
    if (!form.message.trim()) next.message = 'Tell us about the project'
    return next
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const next = validate()
    if (Object.keys(next).length > 0) {
      setErrors(next)
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

  const handleChange = event => {
    const { name, value } = event.target
    setForm(current => ({ ...current, [name]: value }))
    if (errors[name]) setErrors(current => ({ ...current, [name]: undefined }))
  }

  const inputClass = name => `field ${errors[name] ? 'field-error' : ''}`

  return (
    <main>
      <Seo doc={contactDocument()} />
      <section className="section-padding">
        <div className="page grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Contact</p>
            <h1 className="page-title mt-3">Let's build something that works.</h1>
            <p className="lede mt-4">
              Tell us about your project. We'll respond within one business day with questions, a rough scope, or a meeting request.
            </p>

            <dl className="mt-10 space-y-6 border-t border-line pt-6 dark:border-white/10">
              {import.meta.env.VITE_CONTACT_EMAIL && (
                <div>
                  <dt className="text-sm text-ink-200">Email</dt>
                  <dd className="mt-1 text-ink-500 dark:text-mist">
                    <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} className="underline-offset-4 hover:underline">
                      {import.meta.env.VITE_CONTACT_EMAIL}
                    </a>
                  </dd>
                  <dd className="text-sm text-ink-300 dark:text-ink-200">We respond within 1 business day</dd>
                </div>
              )}
              {import.meta.env.VITE_COMPANY_LOCATION && (
                <div>
                  <dt className="text-sm text-ink-200">Location</dt>
                  <dd className="mt-1 text-ink-500 dark:text-mist">
                    {import.meta.env.VITE_COMPANY_LOCATION}
                  </dd>
                  <dd className="text-sm text-ink-300 dark:text-ink-200">Clients across Africa and elsewhere</dd>
                </div>
              )}
              <div>
                <dt className="text-sm text-ink-200">Availability</dt>
                <dd className="mt-1 text-ink-500 dark:text-mist">Currently accepting projects</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {submitted ? (
              <div className="border border-line px-6 py-10 dark:border-white/10" role="status">
                <CheckCircle2 size={20} className="text-brand-600 dark:text-brand-300" aria-hidden="true" />
                <h2 className="mt-4 font-heading text-2xl font-semibold text-ink-500 dark:text-mist">
                  Message received
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-300 dark:text-ink-200">
                  Thanks for writing. We'll review the details and reply within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className={inputClass('name')}
                      aria-invalid={errors.name ? 'true' : undefined}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      required
                    />
                  </Field>
                  <Field id="company" label="Company">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      className="field"
                    />
                  </Field>
                </div>

                <Field id="email" label="Email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className={inputClass('email')}
                    aria-invalid={errors.email ? 'true' : undefined}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    required
                  />
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="projectType" label="Project type">
                    <select
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="field"
                    >
                      <option value="">Select</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field id="budget" label="Budget range">
                    <select id="budget" name="budget" value={form.budget} onChange={handleChange} className="field">
                      <option value="">Select</option>
                      {budgets.map(range => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field id="message" label="Project details" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="The problem, what you've already tried, and what success looks like."
                    className={`${inputClass('message')} resize-y`}
                    aria-invalid={errors.message ? 'true' : undefined}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    required
                  />
                </Field>

                {serverError && (
                  <p className="text-sm text-red-700 dark:text-red-300" role="alert">
                    {serverError}
                  </p>
                )}

                <button type="submit" disabled={loading} className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
                  {loading ? 'Sending…' : 'Send message'}
                </button>
                <p className="text-sm text-ink-200">We reply within one business day.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
