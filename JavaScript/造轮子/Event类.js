/**
  - ES6 创建类
  - 自定义事件机制 
  - on 添加事件监听
  - off 取消事件监听
  - once 事件只执行一次
  - trigger 执行事件
 */
class EventEmitter {
  constructor() {
    /**
     * {
     *    event1: [cb1, cb2, cb3],
     *    event2: [cb2, cb4]
     * }
     */
    this.events = {};
  }
  // 订阅事件
  on(event, cb) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    if (!this.events[event].includes(cb)) {
      this.events[event].push(cb);
    }
    return this;
  }
  off(event, cb) {
    if (!cb) {
      this.events[event] = null;
    } else {
      this.events[event] = this.events[event].filter((fn) => fn !== cb);
    }
    return this;
  }
  once(event, cb) {
    const func = (...args) => {
      cb.apply(this, args);
      this.off(event, func);
    };
    this.on(event, func);
    return this;
  }
  emit(event, ...args) {
    const cbs = this.events[event];
    if (!cbs) {
      throw new Error(`${event} event is not registered`);
    }
    cbs.forEach((cb) => cb.apply(this, args));
    return this;
  }
}

let ee = new EventEmitter();
function a() {
  console.log("a");
}
function b() {
  console.log("b");
}
function c() {
  console.log("c");
}
function d(...a) {
  console.log("d", ...a);
}
// ee.on("TEST1", a).on("TEST2", b).once("TEST2", c).on("TEST2", d);

// ee.emit("TEST1");
// console.log("....");
// ee.emit("TEST2");
ee.once("TEST1", a);
// In test2
// In test2 again
// console.log("....");
ee.emit("TEST1");
console.log("....");
ee.emit("TEST1");
ee.emit("TEST1");
