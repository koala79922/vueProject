<template>
  <SidebarMenu :menu="menu" theme="white-theme" :collapsed="true"/>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
export default {
  data () {
    return {
      menu: [
        {
          header: true,
          title: 'Main Navigation',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Home',
          icon: 'fa fa-home'
        },
        {
          href: '/charts',
          title: 'CRUD練習',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/MemorizeVocabulary',
              title: 'CRUD TODO ITEM'
            },
            {
              href: '/books',
              title: 'CRUD NODEJS RESTFUL API'
            }
          ]
        }
      ]
    }
  },
  components: {
    SidebarMenu
  },
  name: 'sidebar'
}
</script>

<style lang="scss" scoped>
</style>
