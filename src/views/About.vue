<template>
  <div id="about-page">
    <div class="about-head">
      <h1 class="about-placeholder">1</h1>
      <div class="about-main">
        <h2 class="about-title">{{greetings}}</h2>
        <div>
          <p v-for="(ctx,index) in contents" :key="index">{{ctx}}</p>
        </div>
        <div class="about-links">
          <a :href="ghPage" target="_blank">旧的博客</a>
          <a :href="projectLink" target="_blank">项目地址</a>
          <a :href="serverLink" target="_blank">服务器端</a>
        </div>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import TheFooter from '../components/TheFooter'

  export default {
    name: 'About',
    data: () => {
      return {
        projectLink: 'https://github.com/Alfxjx/Blog',
        serverLink: 'https://github.com/Alfxjx/material-blog',
        ghPage: 'https://alfxjx.github.io/',
        greetings: '你好，朋友',
        contents: ['这里是我和我的朋友搭建的个人小站，学习之余的习作。',
          '项目始于2019年的春天，那是家乡的樱花开了，我和魏桑说....算了不搞了。',
          '这个博客主要是用来练习我最近的一些学习成果，顺便和朋友联络感情。',
          '况且买了一个服务器总不能一直空着嘛，光有一个静态页面属实不够给力。',
          '项目完全开源，在github上面都可以看到。',
          '其实走不走程序这条路我现在也没想清楚，不过敲起键盘的感觉很舒服，就感觉还好。',
          '刚被老师gank了一波，哈哈，底栏有我的联系方式，愿意交朋友换友链啥的可以联系我',
          '微信号就是手机号嗷'
        ]
      }
    },
    components: {
      TheFooter
    }
  }
</script>

<style scoped>
  #about-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .about-head {
    flex: 1;
  }

  .about-placeholder {
    color: transparent;
  }

  .about-main {
    display: flex;
    flex-direction: column;
    padding: 2em;
  }

  .about-title {
    margin-bottom: 1em;
  }

  .about-links > a {
    margin-right: 1em;
    color: #22658c;
  }
</style>
