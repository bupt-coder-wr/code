/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  const s = num.toString();
  let dp = [1, 1];
  for (let i = 2; i <= s.length; i++) {
    const sub = parseInt(s.substring(i - 2, i));
    console.log(sub);
    if (sub >= 10 && sub <= 25) {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      dp[i] = dp[i - 1];
    }
    console.log(dp);
  }
  return dp[s.length];
};
