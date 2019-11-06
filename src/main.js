// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-css-only/css/bootstrap.css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

// import module
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import store from './store/index'

import VueSidebarMenu from 'vue-sidebar-menu'
import VueMeta from 'vue-meta'

import { routes } from './routes'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('token') === 'ImLogin'
  if (isLogin) {
    next()
  } else {
    if (to.path !== '/login') { next('/login') } else { next() }
  }
})

Vue.config.productionTip = false
Vue.use(VueSidebarMenu)
Vue.use(VueMeta, {refreshOnceOnNavigation: true})
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
