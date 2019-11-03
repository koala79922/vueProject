<template>
  <footer >
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand>Footer</b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-text>
            聯絡我~
            </b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </footer>
</template>

<script>

export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer{
  position: absolute;
  box-sizing: border-box;
  width:100%;
  padding-left: 50px;
  margin-bottom: -50px;
}
</style>
