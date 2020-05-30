/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s == null || s.length <= 0) return "";
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expendAroundCenter(s, i, i);
    let len2 = expendAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = Math.floor(i - (len - 2) / 2); // 这里是 -2
      end = Math.floor(i + len / 2);
      console.log(i, start, end);
    }
  }
  return s.substring(start, end + 1);

  function expendAroundCenter(s, left, right) {
    let L = left,
      R = right;
    while (L >= 0 && R < s.length && s[L] === s[R]) {
      L--;
      R++;
    }
    return R - L - 1;
  }
};
console.log(longestPalindrome("cbbd"));
