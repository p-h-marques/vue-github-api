<template>
  <main>
    <UserInfos />
  </main>
</template>

<script>
import UserInfos from '@/components/index/UserInfos.vue';

export default {
  name: 'Main',
  components: {
    UserInfos,
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
}

@media(max-width: 991px){
  main{
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
}

</style>
