new Promise(function (resolve, reject) {
  resolve();
})
  .then(console.log(1))
  .catch(console.log(2));
