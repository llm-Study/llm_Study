<template>
  <div class="HomeIndex">
    <el-header class="header"></el-header>
    <el-row>
      <el-col :span="3">
        <el-menu
          v-for="item in this.router"e
          v-if="this.router.hidden"
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          {{item}}
          <!-- <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>-->
        </el-menu>
      </el-col>
      <el-col :span="21">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.header {
  background-color: #104e8b;
  opacity: 0.8;
  color: gray;
}
.el-menu-item {
  min-width: 0 !important;
}
</style>
<script>
export default {
  data() {
    return {
      router: this.$router.options.routes
    };
  }
};
</script>