<template>
  <el-card class="mgTop24 pd24">
    <div class="top-flex-area">
      <span>政策法规</span>
      <div>
        <el-button size="mini" type="primary" @click="searchHandler">查询</el-button>
        <el-button size="mini" @click="resetHandler">重置</el-button>
      </div>
    </div>
    <div class="common-table mgTop10">
      <table>
        <tr>
          <td width="177" class="title">标 题</td>
          <td width="368">
            <el-input size="mini"></el-input>
          </td>
          <td width="177" class="title">法规类别</td>
          <td width="368">
            <el-input size="mini"></el-input>
          </td>
        </tr>
        <tr>
          <td class="title">上传时间</td>
          <td colspan="3">
            <el-date-picker size="mini"></el-date-picker>
          </td>
        </tr>
      </table>
    </div>
    <el-table class="mgTop24 list-table" :data="list">
      <el-table-column label="序号" type="index"></el-table-column>
      <el-table-column width="500" label="标题" prop="title"></el-table-column>
      <el-table-column label="法规类别" prop="type"></el-table-column>
      <el-table-column label="上传时间" prop="date"></el-table-column>
      <el-table-column label="操作" prop="index">
        <template slot-scope="scope">
          <el-button type="text" @click="seeDetail(scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :total="pageData.total"
      :current-page.sync="pageData.pageIndex"
      :size="pageData.pageSize"
      @onPageChange="onPageChange"
    ></pagination>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          title: "国务院总理温家宝关于深化投资体制改革工作的重要批示",
          type: "国家法律法规",
          date: "2018-10-24"
        }
      ],
      data: {},
      pageData: {
        total: 0,
        pageSize: 10,
        pageIndex: 1
      }
    };
  },
  mounted() {
    this.$store.dispatch("updateBreadCurmbList", [
      {
        name: "政策法规",
        url: this.$route.path
      },
      {
        name: "政策法规查询",
        url: this.$route.path
      }
    ]);
  },
  methods: {
    onPageChange(page) {},
    seeDetail(data) {
      let routeData = {
        name: "政策法规查看",
        url: "/policy/detail",
        query: {}
      };
      this.$store.dispatch("addBreadCurmbList", routeData);
      this.$router.push({
        path: "/policy/detail"
      });
    },
    searchHandler() {},
    resetHandler() {}
  }
};
</script>

