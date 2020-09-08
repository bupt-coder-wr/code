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
  let num = 5;
  console.log(this);
  return function () {
    return ++num;
  };
}
fn5()();
console.log(fn5()());
