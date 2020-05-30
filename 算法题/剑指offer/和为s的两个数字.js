/**
 * 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，
 * 如果有多对数字的和等于S，输出两个数的乘积最小的。
 */
function FindNumbersWithSum(array, sum) {
  // write code here
  if (array == null) return false;
  var pre = 0,
    last = array.length - 1;
  while (pre < last) {
    if (array[pre] + array[last] == sum) {
      return [array[pre], array[last]];
    } else if (array[pre] + array[last] < sum) {
      pre++;
    } else {
      last--;
    }
  }
  return false;
}
/**
 * 解题思路1：
 * 先判断入参异常
 * 使用两个指针，分别指向头部和尾部，然后根据和的大小分别向中间移动
 */
function FindNumbersWithSum(array, sum) {
  if (array === null) return false;
  let rest;
  for (let i = 0; i < array.length; i++) {
    rest = sum - array[i];
    var arr = array.slice(i);
    var tmp = arr.findIndex(item => item === rest);
    if (tmp !== -1) return [array[i], arr[tmp]];
  }
  return false;
}
/**
 * 解题思路2：
 * 首先判断输入参数异常
 * 然后使用一个循环，第二个狮子使用findIndex去找
 */
