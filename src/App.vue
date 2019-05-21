<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
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
    }
  }
</script>
<style>

</style>
