<template>
  <div class="login">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="u_id" label="Id" width="180"></el-table-column>
      <el-table-column prop="u_name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="u_phone" label="手机号"></el-table-column>
      <el-table-column prop="operation" label="基本操作">
        <template slot-scope="{row}">
          <el-button type="primary" @click.native="modify(row)" icon="el-icon-edit">修改</el-button>
          <el-button type="danger" @click.native="Delete(row)" icon="el-icon-delete">删除</el-button>
          <el-button type="info" icon="el-icon-delete">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import api from "../../api/axios";
import axios from "axios";
export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      api.getdatauserlist().then(res => {
        this.tableData = res;
      });
    },
    Delete(row, index) {
      api.postdeletedatalist(row).then(res => {
        location.reload();
      });
    }
  }
};
</script>
