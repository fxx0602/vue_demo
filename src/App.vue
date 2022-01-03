<template>
  <div id="app" :style="{height: allheight+'px'}">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y:hidden;
}
</style>

<script>
export default {
  data () {
    return {
      allheight: window.innerHeight
    }
  }
}
</script>
