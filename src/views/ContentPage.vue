<template>
  <div id="content-page">
    <the-header></the-header>
    <content-title
      :title="ctx.title"
      :author="ctx.author"
      :createdAt="ctx.createdAt"
    ></content-title>
    <div class="content-main">
      {{ctx.content}}
    </div>
  </div>
</template>
<script>
  import TheHeader from '../components/TheHeader'
  import ContentTitle from '../components/ContentTitle'
  import { get } from '../api/api.js'

  export default {
    name: 'content-page',
    props: ['_id'],
    data() {
      return {
        ctx: {}
      }
    },
    created() {
      this._getContent()
    },
    methods: {
      _getContent() {
        get('/blog/' + this._id)().then(res => {
          this.ctx = res
        })
      }
    },
    components: {
      TheHeader, ContentTitle
    }
  }
</script>

<style>

</style>
