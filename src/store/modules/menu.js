const menuList = {
  state: {
    list: [{
        title: "项目管理",
        icon: "home-fill",
        subMenu: [{
            title: "权力事项受理",
            path: "/QLSX"
          },
          {
            title: "项目信息查询",
            path: "/XMXX"
          },
          {
            title: "备案录入",
            path: "/BALR"
          },
          {
            title: "审批录入",
            path: "/SPLR"
          },
          {
            title: "备案变更",
            path: "/BABG"
          },
          {
            title: "窗口项目调整",
            path: "/CKXMTZ"
          },
          {
            title: "项目结转(延期)",
            path: "/XMJZ"
          },
          {
            title: "项目信息维护",
            path: "/XMXXWH"
          },
          {
            title: "服务联系单管理",
            path: "/FWLXD"
          },
          {
            title: "窗口核准变更",
            path: "/CKHZBG"
          },
          // {
          //   title: "外网申报受理",
          //   path: "/no"
          // }
        ]
      },
      {
        title: "年度计划管理",
        icon: "folder",
        subMenu: [{
          title: "市批项目年度计划",
          path: "/SPXM"
        }]
      },
      {
        title: "项目统计",
        icon: "book",
        subMenu: [{
            title: "项目数据统计",
            path: "/XMSJTJ"
          },
          {
            title: "项目明细统计",
            path: "/XMMXTJ"
          },
          {
            title: "楼宇经济项目明细统计",
            path: "/LYMXTJ"
          }
        ]
      },
      {
        title: "政策法规",
        icon: "calendar",
        subMenu: [{
          title: "政策法规查询",
          path: "/policy/Index"
        }]
      },
      {
        title: "网站公告",
        icon: "lock",
        subMenu: [{
            title: "网站公告查询",
            path: "/announce/search"
          },
          {
            title: "网站公告管理",
            path: "/announce/manager"
          }
        ]
      },
      {
        title: "密码设置",
        icon: "lock",
        subMenu: [{
            title: "时间设置",
            path: "/changeTime"
          },
          {
            title: "人员权限设置",
            path: "/roleList"
          },
          {
            title: "密码设置",
            path: "/changePsw"
          }
        ]
      }
    ]
  },
  mutations: {
    setMenu(state, data) {
      state.mainList = data;
    }
  },
  actions: {
  },
  getters: {
    menuList: state => state.list,
    listSysFile: state => state.listSysFile
  }
};
export default menuList;