<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadcurmbList||[]" :key="index">
        <span class="link" @click="jumpHandler(item)">{{item.name}}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    breadcurmbList() {
      return this.$store.state.breadcurmb.list;
    }
  },
  mounted() {},
  methods: {
    jumpHandler(item) {
      let sameIndex = -1;
      let list = this.$store.state.breadcurmb.list;
      list.forEach((item1, index) => {
        if (item1.url == item.url) {
          sameIndex = index;
        }
      });
      if (sameIndex > -1) {
        list = list.slice(0, sameIndex + 1);
      }
      this.$store.dispatch("updateBreadCurmbList", list);
      this.$router.push({
        path: item.url,
        query: item.query
      });
    }
  }
};
</script>
<style lang="scss">
.breadcrumb {
  .el-breadcrumb {
    padding: 20px 24px;
    background: #fff;
    .link:hover{
      cursor: pointer;
    }
  }
  a {
    color: rgba(0, 0, 0, 0.45);
    font-weight: 400;
  }
  .breadcrumb-name {
    padding: 0 24px 16px;
    background: #fff;
    font-size: 20px;
    font-weight: 700;
  }
}
</style>

