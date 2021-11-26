/**
 * Promise.race 特点：
 * 1. 入参为数组，每一项为一个promise
 * 2. 返回值为 promise
 */
function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  )
}
Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    // 入参校验
    if (!Array.isArray(promises)) {
      return reject("argument must be array")
    }
    promises.forEach(item => {
      let curPromise = item
      if (!isPromise(curPromise)) {
        curPromise = Promise.resolve(item)
      }
      curPromise.then(
        value => {
          return resolve(value)
        },
        error => {
          reject(error)
        }
      )
    })
  })
}

// 测试用例：
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error")
  }, 2000)
})
let p2 = Promise.resolve("p2 success")
Promise.myRace([p1, p2]).then(
  val => {
    console.log(val)
  },
  error => {
    console.log(error)
  }
)
