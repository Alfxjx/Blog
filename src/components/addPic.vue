<template xmlns:v-clipboard="http://www.w3.org/1999/xhtml">
  <div class="add-blog-img">
    <!--todo 设置插入图片，可以选择为文章第一个图-->
    <div class="left-side-add add-pic-section">
      <button class="btn btn-primary" @click="chooseFile">
        <span style="color: red">* </span>
        添加图片
      </button>
      <input type="file" class="file-add" id="file" ref="file" @change="showFile"/>
      <span class="pic-name" id="aim">{{picNameAdded}}</span>
      <button class="btn btn-primary" @click="uploadPic()">
        <span style="color: red">* </span>
        上传图片
      </button>
    </div>
    <div class="right-side-add add-pic-section">
      <span class="pic-name">{{mdName}}</span>
      <div class="btn-group min-width-btn">
        <button
          type="button"
          class="btn btn-danger"
          @click="delUpload"
        >
          删除
        </button>
        <button
          type="button"
          class="btn btn-primary"
          v-clipboard:copy="mdName"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >
          复制
        </button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { uploadImg } from '../api/api'
  import { Message } from 'element-ui'

  export default {
    name: 'addPic',
    data: () => {
      return {
        picNameAdded: 'Picture',
        picLink: 'Link'
      }
    },
    computed: {
      mdName() {
        return `![${this.picNameAdded}](${this.picLink})`
      }
    },
    methods: {
      chooseFile() {
        let file = document.getElementById('file')
        file.click()
      },
      // https://segmentfault.com/q/1010000011657090/a-1020000011657313
      showFile(e) {
        let out = this.$refs.file.files
        this.picNameAdded = out[0].name
        // console.log(out)
      },
      async uploadPic() {
        const $file = document.getElementById('file').files[0]
        const formData = new FormData()
        formData.append('image', $file)
        let res = await uploadImg(formData)
        if (!res) {
          console.log(res.msg)
        } else {
          this.picLink = res.data
        }
        this.$emit('listenLink', res.data)
      },
      delUpload() {
        Message({
          type: 'warning',
          message: '以后会开放此功能',
          duration: 1000
        })
      },
      onCopy(e) {
        Message({
          type: 'info',
          message: '拷贝成功',
          duration: 1000
        })
      },
      onError(e) {
        Message({
          type: 'warning',
          message: '拷贝失败',
          duration: 1000
        })
      }
    }
  }
</script>

<style scoped>
  .add-blog-img {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 1em;
  }

  .file-add {
    display: none;
  }

  .add-pic-section {
    width: 45%;
    margin: 0 0 1em 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .right-side-add {
    padding: 0 5% 0 2.5%;
  }

  .left-side-add {
    padding: 0 2.5% 0 5%;
  }

  .pic-name {
    padding: 6px 12px;
    overflow: hidden;
    /*超出显示省略号*/
    text-overflow: ellipsis;
    /*border: 1px solid #000;*/
  }

  .min-width-btn{
    min-width: 108px;
  }

  @media screen and (max-width: 960px) {
    .add-pic-section {
      width: 90%;
    }

    .left-side-add {
      padding: 0;
    }

    .right-side-add {
      padding: 0;
    }
  }
</style>
