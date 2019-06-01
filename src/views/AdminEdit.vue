<template>
  <div id="admin-edit">
    <h1 class="admin-placeholder">1</h1>
    <div class="admin-main">
      111111
    </div>
    <the-footer></the-footer>
  </div>
</template>
<script>
  import TheFooter from '../components/TheFooter'

  export default {
    name: 'adminEdit',
    components: {
      TheFooter
    }
  }
</script>

<style scoped>
  #admin-edit {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .admin-main {
    flex: 1;
  }
</style>
