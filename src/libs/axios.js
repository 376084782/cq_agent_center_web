import axios from 'axios'
import store from '@/store'
import {
  dateFormater,
  getParams,
  getToken,
  setToken
} from '@/libs/util'
// import { Spin } from 'iview'

let deviceCode = 1121212
const addErrorLog = errorInfo => {
  const {
    statusText,
    status,
    request: {
      responseURL
    }
  } = errorInfo
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
  if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
}

class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() {
    let params = getParams(window.location.href);
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'session-token': getToken(),
      }
    }
    return config
  }
  destroy(url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      const {
        data,
        status,
        headers
      } = res
      return {
        data,
        status,
        headers
      }
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      if (!errorInfo) {
        const {
          request: {
            statusText,
            status
          },
          config
        } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: {
            responseURL: config.url
          }
        }
      }
      return Promise.reject(error)
    })
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    let request = instance(options);
    return new Promise((res, rej) => {
      request.then(({
        status,
        data,
        headers
      }) => {
        let code = data.code;
        let msg = data['message'];
        if (code == 2) {
          // 用户登录过期
          store.dispatch('logTimeout')
        } else if (code == 0) {
          res(data.data);
        } else {
          let errData = {
            code: code,
            message: decodeURIComponent(msg)
          };
          rej(errData)
        }
      }).catch((e) => {
        console.warn(e)
        rej({
          message: '网络错误'
        })
      })
    })
  }
}
export default HttpRequest