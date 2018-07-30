export default [
  {
    path: '',
    name: 'assist',
    component: () => import('@/views/main/assist/introduction'),
  },
  {
    path: 'usage',
    name: 'assist-usage',
    component: () => import('@/views/main/assist/usage'),
  },
];