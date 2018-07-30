import * as types from './mutation_types';

export default {
  state: {
    x: 10,
    y: 20,
    z: 30,
  },
  getters: {
    total: state => {
      return x + y + z;
    },
  },
  mutations: {
    [types.UPDATE_X] (state, x) {
      state.x = x;
    },
    [types.UPDATE_Y] (state, y) {
      state.y = y;
    },
    [types.UPDATE_Z] (state, z) {
      state.z = z;
    },
  },
  actions: {
    updateX ({ commit }, x) {
      setTimeout(() => {
        commit(types.UPDATE_X, x);
      }, 100);
    },
    updateY ({ commit }, y) {
      commit(types.UPDATE_Y, y);
    },
    updateZ ({ commit }, z) {
      commit(types.UPDATE_Z, z);
    },
  }
}
