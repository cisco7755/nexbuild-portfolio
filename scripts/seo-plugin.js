import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

async function loadSeo() {
  return import(pathToFileURL(path.join(process.cwd(), 'src/seo/documents.js')).href)
}

export function quoxovaSeo() {
  return {
    name: 'quoxova-seo',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0]
        if (url !== '/sitemap.xml' && url !== '/robots.txt') return next()
        try {
          const seo = await loadSeo()
          if (url === '/sitemap.xml') {
            res.setHeader('Content-Type', 'application/xml; charset=utf-8')
            res.end(seo.sitemapXml())
            return
          }
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end(seo.robotsTxt())
        } catch (error) {
          next(error)
        }
      })
    },
    async closeBundle() {
      const seo = await loadSeo()
      const outDir = path.resolve(process.cwd(), 'dist')
      const templatePath = path.join(outDir, 'index.html')
      if (!fs.existsSync(templatePath)) return
      const template = fs.readFileSync(templatePath, 'utf8')

      for (const doc of seo.allDocuments()) {
        const html = seo.injectHead(template, doc)
        const file =
          doc.path === '/'
            ? templatePath
            : path.join(outDir, ...doc.path.split('/').filter(Boolean), 'index.html')
        fs.mkdirSync(path.dirname(file), { recursive: true })
        fs.writeFileSync(file, html)
      }

      fs.writeFileSync(path.join(outDir, '404.html'), seo.injectHead(template, seo.notFoundDocument()))
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), seo.sitemapXml())
      fs.writeFileSync(path.join(outDir, 'robots.txt'), seo.robotsTxt())
    },
  }
}
