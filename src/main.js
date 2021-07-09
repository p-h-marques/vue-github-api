import { createApp } from 'vue';
import { createStore } from 'vuex';

import getInfos from '@/functions/get_infos';
import * as actions from './store/actions_types';
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
      pagination: {
        links: {
          first: null,
          prev: null,
          next: null,
          last: null,
        },
        pages: {
          current: 1,
          total: 1,
        },
      },
      loading: true,
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

    [getters.GET_LOADING](state) {
      return state.loading;
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
      state.pagination = {
        links: {
          first: null,
          prev: null,
          next: null,
          last: null,
          ...data.payload.links,
        },
        pages: {
          ...state.pagination.pages, ...data.payload.pages,
        },
      };
    },

    [mutations.SET_LOADING](state, data) {
      state.loading = data.payload;
    },
  },

  actions: {
    async [actions.SET_FIRST_PAGE](context) {
      context.commit({
        type: mutations.SET_LOADING,
        payload: true,
      });

      const page = 1;
      const infos = await getInfos(page);

      context.commit({
        type: mutations.SET_USER,
        payload: infos.user,
      });

      context.commit({
        type: mutations.SET_REPOS,
        payload: infos.repos,
      });

      context.commit({
        type: mutations.SET_PAGINATION,
        payload: infos.pagination,
      });

      context.commit({
        type: mutations.SET_LOADING,
        payload: false,
      });
    },

    async [actions.SET_PREV_PAGE](context) {
      context.commit({
        type: mutations.SET_LOADING,
        payload: true,
      });

      const page = context.state.pagination.pages.current - 1;
      const infos = await getInfos(page);

      context.commit({
        type: mutations.SET_USER,
        payload: infos.user,
      });

      context.commit({
        type: mutations.SET_REPOS,
        payload: infos.repos,
      });

      context.commit({
        type: mutations.SET_PAGINATION,
        payload: infos.pagination,
      });

      context.commit({
        type: mutations.SET_LOADING,
        payload: false,
      });
    },

    async [actions.SET_NEXT_PAGE](context) {
      context.commit({
        type: mutations.SET_LOADING,
        payload: true,
      });

      const page = context.state.pagination.pages.current + 1;
      const infos = await getInfos(page);

      context.commit({
        type: mutations.SET_USER,
        payload: infos.user,
      });

      context.commit({
        type: mutations.SET_REPOS,
        payload: infos.repos,
      });

      context.commit({
        type: mutations.SET_PAGINATION,
        payload: infos.pagination,
      });

      context.commit({
        type: mutations.SET_LOADING,
        payload: false,
      });
    },

    async [actions.SET_LAST_PAGE](context) {
      context.commit({
        type: mutations.SET_LOADING,
        payload: true,
      });

      const page = context.state.pagination.pages.total;
      const infos = await getInfos(page);

      context.commit({
        type: mutations.SET_USER,
        payload: infos.user,
      });

      context.commit({
        type: mutations.SET_REPOS,
        payload: infos.repos,
      });

      context.commit({
        type: mutations.SET_PAGINATION,
        payload: infos.pagination,
      });

      context.commit({
        type: mutations.SET_LOADING,
        payload: false,
      });
    },
  },
});

const app = createApp(App).use(store);

app.mount('#app');
