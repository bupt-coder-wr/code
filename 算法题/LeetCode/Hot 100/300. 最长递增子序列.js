/**
 * 2021/09.01
 * @param {number[]} nums
 * @return {number}
 */
// 188ms, 39.5MB
// dp
var lengthOfLIS = function (nums) {
  if (!nums.length) return 0;
  let dp = Array(nums.length).fill(1);
  let max = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(dp[i], max);
  }
  return max;
};
