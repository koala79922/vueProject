<template>
  <div id="kvTyper" class="kv kv-typer" :style="{backgroundImage: 'url(' + imgPicBg + ')' }">
    <div class="page-table">
      <div class="table-cell text-center">
        <div class="container">
          <h1 class="title">{{ title }}</h1>
          <h2 class="typer-title">
            <vue-typer :text="['大家好，我是劉學勳','喜歡動畫與運動']"></vue-typer>
          </h2>
          <p>圖片來源: https://www.pixiv.net/artworks/60895189</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
import ImgPicBg from '../assets/images/head-bg.png'

export default {
  name: 'KVTyper',
  props: ['title'],
  components: { VueTyper },
  data () {
    return {
      imgPicBg: ImgPicBg
    }
  }
}
</script>
<style>
.vue-typer .custom.char.typed {
  color: #bfbfbf;
}
</style>

<style lang="scss" scoped>
  @import "@/assets/scss/base/_variables.scss";

.kv {
  width: 100%;
  height: -webkit-calc(100vh - 56px);
  height:    -moz-calc(100vh - 56px);
  height:         calc(100vh - 56px);
  max-height: 100vh;
  color: $white;
  background-color: $white;
  background-size: cover;
  background-position: center;

  a {
    color: $dark-grey;
  }

  img {
    @include phone-width() {
      max-width: 200px;
    }
  }

  &-typer {
    color: $white;
    .page-table {
      display: table;
      width: 100%;
      height: 100%;
    }

    .table-cell {
      position: relative;
      display: table-cell;
      padding-top: 20px;
      z-index: 5;
    }

    h1 {
      font-family: 'Lato';
      color: $white;
      font-size: $font4*2;
    }
    h2 {
      font-size: $font4;
    }
  }
}
</style>
