/**
 * 2020.11.10
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 问总共有多少条不同的路径？
 */
/**
 * C ((m + n - 2), (m - 1))
 */
// dp
var uniquePaths = function (m, n) {
  const rows_num = new Array(m).fill(1);
  for (let row = 1; row < n; row++) {
    for (let col = 1; col < m; col++) {
      rows_num[col] = rows_num[col - 1] + rows_num[col];
    }
  }
  return rows_num[m - 1];
};
// 动态规划
var uniquePaths = function (m, n) {
  if (m === 1 || n === 1) {
    return 1;
  }
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};
