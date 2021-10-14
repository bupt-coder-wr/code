/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let res = [],
    path = [];
  let len = digits.length;
  let map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  if (!len) return [];
  const backtrack = (digits, len, a) => {
    if (path.length === len) {
      res.push(path.join(""));
      return;
    }
    for (const value of map[digits[a]]) {
      path.push(value);
      backtrack(digits, len, a + 1);
      path.pop();
    }
  };
  backtrack(digits, len, 0);
  return res;
};
