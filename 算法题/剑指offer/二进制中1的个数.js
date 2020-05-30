function NumberOf1(n) {
  // write code here
  let count = 0;
  while (n) {
    count++;
    n = n & (n - 1);
  }
  return count;
}
/**
 * 解题思路：
 * 如果一个整数不为0，那么这个整数至少有一位是1。
 * 如果我们把这个整数减1，那么原来处在整数最右边的1就会变为0，原来在1后面的所有的0都会变成1(如果最右边的1后面还有0的话)。其余所有位将不会受到影响。
 */