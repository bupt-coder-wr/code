/**
 * 2021/09.15
 * 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
 * 你可以对一个单词进行如下三种操作：
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 */
var minDistance = function (word1, word2) {
  let dp = Array(word1.length + 1)
    .fill(0)
    .map(() => Array(word2.length + 1));
  // 填充第一行
  for (let i = 0; i < word2.length + 1; i++) {
    dp[0][i] = i;
  }
  // 填充第一列
  for (let i = 0; i < word1.length + 1; i++) {
    dp[i][0] = i;
  }
  for (let i = 1; i < word1.length + 1; i++) {
    for (let j = 1; j < word2.length + 1; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  console.log(dp);
  return dp[word1.length][word2.length];
};
