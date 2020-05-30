/**
 * 对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。
 */
function LeftRotateString(str, n) {
  // write code here
  if (str===null||str.length===0) return "";
  let tmp = str.substr(0, n)
  return ((str + tmp).substr(n));
}