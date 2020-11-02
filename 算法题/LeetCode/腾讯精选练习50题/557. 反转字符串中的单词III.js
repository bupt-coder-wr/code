/**
 * 2020.10.31
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 */
var reverseWords = function (s) {
  let a = s.split(" ");
  let na = [];
  for (let item of a) {
    item = item.split("").reverse().join("");
    na.push(item);
  }
  return na.join(" ");
};
reverseWords("Let's take LeetCode contest");
