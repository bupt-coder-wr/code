/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = nums.reduce((x, y) => x + y);
  let totalSum = (nums.length * (nums.length + 1)) / 2;
  return totalSum - sum;
};
