/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const height = board.length;
  const width = board[0].length;
  const letters = word.split("");
  const w = letters.length;
  let visited = [];
  for (let i = 0; i < height; i++) {
    visited.push(Array(width));
    visited[i].fill(0);
  }

  for (let i = 0; i < height; i++) {
    // i 扫描行
    for (let j = 0; j < width; j++) {
      // j 扫描列
      let res = search(i, j, 0); // 0 is the index of chars of letters
      if (res) return true;
    }
  }
  return false;

  function search(i, j, k) {
    // 出口
    if (k >= w) return true;
    // 剪枝
    if (
      i < 0 ||
      j < 0 ||
      i >= height ||
      j >= width ||
      letters[k] !== board[i][j] ||
      visited[i][j] === true
    ) {
      return false;
    }
    visited[i][j] = true;
    // 回溯
    let res =
      search(i + 1, j, k + 1) ||
      search(i, j + 1, k + 1) ||
      search(i - 1, j, k + 1) ||
      search(i, j - 1, k + 1);
    visited[i][j] = false;
    return res;
  }
};
