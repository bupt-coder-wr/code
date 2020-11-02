/**
 * 2020.11.01
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 */
// 横向比较
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let prefix = strs[0],
    index = 0;
  for (let i = 1; i < strs.length; i++) {
    prefix = lcp(prefix, strs[i]);
    if (!prefix) break;
  }
  return prefix;

  function lcp(str1, str2) {
    let len = Math.min(str1.length, str2.length);
    let index = 0;
    while (index <= len && str1[index] === str2[index]) {
      index++;
    }

    return str1.slice(0, index);
  }
};
longestCommonPrefix(["ab", "a"]);
