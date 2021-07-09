<template>
  <div class="lista">
    <Pagination />

    <div class="repocard" v-for="n in 10" v-bind:key="n">
      <div>
        Card de repositório
      </div>
    </div>

    <Pagination />
  </div>
</template>

<script>
import Pagination from '@/components/layout/Pagination.vue';

export default {
  name: 'ReposList',
  components: {
    Pagination,
  },
};
</script>

<style scoped>
div.lista{
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-left: var(--border-default);
  padding-top: unset;
  padding-left: 16px;
}

@media(max-width: 991px){
  div.lista{
    border-left: unset;
    border-top: var(--border-default);
    padding-top: 16px;
    padding-left: unset;
  }
}
</style>
