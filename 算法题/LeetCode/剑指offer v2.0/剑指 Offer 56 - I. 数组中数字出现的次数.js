/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  let res = 0;
  for (let item of nums) {
    res ^= item;
  }
  let div = 1;
  while ((div & res) == 0) {
    div <<= 1;
  }
  let a = 0,
    b = 0;
  for (let item of nums) {
    if (div & item) {
      a ^= item;
    } else {
      b ^= item;
    }
  }
  return [a, b];
};
