const axios = require('axios')
axios({
  methods: 'post',
  url: 'http://jsonplaceholder.typicode.com/users',
  data: {
    name: 'wr'
  }
})
  .then(function (responce) {
    let data = responce.data;
    console.log(data)
  })
  .catch(function (error) {
    console.log(error)
  })