/**
 * 2020.11.01
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 */
// 80ms, 37.6MB
var climbStairs = function (n) {
  let res = [1, 2, 3];
  for (let i = 2; i <= n; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }
  return res[n - 1];
};
// 64ms, 37.6MB
var climbStairs = function (n) {
  let first = 1,
    second = 2;
  if (n == 1) return first;
  if (n == 2) return second;
  for (let i = 2; i < n; i++) {
    let tmp = second;
    second = first + second;
    first = tmp;
  }
  return second;
};
