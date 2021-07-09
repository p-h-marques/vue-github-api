import { createApp } from 'vue';
import { createStore } from 'vuex';

import * as mutations from './store/mutation_types';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      user: {},
      repos: [],
      pagination: {},
    };
  },

  getters: {
    userInfos(state) {
      return state.user;
    },
    reposInfos(state) {
      return state.repos;
    },
    paginationInfos(state) {
      return state.pagination;
    },
  },

  mutations: {
    [mutations.SET_USER](state, data) {
      state.user = { ...data.payload };
    },
    [mutations.SET_REPOS](state, data) {
      state.repos = [...data.payload];
    },
    [mutations.SET_PAGINATION](state, data) {
      state.pagination = { ...data.payload };
    },
  },
});

const app = createApp(App).use(store);

app.mount('#app');
