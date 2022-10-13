<template>
  <div>
    <nav>
      <NavbarComp/>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import NavbarComp from './components/NavbarCopm.vue'

export default {
  name: 'App',
  components: {
    NavbarComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
