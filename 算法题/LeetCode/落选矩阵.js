/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  let num = 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result[top][i] = num++;
    }
    for (let i = top + 1; i <= bottom; i++) {
      result[i][right] = num++;
    }
    if (top != bottom) {
      for (let i = right - 1; i >= left; i--) {
        result[bottom][i] = num++;
      }
    }
    if (left !== right) {
      for (let i = bottom - 1; i > top; i--) {
        result[i][left] = num++;
      }
    }
    top++, left++, bottom--, right--;
  }
  return result;
};
console.log(generateMatrix(5));
