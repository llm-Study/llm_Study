<template>
  <div class="HomeIndex">
    <el-header class="header"></el-header>
    <el-row>
      <el-col :span="3">
        <el-menu
          :default-active="$route.path"
          unique-opened
          router
          class="el-menu-vertical-demo asideson"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu
            index="1"
            v-for="(item,index) in this.$router.options.routes"
            v-if="!item.hidden"
          >
          <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group v-for="child in item.children">
              <el-menu-item :index="child.path">{{child.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
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
  },
  methods: {}
};
</script>