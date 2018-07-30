import Vue from 'vue';
import Vuex from 'vuex';

//Module
import address from './modules/address';
import app from './modules/app';

const isDev = process.env !== 'production';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    address,
    app,
  },
  strict: isDev,
});

export default store;