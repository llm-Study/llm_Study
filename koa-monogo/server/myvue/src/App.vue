<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  overflow: hidden;
  height:100%
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.loadingHeight();
  },
  methods: {
    loadingHeight() {
      console.log(this.$router)
      var orderHight = window.screen.availHeight;
      document.getElementById('app').style.height = orderHight+'px'
    }
  }
};
</script>