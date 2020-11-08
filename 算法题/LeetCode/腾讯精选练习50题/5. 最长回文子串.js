/**
 * 2020.11.08
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 */
var longestPalindrome = function (s) {
  if (s == null || s.length <= 0) return "";
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expendAroundCenter(s, i, i);
    let len2 = expendAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      // 划重点！！ 先做减法后向下取值
      start = Math.floor(i - (len - 2) / 2); // 这里是 -2
      end = Math.floor(i + len / 2);
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
    // 最后一个while不符合后需要回退，所以是 -1 而不是 +1
    return R - L - 1;
  }
};
