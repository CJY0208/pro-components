const child = require('child_process')
// const { getCurrentBranch } = require('./helpers')
const packageInfo = require('../package.json')

// const currentBranch = getCurrentBranch()

// if (currentBranch !== 'master') {
//   console.log('该命令仅支持从 master 合入 docs-site 分支')
//   process.exit(0)
// }

const command = [`npm unpublish ${packageInfo.name}@${packageInfo.version}`, `npm publish`].join(' && ')

// const command = `git checkout docs-site && git pull && git merge ${currentBranch} && git push && git checkout ${currentBranch} && git pull && git push`

console.log(command)

const childProcess = child.exec(command)
childProcess.stdout.pipe(process.stdout)
childProcess.stderr.pipe(process.stderr)
