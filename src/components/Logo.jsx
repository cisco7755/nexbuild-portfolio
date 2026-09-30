import logo from '../assets/quoxova-logo-horizontal.svg'
import logoDark from '../assets/quoxova-logo-horizontal-dark.svg'

export default function Logo({ className = 'h-10' }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img src={logo} alt="" className="h-full w-auto dark:hidden" />
      <img src={logoDark} alt="" className="hidden h-full w-auto dark:block" />
    </span>
  )
}
