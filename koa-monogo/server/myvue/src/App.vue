<template>
  <div id="app" ref="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  mounted() {
    this.Height();
  },
  methods: {
    Height() {
      document.getElementById("app").style.height =
        document.documentElement.clientHeight + "px";
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
