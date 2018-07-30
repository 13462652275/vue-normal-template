export default [
  {
    path: '',
    name: '',
    component: () => import('@/views/main/cookie/introduction'),
  },
  {
    path: 'usage',
    name: 'cookie-usage',
    component: () => import('@/views/main/cookie/usage'),
  },
];