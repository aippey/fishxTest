import {
  FdxPlugin,
  IESupportPlugin,
  DvaPlugin,
  LocalePlugin,
} from '@fishx/plugins';

const target = 'https://fish.iwhalecloud.com/mock/2545';

const config = {
  title: 'fishx',
  plugins: [
    // new FdxPlugin(),
    new IESupportPlugin(),
    new DvaPlugin(),
    new LocalePlugin({ dynamicIntl: true }), // 是否支持动态远程加载,默认为false
  ],
  proxy: {
    '/api': {
      target,
      changeOrigin: true,
      // pathRewrite: { '^/api': '' },
    },
  },
  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    '../moment': 'window.moment',
    'moment': 'window.moment',
    'react-redux': 'window.ReactRedux',
    '@whalecloud/fdx': 'window.fdx',
  },
  router: {
    history: 'hash',
  },
};

export default config;
