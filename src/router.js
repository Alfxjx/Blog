import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
// import Archive from './views/Archive.vue'
import ContentPage from './views/ContentPage.vue'
import Login from './views/Login.vue'
import AdminEdit from './views/AdminEdit.vue'
import About from './views/About.vue'
import AddBlog from './views/AddBlog'
import store from './store'
// import loading from './components/loading'
const Archive = () => import('./views/Archive.vue')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: HomePage
    },
    {
      name: 'archive',
      path: '/archive',
      component: Archive
    },
    {
      name: 'content',
      path: '/blog/:_id',
      props: true,
      component: ContentPage
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'admin',
      path: '/admin',
      component: AdminEdit
    },
    {
      name: 'about',
      path: '/about',
      component: About
    },
    {
      name: 'add',
      path: '/add',
      component: AddBlog
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 路由守卫
  const nextRoute = ['admin'] // admin
  let isLogin = store.state.isLogin
  if (nextRoute.indexOf(to.name) >= 0) {
    if (!isLogin) {
      // 设置router.push 会在跳转到admin/add的时候
      // 再跳转另外一个就跳过守卫了
      next({
        // TODO 设置登录之后的重定向
        // query: { redirect: to.fullPath },
        name: 'login'
      })
    } else {
      next()
    }
  }
  if (to.name === 'login') {
    if (isLogin) {
      console.log('is login')
      router.push('/home')
    }
  }
  next()
})

export default router
