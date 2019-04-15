<template>
  <div class="register">
    <el-col :xs="20" :md="20" :sm="20" :lg="20">
      <div id="from2">
        <el-form :rules="rules2" :model="ruleForm2" ref="ruleform2" label-width="80px">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm2.email"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm2.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="passwordtow">
            <el-input type="password" v-model="ruleForm2.passwordtow"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register('ruleform2')">注册账号</el-button>
            <el-button type="success" @click="login()">已有账号,登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </div>
</template>
<style>
.register {
  width: 420px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  margin-top: -160px;
  left: 0px;
}
.el-form-item__label {
  color: rgb(108, 141, 55);
}
</style>
<script>
import api from "../../api/axios";
export default {
  data() {
    let checkpass = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.password) {
        callback(new Error("两次密码输入不一致"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        email: "",
        u_pass: "",
        passwordtow: ""
      },
      rules2: {
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur"
          },
          {
            // pattern: /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
            type:'email',
            message: "邮箱格式不正确",
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
        ],
        passwordtow: [
          {
            required: true,
            validator: checkpass
          }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$router.push({ path: "/" });
    },
    register(fromName) {
      let data = {};
      data.password = this.ruleForm2.password;
      data.email = this.ruleForm2.email;
      this.$refs[fromName].validate(valid => {
        if (valid) {
          api.postusers(data).then(res => { 
            if (res.code == 200) {
              this.$message({
                type: "success",
                message: res.message 
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
    }
  }
};
</script>