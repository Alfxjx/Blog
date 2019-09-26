import loadingVue from './loading'

let loading = {}

loading.install = (Vue) => {
  const LoadingConstructor = Vue.extend(loadingVue)
  const instance = new LoadingConstructor()

  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  Vue.prototype.$loading = () => {
    instance.show = true
    setTimeout(() => {
      instance.show = false
    }, 2000)
  }
}

export default loading
