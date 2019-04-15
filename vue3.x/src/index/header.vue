<template>
  <div id="header">
    <el-col :span="16">
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="姓名" prop="u_name">
          <el-input type="text" v-model="ruleForm2.u_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="u_pass">
          <el-input type="password" v-model="ruleForm2.u_pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="u_phone">
          <el-input type="number" v-model="ruleForm2.u_phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>
<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>

<script>
// swiper options example:
import api from "../../api/axios";
import { mapState } from "vuex";
var reg = /^1[3|4|5|7|8][\d]\d{8}$/;
var regs = /^[1-9][0-9]{4,11}$/;
export default {
  data() {
    var name = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var phoneS = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入电话号码"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        u_name: "",
        u_pass: "",
        u_phone: ""
      },
      rules2: {
        u_name: [{ validator: name, trigger: "blur" }],
        u_pass: [{ validator: validatePass, trigger: "blur" }],
        u_phone: [{ validator: phoneS, trigger: "blur" }]
      }
    };
  },
  created: function() {},
  methods: {
    submitForm() {
      api.postaddlist(this.ruleForm2).then(res => {
        console.log(res);
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>