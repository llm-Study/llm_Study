<template>
  <div class="loginUp">
    <el-col :span="22">
      <el-form label-width="110px" :model="registerForm" ref="registerForm" :rules="rules">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="registerForm.email"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="registerForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="registerForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkpassword">
          <el-input v-model="registerForm.checkpassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" plain @click="register('registerForm')">注册</el-button>
          <el-button type="primary" plain @click="login()">已有账号,登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>
<script>
import api from "../../api/api";

export default {
  data() {
    var checkpass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("密码不一致,请重新输入"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        email: "",
        name: "",
        password: ""
      },
      rules: {
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkpassword: [{ validator: checkpass, trigger: "blur" }]
      }
    };
  },
  methods: {
    register(registerForm) {
      this.$refs[registerForm].validate(valid => {
        if (valid) {
          api.addUserApi(this.registerForm).then(res => {
            switch (res.code) {
              case 0:
                this.$message({
                  type: "success",
                  message: "邮箱注册成功"
                });
                break;
              case 1:
                this.$message({
                  type: "warning",
                  message: "邮箱已被注册"
                });
                break;
            }
          });
        }
      });
    },
    login() {
      this.$router.replace({ path: "/" });
    }
  }
};
</script>