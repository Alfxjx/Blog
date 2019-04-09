<template>
  <div id="home-page">
      <the-header></the-header>
      <home-swiper></home-swiper>
      <div class="home-context">
          <ul class="ctx-card">
              <home-card></home-card>
          </ul>
          <home-side-bar></home-side-bar>
      </div>
      <the-footer></the-footer>
  </div>
</template>
<script>
import TheHeader from '../components/TheHeader'
import HomeSwiper from '../components/HomeSwiper'
import HomeCard from '../components/HomeCard'
import HomeSideBar from '../components/HomeSideBar'
import TheFooter from '../components/TheFooter'
export default {
    components:{
        TheHeader,HomeSwiper,HomeCard,HomeSideBar,TheFooter
    }
}
</script>

<style>

</style>