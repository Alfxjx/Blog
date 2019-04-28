<template>
  <div id="content-swiper" class="test2">
    <div class="content-typed">
      <span id="content-title">{{title}}</span>
    </div>
    <div class="content-author-info">
      <span>{{author}}写于</span>
      <span>{{time}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "ContentTitle",
  props: ["title", "author", "createdAt"],
  computed: {
    time() {
      if (this.createdAt) {
        let time = this.createdAt.toString();
        return time.slice(0, 10);
      } else {
        return "";
      }
    }
  }
};
</script>

<style>
#content-swiper {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 8em;
  padding-bottom: 4em;
  box-shadow: 0 1px 1px 0 rgba(121, 121, 121, 0.06);
  margin-bottom: 1em;
}
.content-author-info {
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  /*padding: 0 1em;*/
}

.content-author-info span {
  line-height: 2em;
  margin: 0 1em;
}
.content-typed {
  position: relative;
  overflow: hidden;
  max-width: 30em;
  width: 30em;
  height: 6em;
  margin: 0 10em 0 4em;
  background: white;
  border-radius: 5px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06);
}
#content-title {
  margin-left: 1em;
  line-height: 3em;
  font-size: 2em;
  color: #22658c;
}

@media screen and (max-width: 700px) {
  #content-swiper {
    flex-direction: column;
    align-items: center;
    padding-bottom: 1em;
    padding-top: 4em;
  }
  .content-typed {
    width: 80%;
    padding-left: 0;
    margin: 1em;
  }
  .content-author-info {
    width: 80%;
    margin: 1em;
  }
}
</style>
