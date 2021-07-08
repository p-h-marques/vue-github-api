<template>
  <Header />
  <Main />
</template>

<!-- <h1>UserInfo</h1>
<h1>ReposList</h1>
<h1>Footer</h1> -->

<script>
import Header from '@/components/layout/Header.vue';
import Main from '@/components/index/Main.vue';

export default {
  name: 'Index',
  components: {
    Header,
    Main,
  },
};
</script>
