<template>
  <div id="the-header">
    <div class="the-header-side the-header-left">
      <!--<img src="../assets/logo.png" width="64" height="18" alt="logo" @click="goTo(home)">-->
      <span @click="goTo('home')">我的博客</span>
      <div class="the-header-btn" @click="goTo('archive')">{{btn1}}</div>
      <div class="the-header-btn" @click="goTo('about')">{{btn2}}</div>
      <div class="the-header-btn the-round-btn">
        <font-awesome-icon :icon="['fas','plus-circle']" @click="goTo('add')"/>
        <!--<img-->
        <!--src="../assets/add.png"-->
        <!--width="20"-->
        <!--height="20"-->
        <!--alt="add"-->
        <!--title="add new"-->
        <!--@click="goTo('add')"-->
        <!--&gt;-->
      </div>
    </div>
    <div class="the-header-side the-header-right">
      <div class="the-header-btn the-round-btn">
        <font-awesome-icon :icon="['fas','user']" @click="handleGoTo('login')"/>
        <!--<img-->
        <!--src="../assets/man.png"-->
        <!--width="20"-->
        <!--height="20"-->
        <!--alt="login"-->
        <!--title="login"-->
        <!--@click="goTo('login')"-->
        <!--&gt;-->
      </div>
      <div class="the-header-btn the-round-btn">
        <font-awesome-icon :icon="['fas','sliders-h']" @click="goTo('admin')"/>
        <!--<img-->
        <!--src="../assets/setting.png"-->
        <!--width="20"-->
        <!--height="20"-->
        <!--alt="admin"-->
        <!--title="admin"-->
        <!--@click="goTo('admin')"-->
        <!--&gt;-->
      </div>
    </div>
  </div>
</template>
<script>
  import { MessageBox } from 'element-ui'

  export default {
    data() {
      return {
        btn1: '归档',
        btn2: '关于'
      }
    },
    methods: {
      goTo(url) {
        this.$router.push('/' + url)
      },
      logout() {
        // 取消登录
        this.$store.commit('logout')
        localStorage.removeItem('username')
        localStorage.removeItem('avatar')
        localStorage.removeItem('_id')
      },
      handleGoTo(url) {
        let isLogin = this.$store.state.isLogin
        if (!isLogin) {
          this.goTo(url)
        } else {
          // TODO
          MessageBox.confirm('提示', {})
        }
      }
    }
  }
</script>

<style>
  ::selection {
    background-color: #22658c;
    color: white;
    text-shadow: none;
  }

  #the-header {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 4em;
    padding-top: 1em;
    color: #000;
  }

  .the-header-side {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06);
  }

  .the-header-left {
    flex: 0 0 250px;
    padding-left: 1em;
  }

  .the-header-right {
    flex: 0 0 150px;
  }

  @media screen and (max-width: 700px) {
    .the-header-left {
      flex: 0 0 220px;
      padding-left: 10px;
    }

    .the-header-right {
      flex: 0 0 80px;
    }
  }

  .the-header-right:first-child {
    margin-left: 1em;
  }

  .the-header-btn {
    padding: 0.2em 0.6em;
    font-weight: 700;
  }

  .the-round-btn {
    margin-top: 0em;
  }
</style>
