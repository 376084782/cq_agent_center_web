// 引入自定义组件
import pagination from './pagination.vue'
import pdfReader from './pdfReader.vue'
import CountDown from './countdown.vue'
const Common = {
  install: function (Vue) {
    Vue.component('pagination', pagination)
    Vue.component('pdfReader', pdfReader)
    Vue.component('CountDown', CountDown)
  }
}
// 导出
export default Common