/**
 * Promise.all 特点：
 * 1. 接受一个数组，每个 item 是一个promise
 * 2. 如果元素不是 Promise 对象，则使用 Promise.resolve 转成 Promise 对象
 * 3. 返回一个新的promise
 * 4. 等所有promise resolve 后 resolve 一个数组
 * 5. 如果有一个reject，则promise 直接终止，返回一个reject的promise对象
 */
function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  )
}
Promise.myAll = function (promises) {
  // 判断 Promise
  // 返回一个 Promise
  return new Promise((resolve, reject) => {
    // 校验入参
    if (!Array.isArray(promises)) {
      return reject(new TypeError("argumentsmust be an array"))
    }
    let promiseCount = 0
    let promiseLength = promises.length
    let results = new Array(promiseLength)
    promises.forEach((item, index) => {
      let curPromise = item
      // 非promise 使用Promise.resolve 进行包装
      if (!isPromise(curPromise)) {
        curPromise = Promise.resolve(item)
      }
      curPromise.then(
        value => {
          promiseCount++
          results[index] = value
          // 全部 promise resolve后，返回结果
          if (promiseCount === promiseLength) {
            return resolve(results)
          }
        },
        error => {
          reject(error)
        }
      )
    })
  })
}

// 测试用例：
let p1 = Promise.resolve("1 success")
let p2 = new Promise(resolve => {
  setTimeout(() => {
    resolve("p2 success")
  }, 2000)
})
let p3 = "success"
Promise.myAll(1).then(
  res => {
    console.log(res)
  },
  error => {
    console.log(error)
  }
)
