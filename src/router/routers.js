import spinRoute from "./pageLoader";

const Login = resolve => {
  spinRoute.show();
  require(["@/page/login/login.vue"], spinRoute.resolve(resolve));
};
const Forget = resolve => {
  spinRoute.show();
  require(["@/page/forget/forget.vue"], spinRoute.resolve(resolve));
};

import {setting} from './module/setting'
export default [
  {
    name: "login",
    path: "/login",
    component: Login,
    meta: {
      title: "登录",
      noLogin: true
    }
  },
  {
    name: "forget",
    path: "/forget",
    component: Forget,
    meta: {
      title: "忘记密码",
      noLogin: true
    }
  }
].concat(setting);
