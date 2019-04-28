<template>
  <div id="home-page">
    <div class="main-page">
      <the-header></the-header>
      <home-swiper :title="title"></home-swiper>
      <div class="home-context">
        <card-list></card-list>
        <home-side-bar></home-side-bar>
      </div>
      <top></top>
    </div>
    <the-footer></the-footer>
  </div>
</template>
<script>
  import TheHeader from '../components/TheHeader'
  import HomeSwiper from '../components/HomeSwiper'
  import CardList from '../components/CardList'
  import HomeSideBar from '../components/HomeSideBar'
  import TheFooter from '../components/TheFooter'
  import top from '../components/top.vue'

  export default {
    data () {
      return {
        title:'Live life to its fullest.'
      }
    },
    components: {
      TheHeader, HomeSwiper, CardList, HomeSideBar, TheFooter, top
    }
  }
</script>

<style scoped>
.home-context {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main-page {
  flex: 1;
}

.home-context {
  display: flex;
  flex-direction: row;
}
@media screen and (max-width: 800px) {
  .home-context {
    display: flex;
    flex-direction: column;
  }
}
</style>
