import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import MemorizeVocabulary from '@/components/MemorizeVocabulary'
import Example from '@/components/Example'

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
      path: '/MemorizeVocabulary',
      name: 'MemorizeVocabulary',
      component: MemorizeVocabulary
    },
    {
      path: '/Example',
      name: 'Example',
      component: Example
    },
    // router 轉址
    { path: '/*', redirect: '/hello' }
  ]
})
