<template>
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
          <b-nav-text>
            <a href="" @click.prevent="logout">Logout</a>
          </b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>

export default {
  name: 'Header',
  methods: {
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('Authorization')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  height: 40px;
  padding-left: 50px;
}
</style>
