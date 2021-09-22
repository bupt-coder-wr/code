const Observer = function (data) {
  if (!data || typeof data !== "object") {
    return;
  }
  for (let key in data) {
    defineReactive(data, key);
  }
};

function defineReactive(obj, key) {
  let value = obj[key];
  const dep = new Dep();

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log("get value");
      // 调用依赖收集器中的addSub，用于收集房钱属性与Watcher中的依赖关系
      dep.depend();
      return value;
    },
    set(newValue) {
      console.log("set value");
      if (newValue === value) {
        return;
      }
      value = newValue;
      observe(newValue)
      // 通知依赖收集器，更新每个需要更新的Watcher
      dep.notify();
    },
  });
}
const observe = function (data) {
  return new Observer(data);
};

class Vue {
  constructor(options) {
    const self = this;
    if (options && typeof options === "function") {
      this._data = options.data.apply(this);
    }
    this.mount = function () {
      new Watcher(self, selt.render);
    };
    this.render = function () {
    };
    observe(this._data);
  }
}

class Watcher {
  constructor(vm, fn) {
    const self = this;
    this.vm = vm;
    Dep.target = this;

    this.addDep = function (dep) {
      dep.addSub(self);
    };
    this.update = function () {
      fn();
    };

    this.value = fn();
    Dep.target = null;
  }
}

class Dep {
  constructor() {
    const self = this;
    this.target = null;
    this.subs = [];

    this.depend = function () {
      if (Dep.target) {
        Dep.target.addDep(self);
      }
    };
    this.addSub = function (watcher) {
      self.subs.push(watcher);
    };
    this.notify = function () {
      for (let i = 0; i < self.subs.length; i++) {
        self.subs[i].update();
      }
    };
  }
}
