<template>
  <div id="content-page">
    <indicator></indicator>
    <div class="main-page">
      <content-title :title="ctx.title" :author="ctx.author" :createdAt="ctx.createdAt"></content-title>
      <div class="content-main-wrapper">
        <div class="content-main" v-html="mkdCompiled" v-highlight></div>
      </div>
      <top></top>
    </div>
    <the-footer></the-footer>
  </div>
</template>
<script>
  import ContentTitle from '../components/ContentTitle'
  import TheFooter from '../components/TheFooter'
  import top from '../components/top.vue'
  import indicator from '../components/indicator'
  import { get } from '../api/api.js'
  import marked from 'marked'

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
    mounted() {
      this._markdown()
    },
    computed: {
      mkdCompiled() {
        if (this.ctx.content) {
          return marked(this.ctx.content)
        } else {
          return ''
        }
      }
    },
    methods: {
      _getContent() {
        get('/blog/' + this._id)().then(res => {
          this.ctx = res
        })
      },
      _markdown() {
        marked.setOptions({
          renderer: new marked.Renderer(),
          gfm: true,
          tables: true,
          breaks: true,
          pedantic: false,
          sanitize: true,
          smartLists: true,
          smartypants: false
        })
      }
    },
    components: {
      ContentTitle,
      TheFooter,
      top,
      indicator
    }
  }
</script>

<style scoped>
  #content-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .main-page {
    flex: 1;
  }

  .content-main-wrapper {
    margin: 0 auto;
    width: 70%;
    box-shadow: 0px 0px 1px 1px rgba(121, 121, 121, 0.1);
  }

  .content-main-wrapper:hover {
    box-shadow: 1px 1px 1px 2px rgba(121, 121, 121, 0.2);
  }

  .content-main {
    padding: 2em 3em;
  }

  @media screen and (max-width: 700px) {
    .content-main-wrapper {
      width: 100%;
    }

    .content-main {
      padding: 1em 0.5em;
    }
  }
</style>
