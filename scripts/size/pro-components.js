const fs = require('fs')
const path = require('path')
const glob = require('glob')
const ora = require('ora')

const cost = require('./import-cost')

const spliter = `
`

async function size() {
  const spinner = ora('calculating size...')
  spinner.start()
  const size = await cost(
    'size',
    [
      `require('@cjy0208/pro-components')`,
      `require('@cjy0208/pro-form')`,
      `require('@cjy0208/pro-table')`,
      `require('@cjy0208/pro-utils')`,
      `require('@cjy0208/pro-provider')`,
    ].join(spliter),
  )

  spinner.stop()

  fs.writeFileSync(path.resolve(process.cwd(), './public/size.json'), JSON.stringify({ size }), {
    encoding: 'utf-8',
  })
}

module.exports = size
