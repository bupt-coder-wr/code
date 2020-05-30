/**
 * 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，
 * 那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。
 */
var arr = [];
function Insert(num) {
  // write code here
  arr.push(num);
  return arr;
}
function GetMedian() {
  // write code here
  arr.sort((a, b) => a - b);
  let len = arr.length;
  let mid = parseInt(len / 2);
  if (len % 2 === 0) return (arr[mid - 1] + arr[mid]) / 2;
  else return arr[mid];
}
/**
 * 解题思路：
 * 使用.sort进行排序，然后直接返回中位数
 * 缺点：时间复杂度不为O(nlog n)
 */