/**
 * 2020.11.08
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 */
var longestPalindrome = function (s) {
  // 异常处理
  if (!s) return "";

  let res = "";
  for (let i = 0; i < s.length; i++) {
    expendAroundCenter(s, i, i);
    expendAroundCenter(s, i, i + 1);
  }
  return res;

  function expendAroundCenter(s, left, right) {
    let L = left;
    let R = right;
    while (L >= 0 && R < s.length && s[L] === s[R]) {
      L--;
      R++;
    }
    if (R - L - 1 > res.length) {
      res = s.slice(L + 1, R);
    }
  }
};
