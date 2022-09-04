const { argv } = require('yargs')
const ora = require('ora')
const { clearSizeCache } = require('@cjy0208/import-cost/dist/packageInfo')

const size = require('./pro-components')

if (argv.fresh) {
  const spinner = ora('clearing size cache...')
  spinner.start()
  clearSizeCache()
  spinner.stop()
  process.exit(0) // fresh 时仅清空缓存，不进行计算
}

const { target = 'pro-components' } = argv

console.log(`calculating ${target}'s size`)

const calculate = size

calculate()
