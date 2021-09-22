// 数据劫持 part
class Observer {
  constructor(data) {
    if (data === null || typeof data !== "object") {
      return;
    }
    this.data = data;
    this.walk();
  }
  walk() {
    Object.keys(this.data).forEach((item) => {
      defineReactive(this.data, key, this.data[key]);
    });
  }
}
function defineReactive(obj, key, value) {
  // 嵌套
  observe(value);
  const dep = new Dep();
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 收集依赖
      dep.depend();
      return value;
    },
    set(newValue) {
      if (newValue === value) {
        return;
      }
      value = newValue;
      dep.notify();
      observe(newValue);
    },
  });
}

const observe = function (data) {
  return new Observer(data);
};

class Vue {
  constructor(options) {
    if (options && options.data) {
      this._data = options.data.apply(this);
    }
    observe(this._data);
  }
  mount() {}
  render() {}
}
class Watcher {
  constructor(fn) {
    Dep.target = this;
    this.value = fn();
    Dep.target = null;
  }
  // 更新操作
  update() {
    fn();
  }
}
// 收集依赖
class Dep {
  constructor() {
    this.subs = [];
  }
  depend() {
    if (Dep.target) {
      this.addSub(Dep.target);
    }
  }
  notify() {
    const subs = [...this.subs];
    subs.forEach((item) => {
      item.update();
    });
  }
  addSub(sub) {
    this.subs.push(sub);
  }
}
