<template>
  <Index />
</template>

<script>
import Index from '@/pages/main/Index.vue';

export default {
  name: 'App',
  components: {
    Index,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "SegoeUI";
  src: local("segoe-regular"), url(./assets/fonts/segoe-regular.ttf) format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: "SegoeUI";
  src: local("segoe-semibold"), url(./assets/fonts/segoe-semibold.ttf) format("truetype");
  font-weight: 600;
}

@font-face {
  font-family: "SegoeUI";
  src: local("segoe-bold"), url(./assets/fonts/segoe-bold.ttf) format("truetype");
  font-weight: 800;
}

* {
  text-decoration: none;
  box-sizing: border-box;
  line-height: 100%;
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
  --border-default: 2px solid var(--gray-medium);

  height: 100vh;
  padding: 0px;
  margin: 0px;
  font-family: "SegoeUI", sans-serif;
  font-weight: 400;
  min-width: 360px;
  background: var(--gray-background);
  color: var(--gray-light);
}

div#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

a,
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
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
