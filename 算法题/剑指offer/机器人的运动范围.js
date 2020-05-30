function movingCount(threshold, rows, cols) {
  // write code here
  let visited = [];
  for (let i = 0; i < rows; i++) {
    visited.push([]);
    for (let j = 0; j < cols; j++) {
      visited[i][j] = false;
    }
  }
  return Counting(threshold, rows, cols, 0, 0, visited);
}

function Counting(threshold, rows, cols, row, col, visited) {
  if (row < 0 || row === rows || col < 0 || col === cols || visited[row][col]) {
    return 0;
  }
  let sum = getSum(row, col);
  if (sum > threshold) return 0;
  visited[row][col] = true;
  return (
    Counting(threshold, rows, cols, row + 1, col, visited) +
    Counting(threshold, rows, cols, row, col + 1, visited) +
    Counting(threshold, rows, cols, row - 1, col, visited) +
    Counting(threshold, rows, cols, row, col - 1, visited) +
    1
  );
}
function getSum(row, col) {
  let tmp = row + "" + col;
  tmp = tmp.split("");
  for (let i = 0; i < tmp.length; i++) {
    tmp[i] = parseInt(tmp[i]);
  }
  return tmp.reduce((x, y) => x + y);
}

/**
 * 解题思路：递归
 * 首先初始化矩阵，将所有位的值赋为false
 * 然后将得到的新矩阵进行计算，使用递归从(0,0) 开始分别计算前后左右能否到达，将可到达的值赋值为true，防止重复计算
 * 设置边界条件使其返回。
 * 最后返回 1+上下左右的
 */
