<template>
  <header>
    <div class="logo">
      <img src="../../assets/images/logo.svg" alt="Repos Alheios!">
      <span>Repos Alheios!</span>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header{
  width: 100%;
  background-color: var(--gray-medium);
  padding: 10px var(--padding-default);
  display: flex;
  justify-content: space-between;
}

div.logo{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

div.logo img{
  height: 30px;
}

div.logo span{
  font-weight: 400;
}

</style>
