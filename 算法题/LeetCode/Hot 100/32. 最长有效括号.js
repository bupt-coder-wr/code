/**
 * 2021/09.15
 */
// dp
var longestValidParentheses = function (s) {
  let len = s.length;
  if (len === 0) return 0;
  const dp = Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    if (s[i] === ")") {
      let pre = i - dp[i - 1] - 1;
      if (pre >= 0 && s[pre] == "(") {
        dp[i] = dp[i - 1] + 2;
        if (pre > 0) {
          dp[i] += dp[pre - 1];
        }
      }
    }
  }
  return Math.max(...dp);
};
// stack
var longestValidParentheses = function (s) {
  let stack = [-1];
  let length = 0,
    max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        length = i - stack[stack.length - 1];
        max = Math.max(max, length);
      }
    }
  }
  return max;
};
