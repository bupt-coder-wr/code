const axios = require('axios')
// 请求地址：http://jsonplaceholder.typicode.com/users
// get请求axios.get(url[, config])

// get方法为默认方法
// axios('url') 默认为get方法
axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/';
axios
  .get('/users')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);

  })
  .catch(function (error) {
    console.log(error)
  })