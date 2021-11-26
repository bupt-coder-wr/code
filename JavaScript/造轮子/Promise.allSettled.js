function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  )
}
Promise.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    // 校验入参
    if (!Array.isArray(promises)) {
      return reject(new TypeError("argumentsmust be an array"))
    }
    let promiseCount = 0
    let promiseLength = promises.length
    let results = Array(promiseLength)

    function commonScript(status, val, index) {
      promiseCount++
      let obj = {
        status
      }
      if (status === "fulfilled") obj.value = val
      if (status === "rejected") obj.reason = val

      results[index] = obj
    }
    promises.forEach((item, index) => {
      let curPromise = item
      // 判断每个item项是否为 promise
      if (!isPromise(curPromise)) {
        curPromise = Promise.resolve(curPromise)
      }
      curPromise.then(
        val => {
          commonScript("fulfilled", val, index)
          if (promiseCount === promiseLength) {
            return resolve(results)
          }
        },
        reason => {
          commonScript("rejected", reason, index)
          if (promiseCount === promiseLength) {
            return resolve(results)
          }
        }
      )
    })
  })
}
// 测试用例：
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p1 reject")
  }, 2000)
})
let p2 = Promise.resolve("p2 success")
let p3 = "p3"
Promise.myAllSettled([p1, p2, p3]).then(res => {
  console.log(res)
})
