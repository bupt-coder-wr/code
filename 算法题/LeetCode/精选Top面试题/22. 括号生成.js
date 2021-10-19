/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  const backtracking = (left, right, str) => {
    if (left === n && right === n) {
      res.push(str);
    }
    if (right > left || left > n || right > n) {
      return;
    }
    backtracking(left + 1, right, str + "(");
    backtracking(left, right + 1, str + ")");
  };
  backtracking(0, 0, "");

  return res;
};
