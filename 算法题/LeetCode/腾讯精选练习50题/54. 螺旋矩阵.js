/**
 * 2020.11.09
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 */
var spiralOrder = function (matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) return [];
  if (matrix.length === 1) return matrix[0];
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;
  let result = [];
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    for (let i = top + 1; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    if (top < bottom) {
      for (let i = right - 1; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
    }
    if (left < right) {
      for (let i = bottom - 1; i > top; i--) {
        result.push(matrix[i][left]);
      }
    }
    top++, bottom--, left++, right--;
  }
  console.log(result);
  return result;
};
