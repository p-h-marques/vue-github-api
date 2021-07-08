<template>
  <Main />
</template>

<script>
import Main from '@/pages/main/Main.vue';

export default {
  name: 'App',
  components: {
    Main,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "SegoeUI";
  src: local("SegoeUI"), url(./assets/fonts/SegoeUi-Regular.ttf) format("truetype");
}

* {
  text-decoration: none;
  box-sizing: border-box;
  line-height: 1rem;
  padding: 0px;
  margin: 0px;
}

body {
  --gray-light: #ADBAC7;
  --gray-highlight: #50555A;
  --gray-medium: #2D333B;
  --gray-background: #22272E;
  --blue: #519AF4;

  --shadow-default: 0px 2px 4px var(--gray-background);

  --padding-default: 40px;

  height: 100vh;
  padding: 0px;
  margin: 0px;
  font-family: "SegoeUI", sans-serif;
  min-width: 360px;
  background: var(--gray-background);
  color: var(--gray-light);
}

div#root {
  height: 100%;
}

a,
a:hover,
a:active {
  text-decoration: none;
}

p {
  margin: 0px;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

input,
select,
textarea,
button {
  font-family: inherit;
}
</style>
