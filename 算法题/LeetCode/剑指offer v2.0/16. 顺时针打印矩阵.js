/**
 * 2021/09.09
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix || !matrix[0]) return [];
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;
  let res = [];
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    for (let i = top + 1; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    if (top < bottom) {
      for (let i = right - 1; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
    }
    if (left < right) {
      for (let i = bottom - 1; i > top; i--) {
        res.push(matrix[i][left]);
      }
    }
    top++, bottom--, left++, right--;
  }
  return res;
};
