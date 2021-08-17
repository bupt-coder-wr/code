/**
 * 2021/08.17
 */
var rotate = function (matrix) {
  len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
  return matrix.map((item) => item.reverse());
};
