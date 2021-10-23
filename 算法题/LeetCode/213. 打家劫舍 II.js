/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums || !nums.length) return 0;
  if (nums.length === 1) return nums[0];
  let dp = Array(nums.length)
    .fill(0)
    .map(() => Array(2));
  dp[0][0] = nums[0];
  dp[0][1] = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    dp[i][0] = dp[i - 1][1] + nums[i];
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1]);
  }
  let max1 = Math.max(dp[nums.length - 2][0], dp[nums.length - 2][1]);
  dp = Array(nums.length)
    .fill(0)
    .map(() => Array(2));
  dp[1][0] = nums[1];
  dp[1][1] = 0;
  for (let i = 2; i < nums.length; i++) {
    dp[i][0] = dp[i - 1][1] + nums[i];
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1]);
  }
  let max2 = Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1]);
  return Math.max(max1, max2);
};
