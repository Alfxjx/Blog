<template>
  <div id="add-blog">
    <h1 class="add-placeholder">1</h1>
    <div class="add-main">
      <div class="add-blog-info">
        <div class="input-group">
          <span
            class="input-group-addon"
            id="basic-addon1"
          >
            标题
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="标题长度不要太长，太长显示不全"
            aria-describedby="basic-addon1"
            v-model="title"
          />
        </div>
        <div class="input-group">
          <span
            class="input-group-addon"
            id="basic-addon2"
          >
            分类
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="一个词表明分类，例如：‘测试’"
            aria-describedby="basic-addon2"
            v-model="category"
          />
        </div>
        <div class="input-group">
          <span
            class="input-group-addon"
            id="basic-addon3"
          >
            标签
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="输入标签，以逗号分割"
            aria-describedby="basic-addon3"
            v-model="tags"
          />
        </div>
        <div class="input-group">
          <span
            class="input-group-addon"
            id="basic-addon4"
          >
            描述
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="选填，不填写默认抓取前30个字"
            aria-describedby="basic-addon4"
            v-model="desc"
          />
        </div>
      </div>
      <add-pic></add-pic>
      <div class="add-blog-content">
        <mavon-editor
          v-model="content"
          :subfield="false"
        />
      </div>
      <div class="submit-blog">
        <button
          type="button"
          class="btn btn-primary"
          @click="submitBlog"
        >
          点击提交
        </button>
      </div>
      <top></top>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import TheFooter from '../components/TheFooter'
  import top from '../components/top'
  import addPic from '../components/addPic'
  import { Notification, Message } from 'element-ui'
  import { generalRequest } from '../api/api'

  export default {
    name: 'AddBlog',
    data: () => {
      return {
        category: '',
        title: '',
        tags: '',
        desc: '',
        content: '',
        imgUpload: ''
      }
    },
    created() {
      Message({
        type: 'info',
        message: '为了美观，文章一定要有一个图片'
      })
    },
    computed: {
      author() {
        if (this.$store.state.username) {
          return this.$store.state.username
        } else {
          return '匿名'
        }
      },
      formedTags() {
        return this.tags.split(',')
      }
    },
    methods: {
      async submitBlog() {
        // TODO
        let res = await generalRequest('/blog', 'post', {
          title: this.title,
          author: this.author,
          category: this.category,
          tags: this.formedTags,
          desc: this.desc,
          image: this.imgUpload,
          content: this.content
        })
        Notification({
          title: '创建博客成功',
          message: '即将回到首页',
          type: 'success',
          duration: 1000
        })
      }
    },
    components: {
      TheFooter, top, addPic
    }
  }
</script>

<style scoped>
  #add-blog {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .add-placeholder {
    color: transparent;
  }

  .add-main {
    flex: 1;
    padding: 1em 5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .add-blog-info {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .input-group {
    width: 45%;
    margin: 0 0 1em 0;
  }

  .input-group:nth-child(1) {
    padding: 0 2.5% 0 5%;
  }

  .input-group:nth-child(3) {
    padding: 0 2.5% 0 5%;
  }

  .input-group:nth-child(2) {
    padding: 0 5% 0 2.5%;
  }

  .input-group:nth-child(4) {
    padding: 0 5% 0 2.5%;
  }

  .add-blog-img {
    width: 80%;
    margin: 0 0 1em 8.5em;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .add-blog-content {
    margin: 0 auto;
    width: 75%;
  }

  .submit-blog {
    margin: 1em auto 0;
  }
</style>
