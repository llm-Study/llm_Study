<template>
  <div class="loginIndex">
    <el-row type="flex" justify="center">
      <el-col :span="8" style="background-color:#CFCFCF;border-radius:3%">
        <img src="./assets/logo.png" alt style="width:120px;height:100px;">
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>
<style>
.loginIndex {
  width: 100%;
  background: url("./assets/timg.jpg") no-repeat;
  padding: 249.5px 0;
  background-size: cover;
  overflow: hidden;
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
  mounted() {
  },
}
</script>