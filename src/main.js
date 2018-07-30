// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

// 路由配置
import router from './router';

// vuex状态库
import store from './store';

// 开发模式模拟数据
import mock from './mock';

//定义原型方法
import './utils/prototype.js';
process.env.NODE_ENV === 'development' ? mock.start() : null;

//样式
import './styles';


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  store,
  components: { App },
  template: '<App/>',
});