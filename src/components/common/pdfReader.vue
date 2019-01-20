<template>
  <el-dialog title="查看" width="1100px" :visible="visible" @update:visible="toggle">
    <object :data="url" type="application/pdf" width="100%" height="600px">
      您的浏览器暂不支持在线查看，请点击下方链接下载后查看。
      <a :href="url">下载</a>
    </object>
  </el-dialog>
</template>
<script>
export default {
  props: ["visible", "url"],
  methods: {
    toggle(flag) {
      this.$emit("update:visible", flag);
    }
  }
};
</script>

