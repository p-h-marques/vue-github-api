<template>
  <div class="loader"
    v-bind:style="userLoading ? 'display: flex' : 'display: none'"
  >
    <img src="../../assets/images/loading.svg" alt="Carregando...">
    <span>{{userLoading ? 'oi' : 'tchau'}}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import * as getters from '../../store/getters_types';

export default {
  computed: {
    ...mapGetters([
      getters.GET_LOADING,
    ]),
  },
};
</script>

<style scoped>
div.loader{
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

div.loader::after{
  content: "";
  background: var(--gray-background);
  opacity: 0.9;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
}

div.loader img{
  z-index: 9999;
}
</style>
