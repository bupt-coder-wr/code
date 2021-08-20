/**
 * 2021/08.19
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let width = grid[0].length;
  let height = grid.length;
  if (!width || !height) return 0;

  for (let i = 1; i < width; i++) {
    // 填充第一行
    grid[0][i] = grid[0][i] + grid[0][i - 1];
  }
  for (let i = 1; i < height; i++) {
    // 填充第一列
    grid[i][0] = grid[i][0] + grid[i - 1][0];
  }
  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      grid[i][j] = grid[i][j] + Math.min(grid[i][j - 1], grid[i - 1][j]);
    }
  }
  return grid[height - 1][width - 1];
};
