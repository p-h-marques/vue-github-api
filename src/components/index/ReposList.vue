<template>
  <section class="lista">
    <Pagination />

    <RepoCard v-for="repo in userRepos" v-bind:key="repo.id" v-bind:repo="repo"/>

    <Pagination />
  </section>
</template>

<script>
import Pagination from '@/components/layout/Pagination.vue';
import RepoCard from '@/components/index/RepoCard.vue';

import { mapGetters } from 'vuex';
import * as getters from '../../store/getters_types';

export default {
  name: 'ReposList',
  components: {
    Pagination,
    RepoCard,
  },
  computed: {
    ...mapGetters([
      getters.GET_REPOS,
    ]),
  },
};
</script>

<style scoped>
section.lista{
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-left: var(--border-default);
  padding-top: unset;
  padding-left: 16px;
}

@media(max-width: 991px){
  section.lista{
    border-left: unset;
    border-top: var(--border-default);
    padding-top: 16px;
    padding-left: unset;
  }
}
</style>
