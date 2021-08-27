/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let height = matrix.length;
  let width = matrix[0].length;
  let maxSlide = 0;
  let dp = new Array(height).fill(0).map(() => new Array(width).fill(0));
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === "1") {
        if (!i || !j) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
      }
      maxSlide = Math.max(maxSlide, dp[i][j]);
    }
  }
  return maxSlide * maxSlide;
};
