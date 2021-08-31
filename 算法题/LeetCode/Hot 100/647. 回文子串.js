/**
 * 2021/09.01
 * @param {*} s
 * @returns
 */
// dp
var countSubstrings = function (s) {
  function isPalindromic(s, i, j) {
    let l = i,
      r = j;
    if (l == r) return true;
    while (l <= r && s[l] === s[r]) {
      if (l == r) return true;
      if (r - l == 1 && s[l] == s[r]) return true;
      l++;
      r--;
    }
    return false;
  }

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindromic(s, i, j)) {
        count++;
      }
    }
  }
  return count;
};
