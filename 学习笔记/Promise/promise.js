const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class Promise {
  constructor(exector) {
    // 传入参数错误
    if (typeof exector !== "function") {
      throw new TypeError(`Promise resolver ${exector} is not a function`);
    }
    this.initValue();
    this.initBind();

    try {
      exector(this.resolve, this.reject);
    } catch (e) {
      this.reject(e);
    }
  }
  // 初始化
  initValue() {
    this.state = PENDING;
    this.value = null;
    this.reason = null;
  }
  // 改变this指向
  initBind() {
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
  }
  // pending->fulfilled回调
  resolve(value) {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;
    }
  }
  // pending -> rejected回调
  reject(reason) {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.reason = reason;
    }
  }
  then(onFulfilled, onRejected) {
    // 参数校验
    if (typeof onFulfilled !== "function") {
      onFulfilled = function (value) {
        return value;
      };
    }
    if (typeof onRejected !== "function") {
      onRejected = function (reason) {
        throw reason;
      };
    }

    if (this.state === FULFILLED) {
      setTimeout(() => {
        onFulfilled(this.value);
      });
    }
    if (this.state === REJECTED) {
      setTimeout(() => {
        onRejected(this.reason);
      });
    }
  }
}
module.exports = Promise;
