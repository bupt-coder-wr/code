/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let left = 1,
    right = 1,
    sum = 0;
  let res = [];
  while (left < Math.ceil(target / 2)) {
    if (sum < target) {
      sum += right;
      right++;
    } else if (sum > target) {
      sum -= left;
      left++;
    } else {
      let list = [];
      for (let i = left; i < right; i++) {
        list.push(i);
      }
      res.push(list);
      sum -= left;
      left++;
    }
  }
  return res;
};
