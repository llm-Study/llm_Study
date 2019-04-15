<template>
  <div class="user">
    <el-form
      ref="userfrom"
      v-loading="Lodaing"
      element-loading-text="发布中,请稍等"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.6)"
      :model="userfrom"
    >
      <el-form-item prop="article_name" :rules="[{required:true,message:'请输入标题'}]">
        <label for>标题</label>
        <el-input v-model="userfrom.article_name"></el-input>
      </el-form-item>
      <el-form-item prop="article_content" :rules="[{required:true,message:'请输入你要发布的内容'}]">
        <label>正文</label>
        <quill-editor
          @change="onEditorChange($event)"
          v-model="userfrom.article_content"
          :options="editorOption"
        ></quill-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Submission('userfrom')">发布帖子</el-button>
      </el-form-item>
    </el-form>
    <input type="text" v-model="num">
    <button @click="add()">add</button>
    <button @click="addasync()">add async</button>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import api from "../../api/axios";
export default {
  copmonents: {
    quillEditor
  },
  data() {
    return {
      num: "",
      status: "",
      Lodaing: false,
      userfrom: {
        article_name: "",
        article_content: "",
        u_id: ""
      },
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "link", "strike"],
            [{ script: "sub" }, { script: "super" }],
            ["blockquote", "code-block"]
          ]
        }
      }
    };
  },
  mounted() {
    // function foo(callback){
    //   console.log(222)
    //   callback(bar)
    // }
    // function bar(){
    //   console.log(111)
    // }
    // foo(bar);
    console.log(this.$router);
    this.userfrom.u_id = this.$store.state.user.u_id;
    this.status = this.$store.state.user.status;
  },
  methods: {
    add() {
      for (let i = 0; i < 1000000; i++) {
        this.num = i;
      }
    },
    addasync() {
      this.num = 0;
      function addnum() {
        this.num = (this.num++);
        if (this.num < 1000000) {
          setTimeout(addnum, 0);
        }
      }
      addnum();
    },
    onEditorChange({ editor, html, text }) {
      console.log({ editor, html, text });
      this.content = html;
    },
    Submission(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.status == 1) {
            api.addarticle(this.userfrom).then(res => {
              this.Lodaing = true;
              setTimeout(() => {
                this.Lodaing = false;
                this.$message({
                  type: "success",
                  message: "发布成功"
                });
                this.$refs[formName].resetFields();
              }, 2000);
            });
          } else {
            this.$message({
              type: "error",
              message: "不好意思,您被管理员禁止发布文章了"
            });
          }
        }
      });
    }
  }
};
</script>