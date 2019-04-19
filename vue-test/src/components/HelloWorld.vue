<template>
  <div class="hello">
    <div>{{msg}}</div>
    <div>{{this.$store.state.user}}</div>
    <input type="text" ref="name"><br/>
    <input type="text"><br/>
    <button @click="play()">clik</button><br/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "你好呀"
    };
  },
  beforeCreate() {
    console.log(
      "创建前状态beforeCreate:" + this.$el + ";" + this.$data + ";" + this.msg
    );
    console.log(this.$el);
    console.log(this.$data);
  },
  created() {
    console.log(
      "属性已绑定,DOM未生成,$el属性还不存在created:" +
        this.$el +
        ";" +
        this.$data +
        ";" +
        this.msg
    );
    console.log(this.$el);
    console.log(this.$data);
  },
  beforeMount() {
    console.log(
      "模板挂载之前beforeMount:" + this.$el + ";" + this.$data + ";" + this.msg
    );
    console.log(this.$el);
    console.log(this.$data);
  },
  mounted() {
    console.log(
      "模板挂在之后mounted:" + this.$el + ";" + this.$data + ";" + this.msg
    );
    console.log(this.$el);
    console.log(this.$data);
  },
  beforeUpdate() {
    console.log("组件更新之前" + this.$el + ";" + this.$data + ";" + this.msg);
  },
  updated() {
    console.log("组件更新之后" + this.$el + ";" + this.$data + ";" + this.msg);
  },
  methods:{
    play(){
      this.msg = 'yes I do';
      localStorage.setItem('user',this.$refs.name.value)
      this.$store.commit('add',this.$refs.name.value)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
