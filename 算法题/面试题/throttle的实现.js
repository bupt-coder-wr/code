/**
 * 节流函数
 * @param {执行函数} fn
 * @param {触发间隔} ms
 */
function throttle(fn, ms) {
  var timer = null;
  return function() {
    var context = this;
    var args = arguments;
    if (!timer) {
      timer = setTimeout(function() {
        fn.apply(context, args);
        timer = null;
      }, ms);
    }
  };
}

function handle() {
  console.log("handle");
}

window.addEventListener("click", throttle(handle, 1000));
