/**
  function getPromiseWithAbort(p) {
  let obj = {};
  //内部定一个新的promise，用来终止执行
  let p1 = new Promise(function (resolve, reject) {
    obj.abort = reject;
  });
  obj.promise = Promise.race([p, p1]);
  return obj;
}
var promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("123");
  }, 3000);
});

var obj = getPromiseWithAbort(promise);

obj.promise.then((res) => {
  console.log(res);
});

obj.abort("取消执行");
 */

// 自己完成
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p resolve 123");
  }, 1000);
});
function PromiseWithCancel(p) {
  p.cancle = function () {
    Promise.race([p, Promise.reject()]).catch(() => {
      console.log("p has been cancel");
    });
  };
  return p;
}
let p1 = PromiseWithCancel(p);
p1.cancle();
