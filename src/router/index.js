import Vue from 'vue';
import Router from 'vue-router';

// main 布局组件
const Main = () => import('@/views/main');
// import Main from '@/views/main';

//子路由
import api from './api';
import assist from './assist';
import vuex from './vuex';
import cookie from './cookie';

Vue.use(Router);

//导出配置
export const routes = [
  {
    path: '/',
    redirect: '/api'
  },
  {
    path: '/api',
    component: Main,
    children: api,
  },
  {
    path: '/assist',
    component: Main,
    children: assist,
  },
  {
    path: '/vuex',
    component: Main,
    children: vuex,
  },
  {
    path: '/cookie',
    component: Main,
    children: cookie,
  },
];

//启动路由
const router = new Router({
  // mode: 'history',
  routes,
});

export default router;

//全局导航守卫
router.beforeEach((to, from, next) => {
  //...
  next();
});