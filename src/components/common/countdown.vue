<template>
  <span>{{detailTime}}</span>
</template>
<script>
import moment from "moment";
import { timeFormater } from "@/libs/util";
export default {
  props: ["endTime"],
  data() {
    return {
      timer: null,
      sec: 0
    };
  },
  computed: {
    detailTime() {
      if (this.sec > 0) {
        return timeFormater(this.sec, "d天 hh:mm:ss");
      } else {
        return "超时" + timeFormater(-this.sec, "d天 hh:mm:ss");
      }
    }
  },
  mounted() {
    let endTime = new Date(this.endTime.replace(/\-/g, "/")).getTime();
    let nowTime = new Date().getTime();
    let offset = Math.floor((endTime - nowTime) / 1000);
    this.sec = offset;
    this.timer = setInterval(() => {
      this.sec--;
    }, 1000);
  },
  destroyed() {
    // 组件删除时清空定时器
    clearInterval(this.timer);
  },
  methods: {
    timeFormater
  }
};
</script>

