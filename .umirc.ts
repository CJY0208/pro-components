import { defineConfig } from 'dumi'
import path from 'path'

import { version } from './packages/components/package.json'
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin'

export default defineConfig({
  title: 'ProComponents',
  outputPath: './docs-dist',
  mode: 'site',
  history: { type: 'hash' },
  publicPath: './',
  // more config: https://d.umijs.org/config
  sass: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/CJY0208/pro-components',
    },
    { title: `v${version}`, path: 'https://www.npmjs.com/package/@cjy0208/pro-components' },
  ],
  alias: {
    '@root': process.cwd(),
    '@docs': path.resolve(__dirname, './docs'),
    '@dumiTheme': path.resolve(__dirname, './.dumi/theme'),
  },
  nodeModulesTransform: {
    type: 'none',
  },
  extraBabelPlugins: [
    [
      'babel-plugin-jsx-css-modules',
      {
        styleFileReg: [/\.module\.(css|less|scss)$/],
        prefer: 'local',
        helperImportType: 'esm',
      },
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@cjy0208/tools',
        camel2DashComponentName: false,
        libraryDirectory: 'es',
      },
      '@cjy0208/tools',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
  chainWebpack(config) {
    config.plugin('monaco-editor').use(MonacoWebpackPlugin)
  },
  // 使用 mfsu 配置来进行加速，具体参考以下地址
  // https://github.com/umijs/umi/issues/6766
  // mfsu: {},
})
