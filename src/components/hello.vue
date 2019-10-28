<template>
  <div class="hello">
    <h1>Page1</h1>
    <h2>computed練習</h2>
    <h2 v-if="isMoreThanOne">大於1</h2>
    <h2>result+1={{addone}}</h2>
    <div><input type="number" v-model="inputdataone"></div>
    <button @click="toggleShowMoreThanOne();">檢測是否有大於1</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      inputdataone: 0,
      toggle: false,
      isMoreThanOne: true
    }
  },
  computed: {
    addone () {
      return parseInt(this.inputdataone) + 1
    }
  },
  methods: {
    toggleShowMoreThanOne () {
      this.isMoreThanOne = (this.inputdataone > 1)
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
