const dictionary = {
  state: {
    selectList: {}
  },
  mutations: {
    setAccess(state, access) {},
  },
  actions: {
    logout({
      state,
      commit
    }) {
      return new Promise((resolve, reject) => {
        commit('setToken', {
          token: ''
        })
        commit('setAccess', '')
        commit('setHasGetInfo', false)
        resolve()
      })
    },
  },
  getters: {
    getOptionListByType: (state) => (type, withNone = false) => {
      if (!state.selectList[type]) {
        Vue.set(state.selectList, type, []);
      }
      let list = state.selectList[type].concat();
      if (withNone) {
        list.unshift({
          key: '-1',
          value: '无'
        })
      }
      return list;
    }
  }
}
export default dictionary;