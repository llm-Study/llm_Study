<template>
  <div class="loginUp">
    <el-form
      :model="ruleForm2"
      status-icon
      style="width:380px"
      ref="ruleForm2"
      :rules="rules2"
      class="demo-ruleForm"
    >
      <el-form-item label-width="100px" prop="u_name">
        <el-input placeholder="用户名" type="u_name" v-model="ruleForm2.u_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label-width="100px" prop="u_pass">
        <el-input placeholder="密码" type="u_pass" v-model="ruleForm2.u_pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label-width="100px" prop="u_passto">
        <el-input
          placeholder="请再次输入密码进行验证"
          type="u_passto"
          v-model="ruleForm2.u_passto"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label-width="100px">
        <el-button type="success" @click="loginIn('ruleForm2')">注册</el-button>
        <el-button type="success" @click="loginUp()">已有账号,登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import api from "../../../api/axios";
export default {
  data() {
    var checkpass = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.u_pass) {
        callback(new Error("两次密码输入不一致"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        u_name: "",
        u_pass: "",
        u_passto: ""
      },
      rules2: {
        u_name: [{ required: true, message: "用户名不能为空" }],
        u_pass: [
          { required: true, message: "密码不能为空" },
          { min: 6, max: 16, message: "密码最少为6位,最大为16位" },
          {
            pattern: /^[\x01-\x7f]*$/, //正则
            message: "傻逼,密码不能为汉字"
          }
        ],
        u_passto: [{ validator: checkpass }]
      }
    };
  },
  methods: {
    loginUp() {
      this.$router.push("/");
    },
    loginIn(formName) {
      this.$router.push({ path: "/" });
      //   let Obj = {};
      //   Obj.u_name = this.ruleForm2.u_name;
      //   Obj.u_pass = this.ruleForm2.u_passto;
      //   this.$refs[formName].validate(valid => {
      //     if (valid) {
      //       api.postuser(Obj).then(res => {
      //         if (res.message) {
      //           this.$message({
      //             type: "success",
      //             message: "注册成功,欢迎" + Obj.u_name,
      //             onClose: () => {
      //             }
      //           });
      //         }
      //       });
      //     } else {
      //       this.$message({
      //         type: "error",
      //         message: "注册失败"
      //       });
      //     }
      //   });
    }
  }
};
</script>
