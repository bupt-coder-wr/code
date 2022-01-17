/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let n = s.length
  let set = new Set(wordDict)
  let dp = Array(n + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.substr(j, i - j))) {
        dp[i] = true
        break
      }
    }
  }
  return dp[n]
}
