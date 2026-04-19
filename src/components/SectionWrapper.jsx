export default function SectionWrapper({ children, className = '', id }) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  )
}
