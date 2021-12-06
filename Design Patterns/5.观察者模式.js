// 订阅-发布模式
const msgCenter = (function () {
  const _msg = {}
  /**
   * _msg = {
   *    'carInfo': ['p1.alreadyRegister.carInfo','p2.alreadyRegister.carInfo'],
   *    'newsInfo': []
   *  }
   */
  return {
    // 订阅消息
    register(type, fn) {
      if (_msg[type]) {
        _msg[type].push(fn)
      } else {
        _msg[type] = [fn]
      }
    },
    // 发布消息
    fire(type, args) {
      if (!_msg[type]) {
        return
      }
      const event = {
        type: type,
        args: args || {},
      }
      for (let i = 0; i < _msg[type].length; i++) {
        _msg[type][i](event)
      }
    },
    // 取消订阅消息
    cancel(type, fn) {
      if (!_msg[type]) {
        return
      }
      for (let i = 0; i < _msg[type].length; i++) {
        if (_msg[type][i] === fn) {
          _msg[type].splice(i, i)
          break
        }
      }
    },
  }
})()

function Person() {
  this.alreadyRegister = {}
}

Person.prototype.register = function (type, fn) {
  if (this.alreadyRegister[type]) {
    console.log('this msg has registried')
  }
  msgCenter.register(type, fn)
  this.alreadyRegister[type] = fn
}

Person.prototype.cancel = function (type) {
  msgCenter.cancel(type, this.alreadyRegister[type])
  delete this.alreadyRegister[type]
}

const p1 = new Person()
const p2 = new Person()
const p3 = new Person()

p1.register('carInfo', function (e) {
  console.log('p1得到了关于', e.type, '的信息， 消息内容是：', e.args.info)
})
p1.register('newsInfo', function (e) {
  console.log('p1得到了关于', e.type, '的信息， 消息内容是：', e.args.info)
})
p2.register('carInfo', function (e) {
  console.log('p2得到了关于', e.type, '的信息， 消息内容是：', e.args.info)
})
p3.register('carInfo', function (e) {
  console.log('p3得到了关于', e.type, '的信息， 消息内容是：', e.args.info)
})
p3.register('newsInfo', function (e) {
  console.log('p3得到了关于', e.type, '的信息， 消息内容是：', e.args.info)
})

msgCenter.fire('carInfo', { info: 'new car' })
msgCenter.fire('newsInfo', { info: 'lalalallal' })
