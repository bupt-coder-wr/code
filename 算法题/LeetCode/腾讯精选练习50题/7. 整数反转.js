/**
 * 2020.11.01
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 */
var reverse = function (x) {
  let res = 0;
  while (x != 0) {
    res = res * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  return res > 2147483647 || res < -2147483648 ? 0 : res;
};
