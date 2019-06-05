<template>
  <div class="add-blog-img">
    <!--todo 设置插入图片，可以选择为文章第一个图-->
    <button class="add-btn btn btn-default" @click="chooseFile">添加图片</button>
    <input type="file" class="file-add" id="file" ref="file" @change="showFile"/>
    <span class="pic-name" id="aim">{{picNameAdded}}</span>
    <!--TODO 需要添加删除栏-->
    <button class="add-btn btn btn-default" @click="uploadPic()">上传图片</button>
    <span class="pic-name">{{mdName}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  import { uploadImg } from '../api/api'

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
      }
    }
  }
</script>

<style scoped>
  .add-blog-img {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .add-btn {
    background-color: #EEE;
  }

  .file-add {
    display: none;
  }

  .pic-name {
    width: 20em;
    margin: auto 1em;
    padding: 0 1em;
    /*border: 1px solid #000;*/
  }
</style>
