/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix || !matrix.length) return false;
  let m = matrix.length,
    n = matrix[0].length;
  let i = 0,
    j = n - 1;
  while (i < m && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] > target) {
      j--;
    } else if (matrix[i][j] < target) {
      i++;
    }
  }
  return false;
};
