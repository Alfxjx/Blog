<template>
  <div id="home-page">
      <the-header></the-header>
      <home-swiper></home-swiper>
      <div class="home-context">
          <card-list></card-list>
          <home-side-bar></home-side-bar>
      </div>
      <top></top>   
      <the-footer></the-footer>
  </div>
</template>
<script>
import TheHeader from '../components/TheHeader'
import HomeSwiper from '../components/HomeSwiper'
import CardList from '../components/CardList'
import HomeCard from '../components/HomeCard'
import HomeSideBar from '../components/HomeSideBar'
import TheFooter from '../components/TheFooter'
import top from '../components/top.vue'
export default {
    components:{
        TheHeader,HomeSwiper,CardList,HomeSideBar,TheFooter,top
    }
}
</script>

<style>
.home-context{
    display: flex;
}
</style>