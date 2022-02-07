# React 相关面试题

1. react `setState` 是同步还是异步？  
   在 React 的合成事件和钩子函数中为异步的，在 setTimeOut 和 setInterval 以及原生事件里为同步执行的

2. React 的事件合成机制

   > https://juejin.cn/post/6844903988794671117

   - 合成事件：onClick={() => this.handle()}
   - 原生事件：addEventListener('click', () => {}, false)

   解决的问题：消除了不同浏览器之间的影响，减少了内存消耗  
   特点：

   1. React 上注册的事件统一绑定在 document 节点上
   2. React 自身实现了一套冒泡机制，我们的 `event.stopPropagation()` 无效
   3. React 通过使用事件池的形式管理事件对象的创建和销毁，提高性能

3. 虚拟 Dom 和 diff 算法

   > https://segmentfault.com/a/1190000019994425

   首先使用 `createElement` API 对页面进行 `JavaScript` 对象描述，当页面发生改变时，对新的页面结构重新生成虚拟 Dom。  
   diff 算法就是比较新旧两个结构对象的差异，然后重新渲染差异部分的过程。

   - tree diff

     react 将传统 diff 算法的事件复杂度由 O(n^3)优化为 O(n),采取的方法为只对同层的 Dom 节点做比较。存在的问题是当节点进行跨层移动，此时不会进行移动而是全部进行替换。

   - component diff

     如果组件名发生改变，则整个组件将会被直接替换
     同类型的组建会进行虚拟 Dom 的比较
     React 提供了 shouldComponentUpdate 决定是否更新

   - element diff

     首次渲染，diff 算法直接返回  
     都是字符串形式并不同，对文字内容进行差异记录  
     同种标签并且 key 相同，对属性和 child 节点进行比较，在 child 节点进行比较的过程是一个递归的过程  
     否则，全部进行替换
     比较完后，会将差异值进行返回
     最后进行视图的更新，这个过程还是一个递归的过程，根据记录的差异，对 dom 做不同的操作

4. 如何将 `redux` 数据持久化？

   使用 `redux-persist` 插件
