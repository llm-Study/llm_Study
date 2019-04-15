<template>
  <div class="header">
    <el-col :span="24">
      <h1 style="text-align:center">test</h1>
    </el-col>
    <el-col :span="4">
      <el-menu
        router
        unique-opened
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        background-color="#545c64"
        active-text-color="#ffd04b"
        text-color="white"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户操作</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/header">添加用户</el-menu-item>
          <el-menu-item index="/login">用户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>其余操作</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" disabled="" >待开发</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      </el-menu>
    </el-col>
    <el-col :span="19">
      <el-main>
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-col>
  </div>
</template>
<style>
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
    return {
      activeIndex: this.$route.path
    };
  },
  methods: {
    handleSelect(index) {
      this.activeIndex = index;
      console.log(this.activeIndex);
    }
  }
};
</script>