<template>
  <div id="app">
   
    <div id="nav">
          <router-link to="/"><img src="https://fontmeme.com/permalink/180824/575eeec72fdc66ff99b88b0da1122505.png" alt="pixel-fonts" border="0"></router-link>

    </div>
    <router-view/>
  </div>
</template>


<script>
export default {};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background-color: black;
}
#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
