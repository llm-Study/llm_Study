<template>
  <div class="Home">
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-swipe :autoplay="1500">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" width="100%" height="200px">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import api from "../../../api/axios";
export default {
  data() {
    return {
      images:[],
      value:''
    };
  },
  methods: {
    getList() {
      api.get().then(res => {
        for(var i = 0;i<res.length;i++){
            this.images.push(res[i].img_url)
        }
      });
    },
    onSearch(){}
  },
  mounted() {
    this.getList();
  }
};
</script>