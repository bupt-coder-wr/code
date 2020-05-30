function hasPath(matrix, rows, cols, path) {
  if (path.length === 0) return true;
  if (rows * cols < path.length) return false;
  let status = [];
  for (let i = 0; i < rows; i++) {
    status.push([].fill(false, 0, cols));
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; i < cols; i++) {
      if (matrix[i * cols + j] === path[0]) {
        if (path.length === 0) return true;
        status[i][j] = true;
        if (find(matrix, rows, cols, i, j, path.slice(1), status)) return true;
        status[i][j] = false;
      }
    }
  }
  return false;
}

function find(matrix, rows, cols, row, col, path, status) {
  
}
