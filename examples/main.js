import Vue from 'vue'
import './assets/styles/common.scss'
import App from './App.vue'
import router from './router'

// 导入组件库
import LIB from '../packages'

// 注册组件库
Vue.use(LIB)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
