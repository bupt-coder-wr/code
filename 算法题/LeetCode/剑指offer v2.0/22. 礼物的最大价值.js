/**
 * 2021/09.09
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  let m = grid.length,
    n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0) {
        grid[i][j] += grid[i][j - 1];
      } else if (j === 0) {
        grid[i][j] += grid[i - 1][j];
      } else {
        grid[i][j] = Math.max(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
      }
    }
  }
  return grid[m - 1][n - 1];
};
