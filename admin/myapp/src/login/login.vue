<template>
  <div class="index">
    <el-col :span="10" :offset="7">
      <el-form
        :model="ruleForm2"
        status-icon
        style="margin:0 auto"
        ref="ruleForm2"
        :rules="rules2"
        class="demo-ruleForm"
      >
        <el-form-item label-width prop="u_name">
          <el-input placeholder="用户名" type="u_name" v-model="ruleForm2.u_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label-width prop="u_pass">
          <el-input placeholder="密码" type="u_pass" v-model="ruleForm2.u_pass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label-width>
          <el-button type="success" @click="login('ruleForm2')">登录</el-button>
          <el-button type="primary" @click="loginIn('ruleForm2')">立即注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>

<script>
import api from "../../api/axios";
export default {
  data() {
    return {
      ruleForm2: {
        u_name: "",
        u_pass: ""
      },
      rules2: {
        u_name: [{ required: true, message: "用户名不能为空" }],
        u_pass: [
          { required: true, message: "密码不能为空" },
          { min: 6, max: 16, message: "密码最少为6位,最大为16位" },
          {
            pattern: /^[\x01-\x7f]*$/, //正则
            message: "密码不能为汉字"
          }
        ]
      }
    };
  },
  methods: {
    loginIn() {
      this.$router.push({ path: "/loginUp" });
    },
    login(formName) {
      console.log(this.$route);
      this.$refs[formName].validate(valid => {
        if (valid) {
          api.postuser(this.ruleForm2).then(res => {
            console.log(res);
            if (res.data.length != 0) {
              this.$message({
                message: "登陆成功",
                type: "success",
                duration: 2000,
                onClose: () => {
                  sessionStorage.setItem("$Set", res.data[0]);
                  this.$store.commit("$Set", res.data[0]);
                  if (res.data[0].admin == 1) {
                    this.$router.push({ path: "/home" });
                  } else {
                    this.$router.push({ path: "/userInfo" });
                  }
                }
              });
            } else {
              this.$message({
                message: "账号与密码不一致,请重新输入",
                type: "error"
              });
            }
          });
        } else {
          this.$message({ message: "登录失败,请重新输入", type: "error" });
        }
      });
    },
    loginUp() {
      this.$router.push({ path: "/loginUp" });
    }
  },
  mounted(){
    async function f(resolve){
      return 1111
    }
    f().then(v=>{
      console.log(v)
    })
  }
};
</script>
