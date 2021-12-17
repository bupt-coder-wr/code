var setZeroes = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  let flagCol = false
  let flagRaw = false
  // 先判断标志位
  for (let i = 0; i < m; i++) {
    if (!matrix[i][0]) {
      flagCol = true
      break
    }
  }
  for (let i = 0; i < n; i++) {
    if (!matrix[0][i]) {
      flagRaw = true
      break
    }
  }
  // 以第一行和第一列进行判断
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (!matrix[i][j]) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (!matrix[i][0] || !matrix[0][j]) {
        matrix[i][j] = 0
      }
    }
  }
  // 填充第一行和第一列
  if (flagCol) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0
    }
  }
  if (flagRaw) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0
    }
  }
}
