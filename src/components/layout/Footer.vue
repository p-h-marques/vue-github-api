<template>
  <footer>
    <a href="https://github.com/p-h-marques"
      target="_blank" class="signature">
      <img src="../../assets/images/logo.svg" alt="GitHub">
      <span>Pedro Henrique</span>
    </a>
  </footer>
</template>

<script>
export default {

};
</script>

<style scoped>
footer{
  background-color: var(--gray-medium);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;
}

footer a{
  display: flex;
  align-items: center;
  gap: 8px;
}

footer a img{
  height: 20px;
}

footer a span{
  font-size: 14px;
}
</style>
