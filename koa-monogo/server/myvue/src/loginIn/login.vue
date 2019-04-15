<template>
  <div class="login">
    <el-col :xs="20" :md="20" :sm="20" :lg="20">
      <div id="from">
        <el-form :rules="rules" :model="ruleForm" ref="ruleform" label-width="80px">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="login()">登录</el-button>
            <el-button type="primary" @click="register()">注册账号</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </div>
</template>
<style>
.login {
  width: 420px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  margin-top: -100px;
  left: 0px;
  height:200px;
}
.el-form-item__label {
  color: rgb(108, 141, 55);
}
</style>
<script>
import api from "../../api/axios";
export default {
  data() {
    return {
      ruleForm: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 18,
            message: "请输入6-18位的密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.ruleform.validate(valid => {
        if (valid) {
          api.login(this.ruleForm).then(res => {
            if (res.code == 200) {
              this.$message({
                type: "success",
                message: res.message,
                duration: 2000,
                onClose: () => {
                  this.$router.push({ path: "/register" });
                }
              });
            } else if (res.code == 500) {
              this.$message({
                type: "error",
                message: res.message
              });
            }
          });
        }
      });
    },
    register() {
      this.$router.push({ path: "/register" });
    }
  }
};
</script>