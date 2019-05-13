<template>
  <div id="login">
    <the-header></the-header>
    <div class="login-card envelope">
      <h4>登录以获取更多功能</h4>
      <input
        class="username login-input form-control"
        type="text"
        placeholder="请输入账号"
        v-model="username"
      >
      <input
        class="password login-input form-control"
        type="text"
        placeholder="请输入密码"
        v-model="password"
      >
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
  import TheHeader from '../components/TheHeader'

  export default {
    name: 'login',
    data() {
      return {
        username: '',
        password: ''
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
      }
    },
    components: {
      TheHeader
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
    text-align: center;
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
    padding: 4em 2em;
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
