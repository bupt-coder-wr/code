// https://mp.weixin.qq.com/s?__biz=MzU5NDM5MDg1Mw==&mid=2247483862&idx=1&sn=628b274a6828c9784cb10e1b53ccb952&chksm=fe00bbfcc97732ea5e5e7d2a77386a688e6aa15b9353c585d25204b27679eb84e77b81057ba6&scene=21#wechat_redirect

console.log("1");

setTimeout(function () {
  console.log("2");
  process.nextTick(function () {
    console.log("3");
  });
  new Promise(function (resolve) {
    console.log("4");
    resolve();
  }).then(function () {
    console.log("5");
  });
});
process.nextTick(function () {
  console.log("6");
});
new Promise(function (resolve) {
  console.log("7");
  resolve();
}).then(function () {
  console.log("8");
});

setTimeout(function () {
  console.log("9");
  process.nextTick(function () {
    console.log("10");
  });
  new Promise(function (resolve) {
    console.log("11");
    resolve();
  }).then(function () {
    console.log("12");
  });
});
