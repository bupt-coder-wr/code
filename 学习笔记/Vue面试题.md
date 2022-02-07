# Vue 面试题

1. Vue 数据双向绑定的实现

   > https://juejin.cn/post/6844903854740340749

   Vue 数据双向绑定使用过数据劫持和订阅发布相结合实现的

   在 `Vue 2.x` 中数据劫持是通过 `Object.defineProperty()` 来实现， `Vue 3.x` 则是通过 `Proxy` 来实现。

   ```javascript
   let data = { name: 'Tars' }
   observe(data)
   data.name = 'Run'

   function observe(data) {
     if (!data || typeof data !== 'object') return
     // 取出所有属性进行遍历
     Object.keys(data).forEach(key => {
       defineReactive(data, key, data[key])
     })
   }

   function defineReactive(data, key, val) {
     // 对子属性进行监听
     observe(val)
     Object.defineProperty(data, key, {
       enumerable: true,
       configurable: false,
       get() {
         return val
       },
       set(newVal) {
         console.log('监听到了数值变化', val, '=>', newVal)
         val = newVal
       },
     })
   }
   ```

   完成数据监听后，现在就是监听到变化后通知订阅者，所以需要实现一个消息订阅器，维护一个数组，用来收集订阅者，数据变动触发 notify，再调用订阅者的 update 方法

   ```javascript
   // ... 略
   function defineProperty(data, key, val) {
     let dep = new Dep()
     // 对子属性进行监听
     observe(val)
     Object.defineProperty(data, key, {
       // ...略
       set(newVal) {
         if (val === newVal) return
         console.log('监听到了数值变化', val, '=>', newVal)
         val = newVal
         dep.notify() // 通知所有订阅者
       },
     })
   }

   function Dep() {
     this.subs = []
   }
   Dep.prototype = {
     addSub(sub) {
       this.subs.push(sub)
     },
     notify() {
       this.subs.forEach(sub => {
         sub.updata()
       })
     },
   }
   ```

   订阅者应该是 `Watcher` 而且 `var dep = new Dep()`;是在 `defineReactive` 方法内部定义的，所以想通过 `dep` 添加订阅者，就必须要在闭包内操作，所以我们可以在 `getter` 里面动手脚

   ```javascript
   // Observer.js
   // ... 略
   Object.defineProperty(data, key, {
     get() {
       // 由于需要在闭包内添加watcher，所以通过Dep定义一个全局target属性，暂存watcher, 添加完移除
       Dep.target && dep.addDep(Dep.target)
       return val
     },
   })
   // Watcher.js
   Watcher.propertype = {
     get(key) {
       Dep.target = this
       this.value = data[key] // 这里会触发属性的getter，从而添加订阅者
       Dep.target = null
     },
   }
   ```
