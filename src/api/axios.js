import $axios from 'axios'
import Qs from 'qs'

$axios.default.timeout = 30000

// 请求拦截器
$axios.interceptors.request.use(config => {
  // 请求之前代码...
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
$axios.interceptors.response.use(response => {
  // 响应之前执行代码
  return response.data
}, error => {
  if (error.response) {
    switch (error.response.states) {
      case 401:
        // 代码
        break
    }
  }
  return Promise.reject(error.response)
})

// 封装get,post方法
export default {
  post (url, data) {
    return $axios({
      method: 'post',
      url,
      data: Qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  get (url, params) {
    return $axios({
      method: 'get',
      url,
      params
    })
  }
}
