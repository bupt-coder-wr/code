/**
 * 2021/09.01
 * @param {*} s
 * @returns
 */
var countSubstrings = function (s) {
  let res = 0;
  function subString(s, i, j) {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      res++;
      i--;
      j++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    subString(s, i, i);
    subString(s, i, i + 1);
  }
  return res;
};
