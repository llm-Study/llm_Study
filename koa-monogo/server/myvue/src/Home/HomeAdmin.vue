<template>
  <div class="Admin">
    <el-table :data="UserTable" border style="100%">
      <el-table-column prop="name" label="用户"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="create_time" label="创建时间">
        <template slot-scope="scope">{{FormDate(scope.row.create_time)}}</template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status == 1" type="success">未违规</el-button>
          <el-button v-else type="danger">违反规定,禁言中</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="Prohibit(scope.row)" type="danger">禁用</el-button>
          <el-button @click="Enable(scope.row)" type="success">启用</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import api from "../../api/api";
export default {
  data() {
    return {
      router: this.$router.options.routes,
      UserTable: new Array()
    };
  },
  created() {
    this.getUserList();
  },
  mounted() {},
  methods: {
    getUserList() {
      api.getUserList().then(res => {
        this.UserTable = res;
      });
    },
    FormDate(date) {
      const datetime = new Date(date);
      let Y = datetime.getFullYear();
      let M = datetime.getMonth() + 1;
      let D = datetime.getDate();
      let h = datetime.getHours();
      let m = datetime.getMinutes();
      if (m < 10) {
        m = "0" + m;
      }
      let s = datetime.getSeconds();
      if (s < 0) {
        s = "0" + s;
      }
      return Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s;
    },
    Prohibit(rows) {
      if (rows.status == 1)
        this.$confirm("确定禁言该用户吗?", "提示", {
          ButtonTrue: "确定禁言",
          ButtonFalse: "取消",
          type: "warning",
          center: true
        })
          .then(() => {
            const loading = this.$loading({
              lock: true,
              text: "Loading",
              spinner: "el-icon-loading",
              background: "rgba(0, 0, 0, 0.7)"
            });
            rows.status = 0;
            this.$message({
              type: "success",
              message: "该用户已被禁言"
            });
          })
          .catch(() => {
            this.$message({
              message: "已取消"
            });
          });
    },
    Enable(rows) {
      rows.status = 1;
    }
  }
};
</script>