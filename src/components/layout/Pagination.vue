<template>
  <div class="pagination">
    <div class="pages">
      Página 1 de 27
    </div>
    <div class="controls">
      <img src="../../assets/images/first.svg" alt="Primeira página">
      <img src="../../assets/images/prev.svg" alt="Página anterior">
      <img src="../../assets/images/next.svg" alt="Próxima página">
      <img src="../../assets/images/last.svg" alt="Última página">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as getters from '../../store/getters_types';

export default {
  computed: {
    ...mapGetters([
      getters.GET_PAGINATION,
    ]),
  },
  watch: {
    userPagination(teste) { console.log(teste); },
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
