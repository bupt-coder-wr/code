const axios = require('axios')
const basePath = 'http://jsonplaceholder.typicode.com'

function getUserCount() {
  return axios.get(basePath + '/users')
}
function getUserPermissions() {
  return axios.get(basePath + '/posts');
}

// axios中的all()方法，传入一个数组，数组元素即为函数调用，函数中即为请求调用。
// 然后，then()回调方法中调用axios自己的spread()方法。
axios.all([getUserCount(), getUserPermissions()])
  .then(axios.spread(function (act, perms) {
    console.log(act)
    console.log(perms)
  }))