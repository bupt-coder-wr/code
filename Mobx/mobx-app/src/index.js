import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {
  observable,
  action,
  makeAutoObservable,
  computed,
  autorun,
  configure,
  runInAction,
  when,
  reaction,
} from 'mobx'

/**
 * 1. 初始化 mobx 仓库
 * 2. 在组件中使用 mobx 容器状态
 * 3.
 */
// 用于配置 mobx
configure({
  // 该属性让store的属性只能被action修改，否则进行报错
  enforceActions: 'observed',
})

class Store {
  constructor() {
    makeAutoObservable(this)
  }
  // 响应式属性
  @observable count = 5
  @observable price = 10

  // 用于定义修改响应式属性的方法，且属性只应该被action修饰的方法修改
  // 这里的bound用于绑定this，方式this的丢失
  @action.bound increment() {
    this.count++
  }

  // 计算属性，当依赖属性发生改变，自动调用，具有缓存效果
  @computed get totalPrice() {
    return this.count * this.price
  }

  // 异步调用的第一种方式，在setTimeOut里放入同步action
  @action.bound asyncChange() {
    setTimeout(() => {
      this.change()
    }, 200)
  }
  @action.bound change() {
    this.count = 99
  }
}
const store = new Store()

// 默认会执行一次
// 当内部依赖属性发生改变，自动执行 autorun 方法，
autorun(() => {
  //   console.log("autorun", store.count, store.price);
})

// 可以不调用action，来对属性进行修改,相当于提供一个action环境
runInAction(() => {
  store.count = 20
})
// 接受两个函数参数，第一个参数为触发条件，第二个参数为触发时执行的操作
// 每个when只执行一次，不会多次指向
// 如果一开始就满足条件，会直接执行
when(
  () => {
    return store.count > 100
  },
  () => {
    console.log('when =>', store.count)
  }
)

// 不同于autorun 和when
// 只有当被观测的数据发生改变的时候，才会执行，先执行第一个函数，然后讲返回值传递给第二个函数作为参数
// 不同与when ，会频繁触发
reaction(
  // 执行一些业务逻辑操作，返回数据给下一个函数使用
  () => {
    console.log('reaction 1 =>', store.count)
    return store.count
  },
  (data, prevVal, reaction) => {
    console.log('reaction 2 =>data', data)
    console.log('reaction 2 =>prevVal', prevVal)
    // 手动停止当前 reaction 的监听
    // reaction.dispose();
  }
)
store.change()

ReactDOM.render(<App store={store} />, document.getElementById('root'))
