import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
      redirect: '/components/button'
    },
    {
      path: '/components',
      name: 'component-index',
      component: Index,
      redirect: '/components/button',
      children: [
        {
          path: 'button',
          name: 'components-button',
          component: () => import('./views/button')
        }
      ]
    }
  ]
})
