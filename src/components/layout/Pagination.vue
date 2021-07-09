<template>
  <div class="pagination">
    <div class="pages">
      Página {{userPagination.pages.current}} de {{userPagination.pages.total}}
    </div>
    <div class="controls">
      <img src="../../assets/images/first.svg" alt="Primeira página"
        v-if="userPagination.links.first !== null"
        @click="setFirstPage">

      <img src="../../assets/images/prev.svg" alt="Página anterior"
        v-if="userPagination.links.prev !== null"
        @click="setPrevPage">

      <img src="../../assets/images/next.svg" alt="Próxima página"
        v-if="userPagination.links.next !== null"
        @click="setNextPage">

      <img src="../../assets/images/last.svg" alt="Última página"
        v-if="userPagination.links.last !== null"
        @click="setLastPage">

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import * as getters from '../../store/getters_types';
import * as actions from '../../store/actions_types';

export default {
  computed: {
    ...mapGetters([
      getters.GET_PAGINATION,
    ]),
  },
  methods: {
    ...mapActions([
      actions.SET_FIRST_PAGE,
      actions.SET_PREV_PAGE,
      actions.SET_NEXT_PAGE,
      actions.SET_LAST_PAGE,
    ]),
  },
};
</script>

<style scoped>
div.pagination{
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  height: 20px;
}

div.pagination div.pages{
  border-right: var(--border-default);
  padding-right: 16px;
  font-size: 14px;
  line-height: 20px;
}

div.pagination div.controls{
  padding-left: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
}

div.pagination div.controls img{
  width: 16px;
  height: 14px;
  cursor: pointer;
}

@media(max-width: 991px){
  div.pagination{
    justify-content: center;
  }
}
</style>
