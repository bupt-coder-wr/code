/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0,
    target = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      count++;
    } else {
      count--;
      if (!count) {
        target = nums[i + 1];
      }
    }
  }
  return target;
};
