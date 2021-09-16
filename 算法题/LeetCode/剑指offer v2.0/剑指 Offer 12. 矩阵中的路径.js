/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length,
    n = board[0].length;
  let used = Array(m)
    .fill(0)
    .map(() => Array(n).fill(false));

  const helper = (board, i, j, k) => {
    if (k >= word.length) return true;
    if (
      i < 0 ||
      j < 0 ||
      i >= m ||
      j >= n ||
      used[i][j] ||
      word[k] !== board[i][j]
    )
      return false;
    used[i][j] = true;
    let res =
      helper(board, i - 1, j, k + 1) ||
      helper(board, i + 1, j, k + 1) ||
      helper(board, i, j - 1, k + 1) ||
      helper(board, i, j + 1, k + 1);

    used[i][j] = false;
    return res;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let flag = helper(board, i, j, 0);
      if (flag) {
        return true;
      }
    }
  }
  return false;
};
