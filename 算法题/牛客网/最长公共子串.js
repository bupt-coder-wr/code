/**
 * 给定两个字符串str1和str2,输出两个字符串的最长公共子串
 * 题目保证str1和str2的最长公共子串存在且唯一。
 */

function LCS(str1, str2) {
  // write code here
  if (!str1 || !str2) return "";
  let maxLength = 0,
    result = "";
  const dp = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
        if (dp[i + 1][j + 1] > maxLength) {
          maxLength = dp[i + 1][j + 1];
          result = str2.slice(0, j + 1).slice(-maxLength);
        }
      }
    }
  }
  return result;
}
module.exports = {
  LCS: LCS,
};
