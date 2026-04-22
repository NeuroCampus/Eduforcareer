const fs = require('fs')
const path = require('path')

const distClient = path.join(__dirname, '..', 'dist', 'client')
const assetsDir = path.join(distClient, 'assets')

if (!fs.existsSync(distClient) || !fs.existsSync(assetsDir)) {
  console.error('dist/client or assets directory not found. Run build first.')
  process.exit(1)
}

const files = fs.readdirSync(assetsDir)
const jsFile = files.find((f) => /^index-.*\.js$/.test(f))
const cssFile = files.find((f) => /^styles-.*\.css$/.test(f))

if (!jsFile) {
  console.error('Could not find index-*.js in dist/client/assets')
  process.exit(1)
}

const cssLink = cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}">` : ''
const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Eduforcareer</title>
    ${cssLink}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${jsFile}"></script>
  </body>
</html>`

fs.writeFileSync(path.join(distClient, 'index.html'), html)
console.log('Generated dist/client/index.html')
