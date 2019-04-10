<template>
  <div id="card-list">
      <!-- <div v-for="(item, index) in lists" :key="index">
          <home-card :title="item.title"></home-card>
      </div> -->
      <home-card></home-card>
  </div>
</template>
<script>
import HomeCard from './HomeCard.vue'
export default {
    data(){
        return{
            lists:[]
        }
    },
    components: {
        HomeCard
    }
}
</script>

<style>
#card-list{
    flex:1;
    margin-left: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>