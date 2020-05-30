/**
 * 将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0
 */
function StrToInt(str) {
  // write code here
  let result = Number(str);
  return result && result >= -2147483648 && result < 2147483648 ? result : 0;
}
/**
 * 解题思路：
 * 可以直接使用Number()或者 + 进行数值转换
 * 转换完后需要判断上下界的溢出情况
 */