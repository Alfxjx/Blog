import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import Archive from './views/Archive.vue'
import ContentPage from './views/ContentPage.vue'
import Login from './views/Login.vue'
import AdminEdit from './views/AdminEdit.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
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
      name:'about',
      path:'/about',
      component: About
    }
  ]
})
