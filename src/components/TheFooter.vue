<template>
  <footer id="the-footer">
    <div class="footer-upper">
      <ul class="social-links">
        <li v-for="(link,index) in links" :key="index">
          <a :href="link.links">
            <img class="social-link-logo logo-position" :src="link.src" :alt="link.name"/>
          </a>
        </li>
        <li class="with-text">
          <img class="social-link-logo" src="../assets/phone.png" alt="phone"/>
          <span class="social-text">123########</span>
        </li>
        <li class="with-text">
          <img class="social-link-logo" src="../assets/mail.png" alt="mail"/>
          <span class="social-text">1321@111.cn</span>
        </li>
      </ul>
      <!-- <img class="qrcode-pic" src="../assets/qrcode.jpg" alt="二维码"/>                  -->
    </div>
    <div class="beian">
      <div style="width:300px;margin:0 auto; padding:10px 0;">
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12011202000255"
           style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
          <img src="../assets/beian.png" style="float:left;"/>
          <p style="float:left;height:20px;font-size:12px;line-height:20px;margin: 0px 0px 0px 5px; color:#cdcdcd;">
            津公网安备 12011202000255号</p>
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        links: [
          { name: 'github', links: '#', src: require('../assets/logo-github.png') },
          { name: 'twitter', links: '#', src: require('../assets/twitter.png') },
          { name: 'reddit', links: '#', src: require('../assets/logo-reddit.png') },
          { name: 'zhihu', links: '#', src: require('../assets/zhihu.png') }
        ]
      }
    }
  }
</script>

<style>
  #the-footer {
    padding: 1em 3em 0;
    height: 4em;
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

  .social-links {
    display: flex;
    flex-direction: row;
    align-items: center;

  }

  .social-link-logo {
    width: 1.2em;
    height: 1.2em;
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
