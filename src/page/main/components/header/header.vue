<template>
  <header class="app-header">
    <span class="title">{{date}} 欢迎您：{{name}}</span>
    <span class="btn">
      <i class="anticon icon-question-circle"></i> 帮助
    </span>
    <span class="btn" @click="logout">
      <i class="anticon icon-poweroff"></i> 退出
    </span>
  </header>
</template>
<script>
import {
  setToken
} from '@/libs/util'
import moment from "moment";
moment.locale("zh-cn");
import mapGetters from 'vuex'
export default {
  computed:{
    name(){
      return this.$store.state.user.name
    }
  },
  data() {
    return {
      date: moment().format("YYYY年MM月DD日 dddd HH:mm:ss")
    };
  },
  mounted() {
    setInterval(() => {
      this.date = moment().format("YYYY年MM月DD日 dddd HH:mm:ss");
    }, 1000);
  },
  components: {
  },
  methods:{
    logout() {
      setToken("");
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
