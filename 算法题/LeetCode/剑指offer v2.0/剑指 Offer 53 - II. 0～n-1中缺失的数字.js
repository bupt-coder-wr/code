/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let total = (nums.length * (nums.length + 1)) / 2;
  let sum = nums.reduce((a, i) => a + i);
  return total - sum;
};
s