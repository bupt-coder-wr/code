const axios = require('axios')

let myInterceptor = axios.interceptors.request.use(config => {  // 请求拦截器
  // Do something before request is sent
  return config;
}, error => {
  // Do something with request error
  return Promise.reject(error);
});

axios.interceptors.request.eject(myInterceptor);  // 删除拦截器

axios.interceptors.response.use(response => { // 响应拦截器
  // Do something before response is sent
  return response;
}, error => {
  // Do something with response error
  return Promise.reject(error);
});