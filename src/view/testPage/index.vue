<template>
  <el-card class="mgTop24 pd24">
    <el-form>
      <el-form-item label="上传地址">
        <el-input v-model="uploadUrl"></el-input>
      </el-form-item>
    </el-form>
    <el-upload class="upload-demo" :action="uploadUrl" multiple :limit="3" :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

    <el-form>
      <el-form-item label="验证码地址">
        <el-input v-model="codeUrl"></el-input>
      </el-form-item>
    </el-form>
    <img :src="codeUrl" alt="">
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      uploadUrl: "",
      fileList: [],
      codeUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2241666278,698607827&fm=27&gp=0.jpg'
    };
  }
};
</script>

