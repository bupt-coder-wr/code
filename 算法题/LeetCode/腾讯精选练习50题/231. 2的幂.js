/**
 * 2020.11.01
 * 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
 */
/**
 * 解释：2的幂次方在二进制下，只有1位是1，其余全是0。例如:8---00001000。
 * 负数的在计算机中二进制表示为补码(原码->正常二进制表示，原码按位取反(0-1,1-0)，最后再+1。然后两者进行与操作，得到的肯定是原码中最后一个二进制的1。
 * 例如8&(-8)->00001000 & 11111000 得 00001000，即8。 建议自己动手算一下，按照这个流程来一遍，加深印象。
 */
var isPowerOfTwo = function (n) {
  return n > 0 && (n & -n) === n;
};
