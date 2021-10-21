/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  let left = Array(a.length).fill(1);
  let right = Array(a.length).fill(1);
  let res = [];
  for (let i = 1; i < a.length; i++) {
    left[i] = left[i - 1] * a[i - 1];
  }
  for (let i = a.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * a[i + 1];
  }
  for (let i = 0; i < left.length; i++) {
    res[i] = left[i] * right[i];
  }
  return res;
};
