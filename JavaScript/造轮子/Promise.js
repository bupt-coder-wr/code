class MyPromise {
  constructor(executor) {
    // Promise 状态
    this.status = "PENDING"
    // Promise 成功的值
    this.value = undefined
    // Promise 失败的原因
    this.reason = undefined
    // 成功回调
    this.onResolvedCallbacks = []
    // 失败回调
    this.onRejectedCallbacks = []

    let resolve = value => {
      if (this.status === "PENDING") {
        this.status = "FULFILLEN"
        this.value = value
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    let reject = reason => {
      if (this.status === "PENDING") {
        this.status = "REJECTED"
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  then(onFulfilled, onRejected) {
    let newPromise = new MyPromise((resolve, reject) => {
      if (this.status === "FULFILLED") {
        setTimeout(() => {
          onFulfilled(this.value)
        })
      }
      if (this.status === "REJECTED") {
        setTimeout(() => {
          onRejected(this.reason)
        })
      }
      // 加入代执行的 任务栈
      if (this.status === "PENDING") {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            onFulfilled(this.value)
          })
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            onRejected(this.reason)
          })
        })
      }
    })
    return newPromise
  }
}

// 测试用例
let p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("success")
  }, 1000)
})
p.then(res => {
  console.log(res)
})
