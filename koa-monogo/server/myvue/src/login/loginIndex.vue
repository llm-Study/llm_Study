<template>
  <div class="loginIndex">
    <el-row type="flex" justify="center" :gutter="10">
      <el-col class="loginForm"  :xs="20" :sm="16" :md="10" :lg="8">
        <img src="../assets/logo.png" alt style="width:100%;height:130px;">
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>
<style>
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
.loginIndex {
  background-image: url("../assets/bg.jpg");
  background-size: 100% 100%;
  height: 100%;
}
.loginForm {
  background-color: gainsboro;
  opacity: 0.7;
  border-radius: 10px;
  margin-top: 202px;
}
</style>

<script>
export default {};
</script>