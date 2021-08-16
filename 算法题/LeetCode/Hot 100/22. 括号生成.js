var generateParenthesis = function (n) {
  let result = [];
  help("", 0, 0);
  return result;

  function help(cur, left, right) {
    // 返回递归
    if (left === n && right === n) {
      result.push(cur);
      return;
    }
    // 剪纸
    if (left > n || left < right) return;

    help(cur + "(", left + 1, right);
    help(cur + ")", left, right + 1);
  }
};
