(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f09d1"],{"9cb3":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"loginUp"},[s("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",staticStyle:{width:"380px"},attrs:{model:e.ruleForm2,"status-icon":"",rules:e.rules2}},[s("el-form-item",{attrs:{"label-width":"100px",prop:"u_name"}},[s("el-input",{attrs:{placeholder:"用户名",type:"u_name",autocomplete:"off"},model:{value:e.ruleForm2.u_name,callback:function(t){e.$set(e.ruleForm2,"u_name",t)},expression:"ruleForm2.u_name"}})],1),s("el-form-item",{attrs:{"label-width":"100px",prop:"u_pass"}},[s("el-input",{attrs:{placeholder:"密码",type:"u_pass",autocomplete:"off"},model:{value:e.ruleForm2.u_pass,callback:function(t){e.$set(e.ruleForm2,"u_pass",t)},expression:"ruleForm2.u_pass"}})],1),s("el-form-item",{attrs:{"label-width":"100px",prop:"u_passto"}},[s("el-input",{attrs:{placeholder:"请再次输入密码进行验证",type:"u_passto",autocomplete:"off"},model:{value:e.ruleForm2.u_passto,callback:function(t){e.$set(e.ruleForm2,"u_passto",t)},expression:"ruleForm2.u_passto"}})],1),s("el-form-item",{attrs:{"label-width":"100px"}},[s("el-button",{attrs:{type:"success"},on:{click:function(t){e.loginIn("ruleForm2")}}},[e._v("注册")]),s("el-button",{attrs:{type:"success"},on:{click:function(t){e.loginUp()}}},[e._v("已有账号,登录")])],1)],1)],1)},r=[],u=(s("175c"),s("bc97"),s("a5be"),{data:function(){var e=this,t=function(t,s,o){""==s?o(new Error("请再次输入密码")):s!==e.ruleForm2.u_pass?o(new Error("两次密码输入不一致")):o()};return{ruleForm2:{u_name:"",u_pass:"",u_passto:""},rules2:{u_name:[{required:!0,message:"用户名不能为空"}],u_pass:[{required:!0,message:"密码不能为空"},{min:6,max:16,message:"密码最少为6位,最大为16位"},{pattern:/^[\x01-\x7f]*$/,message:"傻逼,密码不能为汉字"}],u_passto:[{validator:t}]}}},methods:{loginUp:function(){this.$router.push("/")},loginIn:function(e){this.$router.push({path:"/"})}}}),l=u,a=s("25c1"),n=Object(a["a"])(l,o,r,!1,null,null,null);n.options.__file="loginUp.vue";t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0f09d1.c411879e.js.map