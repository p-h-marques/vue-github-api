<template>
  <section class="lista">
    <Pagination />

    <RepoCard v-for="n in 10" v-bind:key="n"/>

    <Pagination />
  </section>
</template>

<script>
import Pagination from '@/components/layout/Pagination.vue';
import RepoCard from '@/components/index/RepoCard.vue';

export default {
  name: 'ReposList',
  components: {
    Pagination,
    RepoCard,
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
