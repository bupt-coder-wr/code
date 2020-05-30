/**
 * 防抖动函数
 * @param {等待时间} ms
 * @param {执行函数} fn
 */
function debounnce(fn, ms) {
  var timeout = null;
  return function() {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, ms);
  };
}

function handle() {
  console.log("handler");
}

window.addEventListener("click", debounce(handle, 500));
