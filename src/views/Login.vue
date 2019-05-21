<template>
  <div id="login">
    <div class="login-card envelope">
      <h4>登录以获取更多功能</h4>
      <div class="input-wrapper">
        <span>
          <span class="input-hint hint-error" v-show="!formatUsername">用户名长度6-20位</span>
          <span class="input-hint hint-success" v-show="formatUsername">正确！</span>
        </span>
        <input
          class="username login-input form-control"
          type="text"
          placeholder="请输入账号"
          v-model="username"
        >
        <span class="input-do-btn" @click="cancelInput">
        <img src="../assets/cancel.png" alt="cancel" width="16px" height="16px">
      </span>
      </div>
      <div class="input-wrapper">
        <span>
          <span class="input-hint hint-error" v-show="!formatPassword">6-20位,由数字字母以及下划线组成</span>
          <span class="input-hint hint-success" v-show="formatPassword">正确！</span>
        </span>
        <input
          class="password login-input form-control"
          id="password"
          type="text"
          placeholder="请输入密码"
          v-model="password"
        >
        <span @click="showPassword" class="input-do-btn">
        <img :src="eyeOpen" alt="view" v-show="isShow" width="16px" height="16px">
        <img :src="eyeClose" alt="view" v-show="!isShow" width="16px" height="16px">
      </span>
      </div>
      <div class="login-btn">
        <span
          class="login-btn btn btn-primary"
          @click="login"
        >登录/注册</span>
        <a
          class="btn btn-success"
          href="http://www.alfxjx.club/api-blog/auth/github"
          target="_blank"
        >Github登录</a>
      </div>
    </div>
  </div>
</template>
<script>
  import { checkUser, register, login } from '../api/api'

  export default {
    name: 'login',
    data() {
      return {
        username: '',
        password: '',
        eyeOpen: require('../assets/eyeOpen.png'),
        eyeClose: require('../assets/eyeClose.png'),
        isShow: true,
        formatUsername: false,
        formatPassword: false
      }
    },
    methods: {
      // 对注册的账号密码有要求
      async login() {
        console.log(this.username + '+' + this.password)
        const isExist = await checkUser(this.username)
        // console.log(isExist)
        if (isExist === 1) {
          console.log('已经注册了')
          let ret = await login(this.username, this.password)
          if (ret === 1) {
            console.log('登录成功')
          } else {
            console.log('登录失败')
          }
        } else {
          console.log('未注册')
          let ret = await register(this.username, this.password)
          console.log(ret)
        }
      },
      cancelInput() {
        // truthy&falsy如何区分
        // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
        if (this.username) {
          this.username = ''
        }
      },
      showPassword() {
        if (!this.isShow) {
          this.isShow = !this.isShow
          document.getElementById('password').type = 'text'
        } else {
          this.isShow = !this.isShow
          document.getElementById('password').type = 'password'
        }
      }
    },
    watch: {
      username() {
        let len = this.username.split('').length
        if (len > 5 && len < 21) {
          this.formatUsername = true
        }
      },
      password() {
        let len = this.password.split('').length
        if (len > 5 && len < 21) {
          this.formatPassword = true
        }
      }
    }
  }
</script>

<style scoped>
  #login {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f3f5f7;
  }

  .login-card {
    /*width: 14em;*/
    /*height: 18em;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login-input {
    margin-bottom: 0.5em;
  }

  .login-input::placeholder {
    text-align: left;
  }

  .input-wrapper {
    position: relative;
    /*抵消form-control的水平padding12px*/
    margin-left: -24px;
  }

  .input-hint {
    font-size: 0.8em;
  }

  .hint-success {
    color: green;
  }

  .hint-error {
    color: red;
  }

  .input-do-btn {
    position: absolute;
    bottom: 0.75em;
    right: -15px;
  }

  .login-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.6em;
  }

  .envelope {
    /*width: 200px;*/
    /*height: 200px;*/
    padding: 4em 3em;
    border: 10px solid transparent;
    background: linear-gradient(white, white) padding-box,
    repeating-linear-gradient(-45deg, red 0, red 12.5%,
      transparent 0, transparent 25%,
      #22658c 0, #22658c 37.5%,
      transparent 0, transparent 50%) 0 / 2em 2em;
  }

  .form-control {
    display: block;
    width: 100%;
    height: 20px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  }

  .btn {
    display: inline-block;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }

  .btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
  }

  .btn-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
  }
</style>
