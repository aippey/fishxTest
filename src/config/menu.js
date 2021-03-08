// 菜单配置

const asideMenuConfig = [
  {
    path: '/',
    icon: 'dashboard',
    name: 'Home',
  },
  {
    path: '/Button',
    icon: 'read',
    name: 'Button',
  },
  {
    path: '/Table',
    icon: 'wallet',
    name: 'Table',
  },
  {
    icon: 'apple',
    name: 'Apple',
    children: [
      {
        path: '/car',
        icon: 'car',
        name: 'Car',
      },
    ],
  },
  {
    path: '/Test',
    icon: 'wallet',
    name: '测试',
  },
];

const config = {
  asideMenuConfig,
};

export default config;
