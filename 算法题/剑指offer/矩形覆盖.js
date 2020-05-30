/**
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
 * 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 */
function rectCover(number) {
  // write code here
  if (number < 0) return;
  if (number <= 2) return number;
  return rectCover(number - 1) + rectCover(number - 2);
}
/**
 * 方法1：
 * 使用递归，比较好理解，但是占用内从过大
 */
function rectCover(number) {
  if (number <= 0) return 0;
  let result = [1, 1];
  for (let i = 2; i <= number; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[number];
}
