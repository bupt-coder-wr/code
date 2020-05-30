/**
 * 求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。
 * ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。
 */
function NumberOf1Between1AndN_Solution(n) {
  // write code here
  let count = 0,
    num;
  for (let i = 1; i <= n; i++) {
    num = i;
    while (num) {
      if (num % 10 === 1) count++;
      num = Math.floor(num / 10);
    }
  }
  return count;
}
/**
 * 解题思路：循环
 * 循环计算每个数字上1的个数，对于每一个数字，使用模10余1进行判断
 */
