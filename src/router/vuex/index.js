export default [
  {
    path: '',
    name: 'vuex',
    component: () => import('@/views/main/vuex/introduction'),
  },
  {
    path: 'usage',
    name: 'vuex-usage',
    component: () => import('@/views/main/vuex/usage'),
  },
];