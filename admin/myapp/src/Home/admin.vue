<template>
  <div class="user">
    <el-table :data="tableData" border style="width: 100%" >
      <el-table-column prop="u_id" label="用户ID" width="100" align="center"></el-table-column>
      <el-table-column prop="u_name" label="用户名" width="200" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.u_name"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="禁言状态" width="200" align="center">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status">未禁言</el-button>
          <el-button type="danger" v-else>禁言中</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="changeLang(scope.row)" type="danger" v-if="scope.row.status">开启禁言</el-button>
          <el-button @click="changeLang(scope.row)" type="primary" v-else>关闭禁言</el-button>
          <el-button @click="update(scope.row)">修改信息</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import api from "../../api/axios";
export default {
  data() {
    return {
      tableData: [],
      value: ""
    };
  },
  created() {
    this.getusers();
  },
  methods: {
    update(row) {
      console.log(row)
      if (row.status == true) {
        row.status = 1;
      } else {
        row.status = 0;
      }
      let Obj = {};
      Obj.u_name = row.u_name;
      Obj.status = row.status
      Obj.u_id = row.u_id;
      api.updateuser(Obj).then(res => {
        console.log(res)
        if(res.message){
          window.location.reload() 
        }
      });
    },
    changeLang(row) {
      return (row.status = !row.status);
    },
    getusers() {
      api.getuserList().then(res => {
        console.log(res);
        this.tableData = res.data;
      });
    }
  }
};
</script>