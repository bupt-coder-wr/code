/**
 * 闭包定义： 是指内部函数总是可以访问其所在的外部函数中声明的变量和参数，即使在其外部函数被返回（寿命终结）了之后。
 */
// 原函数
const fn1 = () => {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  } //5 5 5 5 5 一秒后直接打印5个5
};
// fn1();

//第一种解决：使用立执行函数
const fn2 = () => {
  for (var i = 0; i < 5; i++) {
    (function (j) {
      setTimeout(() => {
        console.log(j);
      }, 1000);
    })(i);
  } //0 1 2 3 4
};
// fn2();

//第二种解决：使用setTimeout的第二个参数
const fn3 = () => {
  for (var i = 0; i < 5; i++) {
    setTimeout(
      (j) => {
        console.log(j);
      },
      1000,
      i
    );
  } //0, 1, 2, 3, 4
};

// 第三种解决：使用 let
const fn4 = () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

function fn5() {
  let num = 0;
  return function () {
    return num++;
  };
}
const f = fn5();
console.log(f());
console.log(f());
console.log(f());
