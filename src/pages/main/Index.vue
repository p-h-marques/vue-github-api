<template>
  <Header />
  <Main />
  <Footer />
  <Loader />
</template>

<!-- <h1>UserInfo</h1>
<h1>ReposList</h1>
<h1>Footer</h1> -->

<script>
import Header from '@/components/layout/Header.vue';
import Main from '@/components/index/Main.vue';
import Footer from '@/components/layout/Footer.vue';
import Loader from '@/components/layout/Loader.vue';

export default {
  name: 'Index',
  components: {
    Header,
    Main,
    Footer,
    Loader,
  },
};
</script>
