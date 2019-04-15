<template>
<div class="about">
    <el-form :model="loginForm" ref="loginForm" :rules="rules" label-width="100px" class="demo-dynamic">
  <el-form-item
    prop="phone"
    label="电话号码">
    <el-row>
        <el-col :span='15'>
          <el-input v-model.number="loginForm.phone"></el-input>
        </el-col>
        <el-col :span='9'>
          <el-button type="primary" :disabled="disabled"  @click="go">{{btx}}</el-button>
        </el-col>
     <el-col>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        </el-col>
    </el-row>
  </el-form-item>
</el-form>
  <el-button type="primary" :loading="loading" @click="lodaing">{{text}}</el-button>
  <p>{{test1}}</p>
  <p>{{num}}</p>
  <input type="text" v-model="Num1">
  <p>{{Num1}}</p>
</div>
</template>
<script>
let reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
var isPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入电话号码"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入正确的11位手机号码"));
      }
    };
export default {
  data() {
    return {
      loginForm: {
        phone: ""
      },
      text: "点击",
      value3: null,
      time: 0,
      str: "",
      test1: "",
      num: "",
      Num1:1,
      price:200,
      btx: "获取验证码",
      disabled: false,
      loading: false,
      rules: {
        phone: [{ required: true, trigger: "blur", validator: isPhone }],
      }
    };
  },
  methods: {
    go() {
      if (this.loginForm.phone == "") {
        this.callback("请输入电话号码");
      } else if (!reg.test(this.loginForm.phone)) {
        this.callback("请输入正确的11位手机号码");
      } else {
        this.time = 60;
        this.disabled = true;
        this.timer();
      }
    },
    callback(text) {
      this.$message.error({
        type: "denger",
        message: text
      });
    },
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btx = this.time + "s后重新发送";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btx = "获取验证码";
        this.disabled = false;
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.go();
          // alert("正确");
        } else {
          this.go();
          // alert("错误");
          return false;
        }
      });
    },
    gotext() {
      var a = Math.floor(Math.random() * 10);
      // this.test1 = a;
      // console.error(a+'     '+this.test1);
      return a;
    },
    lodaing() {
      // console.log(screen.availWidth)//屏幕宽度
      // console.log(screen.availHeight)//屏幕高度
      // console.log(location.hostname)//当前窗口的域名
      // console.log(location.pathname)//当前页面路径
      // console.log(location.port)//主机的端口
      // console.log(location.protocol)//返回web协议(http://或者https://)
      this.test1 = this.gotext();
      this.text = "加载" + this.test1 + "s";
      this.loading = true;
      setTimeout(() => {
        this.text = "点击";
        this.loading = false;
      }, this.test1 * 1000);
      this.num = this.test1 > 5 ? "大于5" : "小于5"; //三目运算
    }
  }
};
</script>