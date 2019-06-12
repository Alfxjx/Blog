<template>
  <div id="app">
    <indicator></indicator>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>
<script>
  import TheHeader from './components/TheHeader'
  import indicator from './components/indicator'
  import { Notification } from 'element-ui'

  export default {
    created() {
      // 清除初始Notification
      Notification.closeAll()
      // Notification({
      //   title: '收藏本站的方法',
      //   message: '按Ctrl+D收藏',
      //   position: 'top-right',
      //   offset: 60
      // })
    },
    components: {
      TheHeader, indicator
    }
  }
</script>
<style>
  #app {
    /*for indicator*/
    position: relative;
  }
</style>
