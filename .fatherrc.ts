export default {
  pkgs: ['provider', 'utils', 'form', 'table', 'components'],
  cjs: {
    type: 'babel',
    minify: true,
    lazy: true,
  },
  esm: {
    type: 'babel',
  },
  runtimeHelpers: true,
  extraBabelPlugins: [
    'react-node-key/babel',
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
        style: false,
      },
      'antd',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@ant-design/icons',
        camel2DashComponentName: false,
        libraryDirectory: '',
      },
      '@ant-design/icons',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: 'ahooks',
        libraryDirectory: 'es',
        camel2DashComponentName: false,
      },
      'ahooks',
    ],
  ],
  extraExternals: [
    'react',
    'react-dom',
    /^@cjy0208\/tools/,
    /^@ant-design\/icons/,
    'hoist-non-react-statics',
    'antd',
    /^@babel\/runtime/,
  ],
}
