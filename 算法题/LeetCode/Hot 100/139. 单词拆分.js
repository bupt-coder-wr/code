/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = [];
  let index = 0;
  while (index < s.length) {
    console.log(index);
    if (wordDict.includes(s.slice(0, index + 1))) {
      s = s.substring(index + 1);
      index = 0;
      console.log(s);
    } else {
      index++;
    }
  }
  return s ? false : true;
};
let s = "leetcode",
  wordDict = ["leet", "code"];
wordBreak(s, wordDict);
