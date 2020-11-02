/**
 * 2020.10.30
 * 给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。
 * 网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）
 */
var islandPerimeter = function (grid) {
  let result = 0;
  let d = 0; // 0，1，2，3 对应 左，上，右，下
  const row = grid.length; // 行数
  const col = grid[0].length; // 列数
  for (let i = 0; i < row; i++) {
    // 遍历横排
    for (let j = 0; j < col; j++) {
      // 遍历列
      if (grid[i][j]) {
        d = 0;
        while (d < 4) {
          switch (d) {
            case 0:
              result =
                j - 1 < 0 || grid[i][j - 1] === 0 ? (result += 1) : result;
              break;
            case 1:
              result =
                i - 1 < 0 || grid[i - 1][j] === 0 ? (result += 1) : result;
              break;
            case 2:
              result =
                j + 1 > col - 1 || grid[i][j + 1] === 0
                  ? (result += 1)
                  : result;
              break;
            case 3:
              result =
                i + 1 > row - 1 || grid[i + 1][j] === 0
                  ? (result += 1)
                  : result;
              break;
          }
          d++;
        }
      }
    }
  }
  console.log(result);
  return result;
};
islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
]);
