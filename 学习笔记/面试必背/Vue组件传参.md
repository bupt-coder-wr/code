// https://juejin.cn/post/6844903887162310669#comment

- props / $emit

父=>子： props
子=>父：$emit

- `$parent` `$children`

$parent 获取到的为对象，根 Vue 实例的父元素为 undefined
$children 获取到的为数组

- provide / inject

非相应式

- ref / refs
- eventBus

$emit发送事件，$on 接受事件，$off 取消事件

- Vuex

state => data
getters => computed
mutations => methods 使用 commit 触发
actions => 异步 mutation 使用 dispatch 触发
modules => 将 store 模块化

- localStorage / sessionStorage

window.localStorage.setItem(key,value)
window.localStorage.getItem(key)

- $attrs / $listeners
