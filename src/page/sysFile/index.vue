<template>
  <div class="app-sys theme-dark">
    <header>
      <div class="top-menu">
        <div
          v-for="(item, index) in topMenu"
          :key="index"
          @click="jump(item,index)"
          :class="{active:index==activeIndex}"
        >
          <span>
            <i :class="`anticon icon-${item.icon}`"></i>
            {{item.name}}
          </span>
        </div>
      </div>
      <el-dropdown @command="handleCommand" class="right">
        <div class="right">
          <div class="avatar"></div>
          <span>{{name}}</span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </header>
    <div class="main-content">
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/css/common/theme-dark.scss";
import "./index.scss";
import {
  setToken
} from '@/libs/util'
export default {
  computed: {
    name() {
      return this.$store.state.user.name;
    }
  },
  data() {
    return {
      topMenu: [
        {
          icon: "project",
          name: "项目查询",
          url: "/projectSearch"
        },
        {
          icon: "folder-open",
          name: "文件查询",
          url: "/fileSearch"
        }
      ],
      activeIndex: 0
    };
  },
  components: {},
  methods: {
    handleCommand(type) {
      if (type == "exit") {
        setToken("");
        this.$router.push({ path: "/login" });
      }
    },
    jump(data, index) {
      this.activeIndex = index;
      this.$router.push({
        path: data.url
      });
    },
    handleSelect() {}
  }
};
</script>
