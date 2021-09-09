/**
 * 2021/09.09
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let res = 1;
  const dp = Array(m)
    .fill(0)
    .map((item) => Array(n).fill(false));
  dp[0][0] = true;

  const helper = (i, j) => {
    let sum = 0;
    while (i) {
      sum += i % 10;
      i = parseInt(i / 10);
    }
    while (j) {
      sum += j % 10;
      j = parseInt(j / 10);
    }
    return sum <= k;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!i && !j) continue;
      let flag;
      if (i === 0) {
        flag = dp[0][j - 1] && helper(i, j);
      } else if (j === 0) {
        flag = dp[i - 1][0] && helper(i, j);
      } else {
        flag = (dp[i - 1][j] || dp[i][j - 1]) && helper(i, j);
      }
      if (flag) {
        dp[i][j] = true;
        res++;
      }
    }
  }
  return res;
};
