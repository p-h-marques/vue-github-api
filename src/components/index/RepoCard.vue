<template>
  <div class="repocard">
    <div class="repoinfos">
      <div class="title">
        <h3>laravel</h3>
        <p>A PHP framework for web artisans.</p>
      </div>

      <div class="details">
        <div class="detail">
          <img src="../../assets/images/updated.svg" alt="Atualizado pela última vez:">
          <span>Atualizado 21h57 do dia 21/03/2019</span>
        </div>

        <div class="detail">
          <img src="../../assets/images/fork.svg" alt="Forks:">
          <span>127 forks</span>
        </div>

        <div class="detail">
          <img src="../../assets/images/watcher.svg" alt="Watchers:">
          <span>523 watchers</span>
        </div>
      </div>
    </div>

    <div class="arrow">
      <img src="../../assets/images/arrow.svg" alt="Ir ao repositório">
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
div.repocard{
  padding: 28px 16px 28px 35px;
  background-color: var(--gray-medium);
  display: flex;
  align-items: center;
}

div.repoinfos{
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin-right: 16px;
  gap: 20px;
}

div.repoinfos div.title{
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
}

div.repoinfos div.title h3{
  font-size: 24px;
  font-weight: 600;
  color: var(--blue);
}

div.repoinfos div.title p{
  font-size: 14px;
  line-height: 16px;
}

div.repoinfos div.details{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

div.repoinfos div.details div.detail{
  display: flex;
  align-items: center;
  gap: 10px
}

div.repoinfos div.details div.detail img{
  height: 16px;
}

div.repoinfos div.details div.detail span{
  font-size: 12px;
}

div.arrow{
  flex-grow: auto;
}

div.arrow img{
  height: 64px;
  cursor: pointer;
}

@media(max-width: 575px){
  div.repoinfos{
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
