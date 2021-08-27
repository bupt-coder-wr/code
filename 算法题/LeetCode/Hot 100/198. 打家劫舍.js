/**
 * 2021/08.20
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length;
  if (len <= 1) return len ? nums[0] : 0;
  let dp = [];
  // dp[0] = nums[0]
  // dp[1] = Math.max(nums[0], nums[1])
  let first = nums[0];
  let second = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    // dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
    let tmp = second;
    second = Math.max(second, nums[i] + first);
    first = tmp;
  }
  return second;
};
