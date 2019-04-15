<template>
  <div id="home-swiper" class="test2">
    <div class="swiper-typed">
      <span id="type">{{title}}</span>
    </div>
    <div class="content-author-info">
      <span>{{author}}</span>
      <span>{{time}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'ContentTitle',
    props: ['title', 'author', 'createdAt'],
    computed: {
      time() {
        if (this.createdAt) {
          let time = this.createdAt.toString()
          return time.slice(0, 10)
        } else {
          return ''
        }
      }
    }
  }
</script>

<style>
</style>
