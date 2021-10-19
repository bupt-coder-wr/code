/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";
  const helper = (s, i, j) => {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      i--;
      j++;
    }
    res = res.length > j - i - 1 ? res : s.slice(i + 1, j);
  };
  for (let i = 0; i < s.length; i++) {
    helper(s, i, i);
    helper(s, i, i + 1);
  }
  return res;
};
