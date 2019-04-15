<template>
  <div class="Fooetr">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop" to="/">首頁</van-tabbar-item>
      <van-tabbar-item icon="chat" to="/Case">文案</van-tabbar-item>
      <van-tabbar-item icon="records" to="/Me">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import api from "../../../api/axios";
export default {
  data() {
    return {
      active:0
    };
  },
  methods:{}
};
</script>