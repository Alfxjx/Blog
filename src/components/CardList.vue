<template>
  <div id="card-list">
      <div v-for="(item, index) in lists" :key="index">
          <home-card :title="item.title"></home-card>
      </div>
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

</style>