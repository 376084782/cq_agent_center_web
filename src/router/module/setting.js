import spinRoute from "../pageLoader";

const Main = resolve => {
  spinRoute.show();
  require(["@/page/main/main.vue"], spinRoute.resolve(resolve));
};

const policy = resolve => {
  spinRoute.show();
  require(["@/view/policy/list/index.vue"], spinRoute.resolve(resolve));
}

const Test = resolve => {
  spinRoute.show();
  require(["@/view/testPage/index.vue"], spinRoute.resolve(resolve));
};

export const setting = {
  path: "/",
  component: Main,
  children: [{
    component: policy,
    path: '/policy'
  },{
    component:Test,
    path:'/test'
  }]
};