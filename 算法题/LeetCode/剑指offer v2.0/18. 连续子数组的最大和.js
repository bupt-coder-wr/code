/**
 * 2021/09.09
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums) return;
  let pre = nums[0],
    max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    max = Math.max(pre, max);
  }
  return max;
};
