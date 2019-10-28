<template>
  <div id="app">
    <router-link :to="{path: '/hello'}">Hello</router-link>
    <router-link :to="{name: 'MemorizeVocabulary'}">MemorizeVocabulary</router-link>
    <router-link :to="{name: 'Example'}">Example</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
