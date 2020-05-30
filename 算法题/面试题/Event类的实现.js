class Event {
  constructor() {
    this.obj = {
      /*
      {
        click:[fn1,fn2],
        mouseover:[fn3,fn4]
      }
      */
    };
  }

  /**
   * 增加事件监听
   * @param {事件类型} type
   * @param {处理方法} handler
   */
  on(type, handler, once = false) {
    if (!this.obj[type]) {
      this.obj[type] = [];
    }
    if (!this.obj[type].includes(handler)) {
      this.obj[type].push(handler);
      handler.once = once;
    }
  }

  /**
   * off 取消事件监听
   * @param {要取消的事件类型} type
   * @param {要取消的处理方法，不传为取消所有} handler
   */
  off(type, handler) {
    if (this.obj[type]) {
      if (handler === undefined) {
        this.obj[type] = [];
      } else {
        this.obj[type] = this.obj[type].filter(f => f !== handler);
      }
    }
  }
  
  /**
   * trigger 执行函数
   * @param {要执行那个类型的函数} type
   * @param {事件对象} eventData
   * @param {this执行} point
   */
  trigger(type, eventData = {}, point = this) {
    if (this.obj[type]) {
      this.obj[type].forEach(f => {
        f.call(point, eventData);
        if (f.once) {
          this.off(type.f);
        }
      });
    }
  }

  /**
   * once 只执行一次
   * @param {事件类型} type
   * @param {要执行的函数} handler
   */
  once(type, handler) {
    this.on(type, handler, false);
  }
}

let e = new Event();
e.on("click", () => {
  console.log(1);
});
e.on("click", () => {
  console.log(2);
});
function fn3() {
  console.log(3);
}
e.on("click", fn3);
console.log(e);
