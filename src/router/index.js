import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import CtoF from '@/components/c2f'

Vue.use(Router)

export default new Router({
  // 使用 HTML 5 模式
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/c2f',
      name: 'c2f',
      component: CtoF
    },
    // router 轉址
    { path: '/*', redirect: '/hello' }
  ]
})
