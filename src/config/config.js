import menuConfig from './menu';

const config = {
  ...menuConfig,
  logger: {
    level: 'debug',
  },
  // rest: {
  //   endpoint: 'https://fish.iwhalecloud.com/mock/2545/api',
  // },
};

export default config;
