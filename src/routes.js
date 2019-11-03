import Home from '@/views/Home.vue'
import Hello from '@/components/Hello'
import MemorizeVocabulary from '@/components/MemorizeVocabulary'
import Example from '@/components/Example'
import Login from '@/components/Login'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

export const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      navheader: Header,
      sidebar: Sidebar,
      footer: Footer
    }
  },
  {
    path: '/hello',
    name: 'hello',
    components: {
      default: Hello,
      navheader: Header,
      sidebar: Sidebar,
      footer: Footer
    }
  },
  {
    path: '/MemorizeVocabulary',
    name: 'MemorizeVocabulary',
    components: {
      default: MemorizeVocabulary,
      navheader: Header,
      sidebar: Sidebar,
      footer: Footer
    }
  },
  {
    path: '/Example',
    name: 'Example',
    components: {
      default: Example,
      navheader: Header,
      sidebar: Sidebar,
      footer: Footer
    }
  },
  // router 轉址
  { path: '/*',
    redirect: '/' }
]
