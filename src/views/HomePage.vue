<template>
  <div id="home-page">
    <div class="main-page">
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
  import HomeSwiper from '../components/HomeSwiper'
  import CardList from '../components/CardList'
  import HomeSideBar from '../components/HomeSideBar'
  import TheFooter from '../components/TheFooter'
  import top from '../components/top.vue'

  export default {
    data() {
      return {
        title: 'Live life to its fullest.'
      }
    },
    created() {
      this._getUrlParams()
    },
    methods: {
      _getUrlParams() {
        console.log('get login params')
      }
    },
    components: {
      HomeSwiper, CardList, HomeSideBar, TheFooter, top
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
