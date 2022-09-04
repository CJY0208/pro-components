const rimraf = require('rimraf')
const fs = require('fs-extra')

try {
  fs.copySync('./docs-dist', './docs', {
    overwrite: true,
  })
} catch (err) {
  console.error(err)
}

rimraf.sync('./docs-dist')
