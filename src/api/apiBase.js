import $axios from './axios'
const HOST = ''

// mockTest1
export function getMock1 () {
  const url = HOST + '/apis/example'
  return $axios.get(url)
}
// mockTest2
export function getMock2 (data) {
  const url = HOST + '/apis/add'
  return $axios.post(url, data)
}
