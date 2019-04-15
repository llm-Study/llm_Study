<!------------注册与登录的父组件----------->
<template>
  <div class="logindex">
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style>
.logindex {
  width: 100%;
  background: url("../assets/timg.jpg") no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
  height: 100%;
}
.router-link-active {
  text-decoration: none;
}
.el-container {
  height: 100% !important;
}

/**缓缓进来的过程**/
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    height() {
      document.getElementsByClassName(".logindex").style.height =  window.screen.availHeight + "px";
    }
  }
};
</script>