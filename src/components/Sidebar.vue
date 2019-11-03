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
          title: 'Dashboard',
          icon: 'fa fa-user'
        },
        {
          href: '/charts',
          title: 'Charts',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/charts/sublink',
              title: 'Sub Link'
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
