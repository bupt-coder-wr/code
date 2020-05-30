setTimeout(() => {
  console.log('settimeout')  // 5
});
var id = setInterval(() => {
  console.log('setInterval')
})
Promise.resolve(function () {
  console.log('resolved')  //3
})
new Promise(function (resolve, reject) {
  console.log('promise')  // 1
  resolve()
}).then(function () {
  console.log('promise-then')  //4
})
console.log('console-log')  // 
clearInterval(id)