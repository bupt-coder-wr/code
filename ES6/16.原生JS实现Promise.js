const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function myPromise(fn) {
  const self = this;
  self.state = PENDING;
  self.value = null;
  self.resolvedCallback = []; //用于保存then中的回调
  self.rejectedCallback = [];

  // resolve函数
  function resolve(value) {
    if (value instanceof myPromise) {
      return value.then(resolve, reject);
    }
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = RESOLVED;
        self.value = value;
        self.resolvedCallback.map(cb => cb(self.value))
      }
    }, 0)
  }

  // reject函数
  function reject(value) {
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = REJECTED;
        self.value = value;
        self.rejectedCallback.map(cb => cb(self.value))
      }
    }, 0)

  }

  try { //执行传入Promise的函数
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

// 实现.then()方法，添加在原型
myPromise.prototype.then = function (onFulfilled, onRejected) {
  const self = this;
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }
  if (self.state === PENDING) {
    return (promise2 = new myPromise((resolve, reject) => {
      self.resolvedCallback.push(() => {
        try {
          const x = onFulfilled(self.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })
      self.rejectedCallback.push(() => {
        try {
          const x = onRejected(self.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })
    }))
  }
  if (self.state === RESOLVED) {
    return (promise2 = new myPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          const x = onFulfilled(self.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch (reason) {
          reject(reason)
        }
      })
    }))
  }
  if (self.state === REJECTED) {
    onRejected(self.value)
  }

  function resolutionProcedure(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError('Error'))
    }
  }
}