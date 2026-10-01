import { projects, services } from '../utils/data.js'
import { articles } from '../content/insights.js'

const SITE_NAME = 'Quoxova'

export function siteOrigin() {
  return String(envValue('VITE_SITE_URL') || 'https://www.quoxova.com').replace(/\/$/, '')
}

export function plain(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim()
}

function envValue(name) {
  const fromNode = typeof process !== 'undefined' && process.env ? process.env[name] : ''
  if (typeof import.meta.env === 'undefined') return fromNode || ''
  const fromVite = {
    VITE_SITE_URL: import.meta.env.VITE_SITE_URL,
    VITE_CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL,
    VITE_COMPANY_LOCATION: import.meta.env.VITE_COMPANY_LOCATION,
    VITE_LINKEDIN_URL: import.meta.env.VITE_LINKEDIN_URL,
    VITE_GITHUB_URL: import.meta.env.VITE_GITHUB_URL,
    VITE_TWITTER_URL: import.meta.env.VITE_TWITTER_URL,
  }[name]
  return fromVite || fromNode || ''
}

function pageUrl(path) {
  const origin = siteOrigin()
  if (!path || path === '/') return `${origin}/`
  const encoded = path
    .split('/')
    .map(segment => encodeURIComponent(segment))
    .join('/')
  return `${origin}${encoded}`
}

function organization() {
  const origin = siteOrigin()
  const sameAs = ['VITE_LINKEDIN_URL', 'VITE_GITHUB_URL', 'VITE_TWITTER_URL'].map(envValue).filter(Boolean)
  const email = envValue('VITE_CONTACT_EMAIL')
  const location = envValue('VITE_COMPANY_LOCATION')
  const org = {
    '@type': 'Organization',
    '@id': `${origin}/#organization`,
    name: SITE_NAME,
    url: `${origin}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${origin}/favicon.svg`,
    },
    description:
      'Quoxova designs and builds software that helps businesses launch faster and scale without friction.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },
  }
  if (sameAs.length) org.sameAs = sameAs
  if (email) org.email = email
  if (location) org.location = location
  return org
}

function website() {
  const origin = siteOrigin()
  return {
    '@type': 'WebSite',
    '@id': `${origin}/#website`,
    name: SITE_NAME,
    url: `${origin}/`,
    publisher: { '@id': `${origin}/#organization` },
    inLanguage: 'en',
  }
}

function webPage(doc) {
  const origin = siteOrigin()
  return {
    '@type': doc.pageType || 'WebPage',
    '@id': `${doc.url}#webpage`,
    url: doc.url,
    name: doc.title,
    description: doc.description,
    isPartOf: { '@id': `${origin}/#website` },
    about: { '@id': `${origin}/#organization` },
    inLanguage: 'en',
  }
}

function breadcrumbs(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  }
}

function graph(doc, extra = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [organization(), website(), webPage(doc), ...extra],
  }
}

function document(fields) {
  const path = fields.path || '/'
  const title = fields.title.includes(SITE_NAME) ? fields.title : `${fields.title} — ${SITE_NAME}`
  const doc = {
    path,
    title,
    description: plain(fields.description),
    noindex: Boolean(fields.noindex),
    type: fields.type || 'website',
    pageType: fields.pageType || 'WebPage',
    image: fields.image || '',
    changefreq: fields.changefreq || 'monthly',
    priority: fields.priority || '0.6',
  }
  doc.url = pageUrl(path)
  doc.jsonLd = graph(doc, fields.extra ? fields.extra(doc) : [])
  return doc
}

export function homeDocument() {
  return document({
    path: '/',
    title: 'Quoxova — Software Development Company',
    description:
      'Quoxova designs and builds software that helps businesses launch faster and scale without friction. From healthcare platforms to fintech infrastructure.',
    pageType: 'WebPage',
    changefreq: 'weekly',
    priority: '1.0',
    extra: () => [
      {
        '@type': 'ItemList',
        name: 'Selected work',
        itemListElement: projects
          .filter(project => project.featured)
          .map((project, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: plain(project.title),
            url: pageUrl(`/projects/${project.id}`),
          })),
      },
    ],
  })
}

export function projectsDocument() {
  return document({
    path: '/projects',
    title: 'Projects',
    description: 'Every project includes the problem, what we built, and the measurable outcome.',
    pageType: 'CollectionPage',
    priority: '0.8',
    extra: () => [
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
      ]),
      {
        '@type': 'ItemList',
        name: 'Projects',
        itemListElement: projects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: plain(project.title),
          url: pageUrl(`/projects/${project.id}`),
        })),
      },
    ],
  })
}

export function projectDocument(project) {
  const title = plain(project.title)
  const path = `/projects/${project.id}`
  return document({
    path,
    title,
    description: plain(project.shortDescription),
    type: 'article',
    pageType: 'Article',
    image: project.image || '',
    priority: '0.7',
    extra: doc => [
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: title, path },
      ]),
      {
        '@type': 'Article',
        '@id': `${doc.url}#article`,
        headline: title,
        description: plain(project.shortDescription),
        articleSection: project.industry,
        keywords: Array.isArray(project.tech) ? project.tech.join(', ') : undefined,
        image: project.image || undefined,
        author: { '@id': `${siteOrigin()}/#organization` },
        publisher: { '@id': `${siteOrigin()}/#organization` },
        mainEntityOfPage: { '@id': `${doc.url}#webpage` },
        inLanguage: 'en',
      },
    ],
  })
}

