<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/signin">Sigin</router-link> |
      <router-link to="/post">post</router-link> |
      <router-link to="/put">put and get </router-link> |
      <router-link to="/user-list">user list </router-link> 
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@import './assets/styles/_buttons.scss';

</style>
