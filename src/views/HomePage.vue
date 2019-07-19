<template>
  <div id="home-page">
    <indicator></indicator>
    <div class="main-page">
      <home-swiper :title="title"></home-swiper>
      <div class="home-context">
        <card-list></card-list>
        <home-side-bar></home-side-bar>
      </div>
      <top></top>
    </div>
    <the-footer></the-footer>
  </div>
</template>
<script>
  import HomeSwiper from '../components/HomeSwiper'
  import CardList from '../components/CardList'
  import HomeSideBar from '../components/HomeSideBar'
  import TheFooter from '../components/TheFooter'
  import top from '../components/top.vue'
  import indicator from '../components/indicator'
  import { Loading } from 'element-ui'

  export default {
    data() {
      return {
        title: 'Live life to its fullest.'
      }
    },
    created() {
      this._getUrlParams()
      this._showLoading()
    },
    methods: {
      // 用于github登录
      _getUrlParams() {
        // let tmp = 'http://www.alfxjx.club/?loginRes=true&username=Alfxjx&openId=28646799&avatar=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F28646799%3Fv%3D4&_id=5c76328fade7a550cc0f8de3#/home\n'
        let linkExist = window.location.href.split('?')[1]
        if (linkExist) {
          let params = linkExist.split('&')
          let _loginRes = params[0].split('=')[1]
          let _username = params[1].split('=')[1]
          // let _openId = params[2].split('=')[1]
          let _avatar = params[3].split('=')[1]
          let _id = params[4].split('=')[1].substring(0, params[4].split('=')[1].length - 7)
          this.$store.dispatch('userInfo', {
            username: _username,
            avatar: _avatar,
            _id: _id
          })
          localStorage.setItem('username', _username)
          localStorage.setItem('avatar', _avatar)
          localStorage.setItem('_id', _id)
          console.log(_loginRes)
          this.$store.commit('login')
        } else {
          console.log('未登录')
        }
      },
      _showLoading() {
        let loading = Loading.service({
          text: 'loading'
        })
        setTimeout(() => {
          loading.close()
        }, 1000)
      }
    },
    components: {
      HomeSwiper, CardList, HomeSideBar, TheFooter, top, indicator
    }
  }
</script>

<style scoped>
  .home-context {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .main-page {
    flex: 1;
  }

  .home-context {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 800px) {
    .home-context {
      display: flex;
      flex-direction: column;
    }
  }
</style>
