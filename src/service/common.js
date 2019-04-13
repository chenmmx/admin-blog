import axios from 'axios'

axios.interceptors.request.use(function (config) {
  // console.log('request', config)
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  // console.log('response', response)
  return response
}, function (error) {
  return Promise.reject(error)
})

export function handleService (url, data, method = 'get') {
  if (method === 'get') {
    return axios({
      url: url,
      params: data,
      method: method
    })
  } else {
    return axios({
      url: url,
      data: data,
      method: method
    })
  }
}
