<template>
  <div class="login">
    <el-col :span="19">
      <el-form label-width="110px" :model="loginForm" ref="loginForm">
        <el-form-item label="邮箱">
          <el-input v-model="loginForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" plain @click="login('loginForm')">登录</el-button>
          <el-button type="primary" plain @click="loginUp()">注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>
<script>
import api from "../../api/api";
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    loginUp() {
      this.$router.replace({ path: "/loginUp" });
    },
    login(loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          api.loginUser(this.loginForm).then(res => {
            switch (res.code) {
              case 1:
                this.$message({
                  type: "error",
                  message: "账号不存在"
                });
                break;
              case 2:
                this.$message({
                  type: "error",
                  message: "密码错误"
                });
                break;
              case 0:
                this.$message({
                  type: "success",
                  message: "登陆成功"
                });
                this.$router.replace({path:'/HomeIndex'})
                break;
            }
          });
        }
      });
    }
  }
};
</script>
