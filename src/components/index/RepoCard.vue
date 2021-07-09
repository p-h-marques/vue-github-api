<template>
  <div class="repocard">
    <div class="repoinfos">
      <div class="title">
        <h3>{{repo.name}}</h3>
        <p>{{repo.description}}</p>
      </div>

      <div class="details">
        <div class="detail">
          <img src="../../assets/images/updated.svg" alt="Atualizado pela última vez:">
          <span>{{updatedAt}}</span>
        </div>

        <div class="detail">
          <img src="../../assets/images/fork.svg" alt="Forks:">
          <span>{{repo.forks_count}} forks</span>
        </div>

        <div class="detail">
          <img src="../../assets/images/watcher.svg" alt="Watchers:">
          <span>{{repo.watchers_count}} watchers</span>
        </div>
      </div>
    </div>

    <div class="arrow">
      <a :href="repo.svn_url" target="_blank">
        <img src="../../assets/images/arrow.svg" alt="Ir ao repositório">
      </a>
    </div>
  </div>
</template>

<script>
import formatUpdatedAt from '@/functions/utils';

export default {
  props: ['repo'],
  data() {
    return {
      updatedAt: formatUpdatedAt(this.repo.updated_at),
    };
  },
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin-right: 16px;
  gap: 20px;
}

div.repoinfos div.title{
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  flex-direction: column;
  display: flex;
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
  line-height: 16px;
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
    align-items: flex-start;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr)
  }
}
</style>
