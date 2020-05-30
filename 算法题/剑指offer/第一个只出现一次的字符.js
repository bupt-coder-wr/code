/**
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
 * 并返回它的位置, 如果没有则返回 -1（需要区分大小写）.
 */
function FirstNotRepeatingChar(str) {
  // write code here
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) return i;
  }
  return -1;
}
/**
 * 解题思路：
 * 重头开始遍历，如果遍历到的字符，从头查找和从尾部查找出现在相同的位置，则返回该位置
 */
