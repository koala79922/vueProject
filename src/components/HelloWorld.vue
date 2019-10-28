<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="hello">
    <input type="checkbox" v-model="toggle">{{toggle}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '英文單字記憶網',
      toggle: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
