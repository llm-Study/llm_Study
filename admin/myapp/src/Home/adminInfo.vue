<template>
  <div class="adminInfo">
    <el-table :data="tableData2" border style="width: 100%">
      <el-table-column prop="article_uname" label="发布用户" width="180"></el-table-column>
      <el-table-column prop="article_time" label="发布时间" width="180"></el-table-column>
      <el-table-column prop="article_name" label="发布标题"></el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button>查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import api from '../../api/axios'
export default {
  data() {
    return {
      tableData2: []
    };
  },
  mounted() {
    this.getarticle();
  },
  methods: {
    getarticle() {
      api.selarticle().then(res => {
        this.tableData2 = res.data
      });
    }
  }
};
</script>