/**
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
 */
function Fibonacci(n) {
  if (n <= 1) return n;
  var f1 = 1,
    f0 = 0;
  for (let i = 2; i <= n; i++) {
    f2 = f1 + f0;
    f0 = f1;
    f1 = f2;
  }
  return f2;
}
/**
 * 解题思路1：
 * 使用循环，每次更新f2,f1,f0
 */
function Fibonacci(n) {
  if (n <= 1) return n;
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[n];
}
/**
 * 解题思路2：
 * 使用数组记录每一项
 */
function Fibonacci(n) {
  if (n <= 1) return n;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}
/**
 * 解题思路3：
 * 使用递归，会超时
 */
