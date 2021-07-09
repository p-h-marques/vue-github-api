<template>
  <section class="userinfos">
    <div class="imguser">
      <img :src=userInfos.avatar_url
        alt="Carregando...">

    </div>
    <div class="infouser">
      <h2>{{userInfos.name}}</h2>
      <div class="repocount">
        <img src="../../assets/images/repos.svg" alt="Repositórios">
        <span>{{userInfos.public_repos}} repositórios</span>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import * as getters from '../../store/getters_types';

export default {
  computed: {
    ...mapGetters([
      getters.GET_USER,
    ]),
  },
};
</script>

<style scoped>
section.userinfos{
  display: flex;
  align-items: center;
  gap: 20px;
}

section.userinfos div.imguser{
  width: 200px;
  height: 200px;
  background-color: var(--gray-medium);
  display: flex;
  justify-content: center;
  align-items: center;
}

section.userinfos div.imguser img{
  width: 150px;
  height: 150px;
}

div.infouser{
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: flex-start;
}

div.infouser h2{
  font-weight: 600;
}

div.infouser div.repocount{
  display: flex;
  align-items: center;
  gap: 8px;
}

@media(max-width: 767px){
  section.userinfos div.imguser{
    width: 150px;
    height: 150px;
  }

  section.userinfos div.imguser img{
    width: 100px;
    height: 100px;
  }
}

@media(max-width: 575px){
    section.userinfos{
      flex-direction: column;
      align-items: flex-start;
    }
}
</style>
