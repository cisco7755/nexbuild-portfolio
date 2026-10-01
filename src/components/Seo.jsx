import { useLayoutEffect } from 'react'

function upsertMeta(attr, key, content) {
  const selector = `meta[${attr}="${key}"]`
  let el = document.head.querySelector(selector)
  if (!content) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href, extra) {
  const selector = extra
    ? `link[rel="${rel}"][${Object.keys(extra)[0]}="${Object.values(extra)[0]}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector(selector)
  if (!href) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (extra) {
      Object.entries(extra).forEach(([name, value]) => el.setAttribute(name, value))
    }
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({ doc }) {
  useLayoutEffect(() => {
    if (!doc) return undefined
    const url = doc.noindex ? '' : doc.url
    document.title = doc.title
    upsertMeta(
      'name',
      'robots',
      doc.noindex
        ? 'noindex, follow'
        : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    )
    upsertMeta('name', 'description', doc.description)
    upsertMeta('name', 'author', 'Quoxova')
    upsertLink('canonical', url)
    upsertLink('alternate', url, { hreflang: 'en' })
    upsertLink('alternate', url, { hreflang: 'x-default' })
    upsertMeta('property', 'og:site_name', 'Quoxova')
    upsertMeta('property', 'og:locale', 'en_NG')
    upsertMeta('property', 'og:type', doc.type || 'website')
    upsertMeta('property', 'og:title', doc.title)
    upsertMeta('property', 'og:description', doc.description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', doc.image)
    upsertMeta('name', 'twitter:card', doc.image ? 'summary_large_image' : 'summary')
    upsertMeta('name', 'twitter:title', doc.title)
    upsertMeta('name', 'twitter:description', doc.description)
    upsertMeta('name', 'twitter:image', doc.image)

    let script = document.getElementById('ld-json')
    if (!script) {
      script = document.createElement('script')
      script.id = 'ld-json'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(doc.jsonLd)
    return undefined
  }, [doc])

  return null
}
