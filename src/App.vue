<template>
  <div id="app">
    <header>
      <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand>Vue SideProject</b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-text>
              <router-link :to="{path: '/hello'}"> Hello |</router-link>
            </b-nav-text>
            <b-nav-text>
              <router-link :to="{name: 'MemorizeVocabulary'}"> MemorizeVocabulary |</router-link>
            </b-nav-text>
            <b-nav-text>
              <router-link :to="{name: 'Example'}"> Example</router-link>
            </b-nav-text>
        </b-navbar-nav>
      </b-collapse>
      </b-navbar>
    </header>

    <!-- <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col>
          <b-form-row>test1 </b-form-row>
          <b-form-row>test2 </b-form-row>
          <b-form-row>test3 </b-form-row>
          <b-form-row>test4 </b-form-row>
        </b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container> -->
    <SidebarMenu :menu="menu" />
    <router-view/>
    <footer >
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-navbar-brand>Footer</b-navbar-brand>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
              <b-nav-text>
              AAAAAAAAAA
              </b-nav-text>
              <b-nav-text>
                BBBBBBBBBB
              </b-nav-text>
              <b-nav-text>
                CCCCCCCCCCCCC
              </b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </footer>
  </div>
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
      ],
      myTitle: 'Vue SideProject Title'
    }
  },
  components: {
    SidebarMenu
  },
  name: 'App',
  metaInfo () {
    return {
      title: this.myTitle,
      titleTemplate: '%s - by vue-meta',
      htmlAttrs: {
        lang: 'zh'
      },
      link: [{
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
        integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU',
        crossorigin: 'anonymous'
      }]
    }
    // script: [{innerHTML: 'console.log("hello hello!")', type: 'text/javascript'}],
    // __dangerouslyDisableSanitizers: ['script']
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

header{
  height: 40px;
  padding-left: 50px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

footer{
   position: absolute;
   box-sizing: border-box;
   width:100%;
   padding-left: 50px;
   margin-bottom: -50px;
}

</style>
