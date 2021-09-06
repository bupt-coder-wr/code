/**
 * 2021/09.02
 */
/**
 *
 */
// dp
var canPartition = function (nums) {
  const len = nums.length;
  if (!len) return false;
  const sum = nums.reduce((x, y) => x + y, 0);
  console.log(sum % 2 === 1);
  if (sum % 2) return false;
  const target = sum / 2;
  if (Math.max(...nums) > target) return false;
  const dp = Array(len)
    .fill(0)
    .map((item) => Array(target + 1).fill(false));
  // 第一行填充
  if (nums[0] <= target) {
    dp[0][nums[0]] = true;
  }
  // 由于第一行已经填充过，跳过第一行
  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= target; j++) {
      dp[i][j] = dp[i - 1][j];
      if (nums[i] === j) {
        dp[i][j] = true;
        continue;
      }
      if (nums[i] < j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      }
    }
  }
  return dp[len - 1][target];
};

var canPartition = function (nums) {
  const len = nums.length;
  if (!len) return false;
  const sum = nums.reduce((x, y) => x + y, 0);
  if (sum % 2) return false;
  const target = sum / 2;
  if (Math.max(...nums) > target) return false;
  const dp = Array(target + 1).fill(false);
  // 第一行填充
  dp[0] = true;
  if (nums[0] <= target) {
    dp[nums[0]] = true;
  }
  // 由于第一行已经填充过，跳过第一行
  for (let i = 1; i < len; i++) {
    for (let j = target; j >= 0 && nums[i] <= j; j--) {
      dp[j] = dp[j] || dp[j - nums[i]];
    }
    if (dp[target]) {
      return true;
    }
  }
  return dp[target];
};
