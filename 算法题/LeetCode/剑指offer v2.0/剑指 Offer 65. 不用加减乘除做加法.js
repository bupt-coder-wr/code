/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  while (b) {
    let tmp = a ^ b;
    b = (a & b) << 1;
    a = tmp;
  }
  return a;
};
