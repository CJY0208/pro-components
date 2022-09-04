const fileSize = require('filesize')
const { importCost, TYPESCRIPT, cleanup } = require('@cjy0208/import-cost')

function cost(fileName, fileContents) {
  return new Promise(resolve => {
    const result = []
    const emitter = importCost(fileName, fileContents, TYPESCRIPT, { concurrent: false, maxCallTime: Infinity })

    emitter.on('calculated', packageInfo => {
      const size = fileSize(packageInfo.size, { unix: true })
      const gzip = fileSize(packageInfo.gzip, { unix: true })

      // console.log(`${packageInfo.name}: ${size} (gzipped: ${gzip})`)

      result.push({
        ...packageInfo,
        name: packageInfo.name,
        rawSize: packageInfo.size,
        rawGzip: packageInfo.gzip,
        size,
        gzip,
        label: `${size} (gzipped: ${gzip})`,
      })
    })

    emitter.on('done', packages => {
      emitter.removeAllListeners()
      cleanup()
      setTimeout(() => {
        resolve(result.sort((prev, next) => next.rawGzip - prev.rawGzip))
      })
    })
  })
}

module.exports = cost
