<template>
  <div id="card-list">
    <!-- <div v-for="(item, index) in lists" :key="index">
        <home-card :title="item.title"></home-card>
    </div>-->
    <home-card
      v-for="(item,index) in list"
      :key="index"
      :title="item.title"
      :category="item.category"
      :desc="item.desc"
      :img="item.image"
      :author="item.author"
      :viewCount="item.blogInfo.viewCount"
      :like="item.blogInfo.likes"
      :_id="item._id"
      :createdAt="item.createdAt"
      :countOfComments="item.countOfComments"
    ></home-card>
  </div>
</template>
<script>
  import HomeCard from './HomeCard.vue'

  export default {
    created() {
      this._get()
    },
    computed: {
      list() {
        return this.$store.state.blogList.reverse()
      }
    },
    methods: {
      _get() {
        this.$store.dispatch('getBlogList')
      }
    },
    components: {
      HomeCard
    }
  }
</script>

<style>
  #card-list {
    flex: 1;
    margin-left: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 700px) {
    #card-list {
      margin-left: 0;
    }
  }
</style>
