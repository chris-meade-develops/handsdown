const https = require('https')
const fs = require('fs')
const path = require('path')

const sitemapUrl =
  'https://handsdown-postgres-cms-production.up.railway.app/api/sitemap/index.xml'
const sitemapPath = path.join(__dirname, '../public/sitemap.xml')

https.get(sitemapUrl, (res) => {
  const stream = fs.createWriteStream(sitemapPath)

  res.pipe(stream)

  stream.on('finish', () => {
    stream.close()
    console.log('Sitemap fetched')
  })
})
