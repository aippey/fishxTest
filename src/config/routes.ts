export default [
  {
    path: '/',
    component: '../layouts',
    routes: [
      {
        path: '/',
        exact: true,
        component: './index',
      },
      {
        path: '/Button',
        component: './Button/index',
        exact: true,
      },
      {
        path: '/login',
        component: './login',
        exact: true,
      },
      {
        path: '/Table',
        exact: true,
        component: './Table/index',
      },
      {
        path:'/Test',
        exact:true,
        component:'./Test/index'
      }
    ],
  },
];
