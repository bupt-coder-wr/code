const axios = require('axios')
// 当需要处理多台服务器内容时，可以创建实例，指定作业对象
let exp1 = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/',

});
exp1.get('/users').then(Response => {
  console.log(Response);
});