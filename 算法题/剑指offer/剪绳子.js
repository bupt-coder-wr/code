/**
 * 给你一根长度为n的绳子，请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1），每段绳子的长度记为k[0],k[1],...,k[m]。请问k[0]xk[1]x...xk[m]可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 */
function cutRope(number) {
  // write code here
  let result = [];
  let answer = [0, 0, 1, 2, 4];
  if (number < 5) return answer[number];
  while (number > 0) {
    if (number >= 3) {
      result.push(3);
      number -= 3;
    }
    if (number >= 2) {
      result.push(2);
      number -= 2;
    }
  }
  return result.reduce((x, y) => x * y);
}
console.log(cutRope(6));

/**
 * 解题思路：
 * 通过枚举前几项可以发现规律，每个数字可以分解成2,3的和，并且优先分解成3会得到较大的值，因为2 * 2 * 2 < 3 * 3
 * 存在4=2+2 = 3+1 2*2>3*1 故将if..else if 变为 if..if..
 * 故将number通过循环分解，且优先分解成3,最后将得到的result数组用reduce连乘
 */
