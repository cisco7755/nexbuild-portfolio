import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { notFoundDocument } from '../seo/documents'

export default function NotFound() {
  return (
    <main>
      <Seo doc={notFoundDocument()} />
      <section className="page py-20 md:py-28">
        <p className="eyebrow">404</p>
        <h1 className="page-title mt-3">This page does not exist.</h1>
        <p className="lede mt-4 max-w-xl">The address may be mistyped, or the page may have moved.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn btn-primary">
            Back home
          </Link>
          <Link to="/projects" className="btn btn-secondary">
            View the work
          </Link>
        </div>
      </section>
    </main>
  )
}
