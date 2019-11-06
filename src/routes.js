import Home from '@/views/Home.vue'
import MemorizeVocabulary from '@/components/MemorizeVocabulary'
import Example from '@/components/Example'
import Login from '@/components/Login'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

import BookList from '@/components/books/BookList'
import Books from '@/components/books/Books'
import Book from '@/components/books/Book'

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
  {
    path: '/books',
    components: {
      default: Books,
      navheader: Header,
      sidebar: Sidebar,
      footer: Footer
    },
    children: [
      {
        path: '',
        components: {
          default: BookList,
          navheader: Header,
          sidebar: Sidebar,
          footer: Footer
        }
      },
      {
        path: 'new',
        components: {
          default: Book,
          navheader: Header,
          sidebar: Sidebar,
          footer: Footer
        }
      },
      {
        path: ':id',
        props: { default: true, sidebar: false, navheader: false, footer: false },
        components: {
          default: Book,
          navheader: Header,
          sidebar: Sidebar,
          footer: Footer
        }
      }
    ]
  },
  // router 轉址
  { path: '/*',
    redirect: '/' }
]
