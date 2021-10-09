/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
  let dp = Array(first.length + 1)
    .fill(0)
    .map(() => Array(second.length + 1));
  // 第一行
  for (let i = 0; i < first.length + 1; i++) {
    dp[i][0] = i;
  }
  // 第一列
  for (let i = 0; i < second.length + 1; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i < first.length + 1; i++) {
    for (let j = 1; j < second.length + 1; j++) {
      if (first[i - 1] === second[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  return dp[first.length][second.length] < 2;
};
