# 原生 AJAX

## 原生 JS 创建 Ajax

```javascript
// 1. 创建 XMLHttpRequest()对象
const xhr = new XMLHttpRequest()

// 2. 请求数据
xhr.open('get', 'getStar.php', true)

// 3. 创建回调函数
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && [200, 304].includes(xhr.status)) {
    console.log(ajax.responseText)
  } else {
    console.log('AJAX交互失败')
  }
}

// 4. 设置请求的 HTTP 头部信息(这是请求头)
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

// 5. 发送请求
xhr.send()
```

## XMLHttpRequest 常见属性和方法

- 属性
  - readyState:
    0 -- 代表未初始化
    1 -- 代表正在加载
    2 -- 代表加载已完成
    3 -- 代表正在交互
    4 -- 代表交互完成
  - onreadystatechange —— 指定当发生任何状态变化时(readyState 的属性值发生改变)的事件处理函数。
  - responseText —— 客户端接收到的 HTTP 响应文本内容
  - status —— 描述服务器返回的 HTTP 状态代码
  - statusText -- 服务器返回的 HTTP 状态代码文本
- 方法
  - abort() -- 停止当前请求
  - getAllResponseHeaders() —— 获取 HTTP 请求的所有响应的头部（获取所有的请求头）
  - getResponseHeaders() —— 获取指定 HTTP 请求的响应的头部（获取指定的请求头）
  - open(arg1,arg2,arg3)
    arg1 —— 请求的类型，get 或者 post
    arg2 —— 文件路径或者接口地址
    arg3 —— true 或者 false, true 代表异步，false 代表同步
  - send() —— 将请求发送到服务器
  - setRequestHeader() -- 设置请求的 HTTP 头部信息(这是请求头)

## 封装 Ajax

```javascript
const Ajax = {
  get: function (url, fn) {
    let xhr = new XMLHttpRequest()
    xhr.open('get', url, true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && [200, 304].includes(xhr.status)) {
        fn.call(this, responseText)
      } else {
        console.error('some error')
      }
    }
    xhr.send()
  },
  post: function (url, data, fn) {
    let xhr = new XMLHttpRequest()
    xhr.open('post', url, true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && [200, 304].includes(xhr.status)) {
        fn.call(this, responseText)
      } else {
        console.error('some error')
      }
    }
    xhr.send(data)
  },
}
```
