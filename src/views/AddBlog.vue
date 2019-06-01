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
            placeholder="输入一句话描述"
            aria-describedby="basic-addon4"
          />
        </div>
      </div>
      <div class="add-blog-img">
        <!--todo-->
      </div>
      <div class="add-blog-content">
        <mavon-editor
          v-model="value"
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

  export default {
    name: 'AddBlog',
    data: () => {
      return {
        value: ''
      }
    },
    methods: {
      submitBlog() {
        // TODO
      }
    },
    components: {
      TheFooter, top
    }
  }
</script>

<style scoped>
  #add-blog {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .add-main {
    flex: 1;
    padding: 1em 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .add-blog-info {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .input-group {
    min-width: 40%;
    margin: 0 1em 1em 0;
  }

  .add-blog-content {
    width: 80%;
  }

  .submit-blog {
    margin-top: 1em;
  }
</style>
