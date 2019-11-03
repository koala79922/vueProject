<template>
  <div id="home" class="home">
    <KVTyper title="Hi! JustinLiu"></KVTyper>
    <Experiences></Experiences>
  </div>
</template>

<script>
// @ is an alias to /src
import KVTyper from '@/components/KVTyper.vue'
import Experiences from '@/components/Experiences.vue'

import { WOW } from 'wowjs'

const wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true
})
wow.init()

export default {
  name: 'home',
  components: {
    KVTyper, Experiences
  },
  metaInfo: {
    title: 'HomePage',
    titleTemplate: null,
    link: [
      { rel: 'favicon', href: 'favicon.ico' }
    ]
  }
}
</script>
