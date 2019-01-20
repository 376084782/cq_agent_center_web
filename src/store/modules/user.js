import { dateFormater, getParams, getToken, setToken } from "@/libs/util";
import router from "@/router";
const userInfo = {
  state: {
    name: "用户"
  },
  mutations: {
    setAccess(state, access) {}
  },
  actions: {
    logTimeout() {
      // 用户登录过期
      setToken("");
      router.push({
        path: "/login"
      });
      console.log(2222);
    },
    login({ state }, data) {
      if (!data) {
        throw new Error("用户名或密码错误!");
      }
      localStorage.userInfo = JSON.stringify(data);
      let token = data["token"];
      let userInfo = data["human"] || {};
      let userName = userInfo["humanName"];
      state.name = userName;
      setToken(token);
    },
    getUserInfo({ state }, data) {
      let info = JSON.parse(localStorage.userInfo);
      let userInfo = info["human"] || {};
      let userName = userInfo["humanName"];
      state.name = userName;
    },
    logout({ state, commit }) {
      return new Promise((resolve, reject) => {
        commit("setToken", {
          token: ""
        });
        commit("setAccess", "");
        commit("setHasGetInfo", false);
        resolve();
      });
    }
  },
  getters: {
    name: state => state.name
  }
};
export default userInfo;
