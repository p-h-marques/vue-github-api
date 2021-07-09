<template>
  <main>
    <UserInfos />
    <ReposList />
  </main>
</template>

<script>
import UserInfos from '@/components/index/UserInfos.vue';
import ReposList from '@/components/index/ReposList.vue';

import getInfos from '@/functions/get_infos';
import * as mutations from '../../store/mutation_types';

export default {
  name: 'Main',
  components: {
    UserInfos,
    ReposList,
  },
  async mounted() {
    const infos = await getInfos();

    this.$store.commit({
      type: mutations.SET_USER,
      payload: infos.user,
    });

    this.$store.commit({
      type: mutations.SET_REPOS,
      payload: infos.repos,
    });

    this.$store.commit({
      type: mutations.SET_PAGINATION,
      payload: infos.pagination,
    });

    console.log(this.$store.state);
  },
};
</script>

<style scoped>
main{
  max-width: 1320px;
  width: 100%;
  padding: 50px var(--padding-default) 70px var(--padding-default);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  align-items: flex-start;
}

@media(max-width: 991px){
  main{
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
}

</style>
