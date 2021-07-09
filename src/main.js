import { createApp } from 'vue';
import { createStore } from 'vuex';

import * as mutations from './store/mutation_types';
import * as getters from './store/getters_types';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      user: {
        avatar_url: 'http://jorgecardoso.eu/static/assets/images/ajax-loader-segcolor.svg',
        name: '-',
        public_repos: 0,
      },
      repos: [],
      pagination: {},
    };
  },

  getters: {
    [getters.GET_USER](state) {
      return state.user;
    },
    [getters.GET_REPOS](state) {
      return state.repos;
    },
    [getters.GET_PAGINATION](state) {
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
