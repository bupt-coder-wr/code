/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0;
  while (x != 0) {
    res = res * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  return res > 2147483647 || res < -2147483648 ? 0 : res;
};
