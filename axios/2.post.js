// post请求axios.post(url[, data[, config]])
const axios = require('axios')
axios.default.basePath = 'http://jsonplaceholder.typicode.com/'
axios.post('/users', {
  firstname: 'wang',
  lastname: 'run'
})
  .then(function (response) {
    let data = response.data
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
