/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
 * 所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变
 */
function reOrderArray(array) {
  // write code here
  let odd = [],
    even = [];
  array.map(item => {
    (item % 2 !== 0 ? odd : even).push(item);
  });
  return odd.concat(even);
}
/**
 * 解题思路1：额外数组空间
 * 使用额外数组空间，分别将奇数和偶数分开存放，最后返回
 */
