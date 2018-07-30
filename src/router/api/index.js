export default [
  {
    path: '',
    name: 'api',
    component: () => import('@/views/main/api/introduction'),
  },
  {
    path: 'usage',
    name: 'api-usage',
    component: () => import('@/views/main/api/usage'),
  },
];