/**
 * 2020.11.02
 * 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 */
var generateMatrix = function (n) {
  let subArray = Array(n).fill(false);
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(subArray.slice(0));
  }
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1,
    index = 1;
  while (top <= bottom) {
    for (let i = left; i <= right; i++) {
      array[top][i] = index++;
    }
    for (let i = top + 1; i <= bottom; i++) {
      array[i][right] = index++;
    }
    if (left < right) {
      for (let i = right - 1; i >= left; i--) {
        array[bottom][i] = index++;
      }
    }
    if (top < bottom) {
      for (let i = bottom - 1; i > top; i--) {
        array[i][left] = index++;
      }
    }
    top++, bottom--, left++, right--;
  }
  console.log(array);
};
generateMatrix(5);
