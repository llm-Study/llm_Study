<template>
  <el-row class="Home" ref="Home">
    <el-header>
      <div style="width:60px;height:100%;float:right"></div>
    </el-header>
    <el-row>
      <el-col :span="4" class="aside" :xs="24" :md="5" :sm="6">
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
            v-if="!item.hidden&&item.admin!=0"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group v-for="child in item.children">
              <el-menu-item :index="child.path">{{child.name}}{{child.path}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>

      <el-col :span="20" :xs="24" :md="19" :sm="18">
        <el-main style="padding:0">
          <transition name="slide-fade" mode="out-in">
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
          </transition>
        </el-main>
      </el-col>
    </el-row>
  </el-row>
</template>
<style>
.home {
  background: #545c64;
}
.aside {
  height: 100%;
  position: relative;
}
.el-submenu__title {
  background-color: #edf0f5;
  color: #48576a;
}
.el-header,
.el-footer {
  background-color: deepskyblue;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  /* background-color: #eef1f6; */
  color: #a9c3c1;
  text-align: center;
  line-height: 200px;
  /* position: absolute; */
}

body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
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
  mounted() {
    console.log(this.$route);
    // console.log(this.$store)
  }
};
</script>