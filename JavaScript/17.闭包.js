// 原函数
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
} //5 5 5 5 5

//第一种解决：使用立执行函数
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j)
    }, 1000)
  })(i)
} //0 1 2 3 4 

//第二种解决：使用settimeout的第二个参数
for (var i = 0; i < 5; i++) {
  setTimeout((j) => {
    console.log(j)
  }, 1000, i)
} //0, 1, 2, 3, 4

// 第三种解决：使用 let
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  },1000)
}