<template>
  <div id="the-footer">
    <div class="footer-upper">
      <ul class="social-links">
        <li v-for="(link,index) in links" :key="index">
          <a :href="link.links">
            <img class="social-link-logo logo-position" :src="link.src" :alt="link.name">
          </a>
        </li>
        <li class="with-text">
          <!--<font-awesome-icon :icon="['fas','phone']"/>-->
          <img class="social-link-logo" src="../assets/phone.png" alt="phone">
          <span class="social-text">{{tel}}</span>
        </li>
        <li class="with-text">
          <!--<font-awesome-icon :icon="['fas','envelope']"/>-->
          <img class="social-link-logo" src="../assets/mail.png" alt="mail">
          <span class="social-text">{{mail}}</span>
        </li>
      </ul>
      <!-- <img class="qrcode-pic" src="../assets/qrcode.jpg" alt="二维码"/>                  -->
    </div>
    <div class="beian">
      <div>
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12011202000255"
        >
          <img src="../assets/beian.png">
          <span>津ICP备18010186号-1</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tel: '18961207621',
        mail: 'xjxtju@163.com',
        links: [
          {
            name: 'github',
            links: 'https://github.com/Alfxjx',
            src: require('../assets/logo-github.png')
          },
          { name: 'twitter', links: '#', src: require('../assets/twitter.png') },
          {
            name: 'reddit',
            links: '#',
            src: require('../assets/logo-reddit.png')
          },
          {
            name: 'zhihu',
            links: 'https://www.zhihu.com/people/bo-mo-wu-hen/activities',
            src: require('../assets/zhihu.png')
          }
        ]
      }
    }
  }
</script>

<style>
  #the-footer {
    flex: 0;
    width: 100%;
    margin-top: 3em;
    padding: 1.5em 0;
    height: 5em;
    display: flex;
    flex-direction: column;
    background: #22658c;
    border-top: 1px solid #e2e2e2;
  }

  .footer-upper {
    flex: 9;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .beian {
    flex: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .beian span {
    line-height: 20px;
    color: #cdcdcd;
  }

  .social-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 0;
    margin: 0;
  }

  .social-link-logo {
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.5em;
  }

  .with-text {
    display: flex;
    align-items: center;
  }

  .social-text {
    color: #cdcdcd;
    font-size: 0.8em;
    line-height: 1.5em;
    margin-right: 0.5em;
  }

  .logo-position {
    margin: 0 0.5em 0 0;
  }

  .qrcode-pic {
    width: 4em;
    height: 4em;
  }
</style>
