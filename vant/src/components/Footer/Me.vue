<template>
  <div class="Me">
    <van-cell @click="gouser" value="个人主页" is-link>
      <template slot="title">
        <span class="custom-text">{{user_name}}</span>
      </template>
    </van-cell>
  </div>
</template>
<script>
import api from '../../../api/axios'
export default {
  data() {
    return {
      user_name: "未登录"
    };
  },
  methods: {
    gouser() {
       api.post()
    }
  }
};
</script>
