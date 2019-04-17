import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/css/index.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

Vue.config.productionTip = false
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
