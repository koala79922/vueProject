<template>
  <div id="app">
    <router-view name="navheader"></router-view>
    <router-view name="sidebar"></router-view>
    <router-view/>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>

export default {
  data () {
    return {
      myTitle: 'Vue SideProject Title'
    }
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
