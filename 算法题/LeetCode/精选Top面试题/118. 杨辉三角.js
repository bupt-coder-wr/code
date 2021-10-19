/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  let res = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    // 行
    let dp = [1];
    for (let j = 1; j < i; j++) {
      dp[j] = res[i - 1][j - 1] + res[i - 1][j];
    }
    dp.push(1);
    res.push(dp.slice());
  }
  return res;
};
