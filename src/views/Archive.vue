<template>
  <div id="archive">
    <the-header></the-header>
    <div class="arch-main">
      <div class="arch-list">
         111111
      </div>
      <div class="arch-tag">
        2222222
      </div>
    </div>
  </div>
</template>
<script>
import TheHeader from "../components/TheHeader.vue";
export default {
  name: "archive",
  computed: {
    blogList() {
      return this.$store.state.blogList;
    }
  },
  components: {
    TheHeader
  }
};
</script>

<style>
#archive{
  width: 100%;
}
.arch-main{
  padding: 6em 3em 0;
  display: flex;
  flex-direction: row;
}
.arch-list{
  flex: 8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.arch-tag{
  flex: 2;
}
</style>