export function servicesDocument() {
  return document({
    path: '/services',
    title: 'Services',
    description:
      'We cover the full stack, from user interfaces to backend infrastructure. Everything is built to be handed off, maintained, and scaled.',
    priority: '0.8',
    extra: () => [
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
      ]),
      {
        '@type': 'ItemList',
        name: 'Services',
        itemListElement: services.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Service',
            name: service.title,
            description: plain(service.description),
            provider: { '@id': `${siteOrigin()}/#organization` },
          },
        })),
      },
    ],
  })
}

export function aboutDocument() {
  return document({
    path: '/about',
    title: 'About',
    description:
      'Quoxova is a Nigerian software development company based in Lagos. We build products that work under real-world conditions for businesses across Africa and globally.',
    pageType: 'AboutPage',
    priority: '0.8',
    extra: () => [
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ]),
    ],
  })
}

export function contactDocument() {
  return document({
    path: '/contact',
    title: 'Contact',
    description:
      "Tell us about your project. We'll respond within one business day with questions, a rough scope, or a meeting request.",
    pageType: 'ContactPage',
    priority: '0.8',
    extra: () => [
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]),
    ],
  })
}

export function insightsDocument() {
  return document({
    path: '/insights',
    title: 'Insights',
    description: 'Practical writing on software engineering, client work, and building products that last.',
    pageType: 'CollectionPage',
    priority: '0.8',
    extra: () => [
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Insights', path: '/insights' },
      ]),
      {
        '@type': 'ItemList',
        name: 'Insights',
        itemListElement: articles.map((article, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: article.title,
          url: pageUrl(`/insights/${article.slug}`),
        })),
      },
    ],
  })
}

export function insightDocument(article) {
  const path = `/insights/${article.slug}`
  return document({
    path,
    title: article.title,
    description: article.excerpt,
    type: 'article',
    pageType: 'Article',
    priority: '0.7',
    extra: doc => [
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Insights', path: '/insights' },
        { name: article.title, path },
      ]),
      {
        '@type': 'Article',
        '@id': `${doc.url}#article`,
        headline: article.title,
        description: article.excerpt,
        articleSection: article.tag,
        author: { '@id': `${siteOrigin()}/#organization` },
        publisher: { '@id': `${siteOrigin()}/#organization` },
        mainEntityOfPage: { '@id': `${doc.url}#webpage` },
        inLanguage: 'en',
      },
    ],
  })
}

export function notFoundDocument() {
  const doc = document({
    path: '/404',
    title: 'Page not found',
    description: 'This page does not exist on Quoxova.',
    noindex: true,
    priority: '0',
  })
  doc.url = ''
  doc.jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: doc.title,
    description: doc.description,
  }
  return doc
}

export function allDocuments() {
  return [
    homeDocument(),
    projectsDocument(),
    ...projects.map(projectDocument),
    servicesDocument(),
    aboutDocument(),
    contactDocument(),
    insightsDocument(),
    ...articles.map(insightDocument),
  ]
}

export function sitemapXml() {
  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = allDocuments()
    .map(doc => {
      return `  <url><loc>${escapeXml(doc.url)}</loc><lastmod>${lastmod}</lastmod><changefreq>${doc.changefreq}</changefreq><priority>${doc.priority}</priority></url>`
    })
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

export function robotsTxt() {
  return `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${siteOrigin()}/sitemap.xml\n`
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function renderHead(doc) {
  const title = escapeHtml(doc.title)
  const description = escapeHtml(doc.description)
  const robots = doc.noindex
    ? 'noindex, follow'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
  const url = doc.noindex ? '' : escapeHtml(doc.url)
  const image = doc.image ? escapeHtml(doc.image) : ''
  const json = JSON.stringify(doc.jsonLd).replace(/</g, '\\u003c')
  const imageTags = image
    ? `<meta property="og:image" content="${image}" />\n    <meta name="twitter:image" content="${image}" />\n    `
    : ''
  const canonicalTags = url
    ? `<link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="en" href="${url}" />
    <link rel="alternate" hreflang="x-default" href="${url}" />
    <meta property="og:url" content="${url}" />`
    : ''
  return `<!--seo:start-->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${robots}" />
    <meta name="author" content="Quoxova" />
    ${canonicalTags}
    <meta property="og:site_name" content="Quoxova" />
    <meta property="og:locale" content="en_NG" />
    <meta property="og:type" content="${escapeHtml(doc.type)}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    ${imageTags}<meta name="twitter:card" content="${image ? 'summary_large_image' : 'summary'}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <script type="application/ld+json" id="ld-json">${json}</script>
    <!--seo:end-->`
}

export function injectHead(html, doc) {
  const block = renderHead(doc)
  if (html.includes('<!--seo:start-->') && html.includes('<!--seo:end-->')) {
    return html.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, block)
  }
  return html.replace('</head>', `    ${block}\n  </head>`)
}
