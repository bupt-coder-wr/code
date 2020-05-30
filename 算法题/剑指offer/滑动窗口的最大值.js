/**
 * 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
 */
function maxInWindows(num, size) {
  // write code here
  if (num === null || size < 1) return [];
  let result = [];
  let tmpArr = [];
  for (let i = 0; i < num.length - size + 1; i++) {
    tmpArr = num.slice(i, i + size);
    result.push(Math.max(...tmpArr));
  }
  return result;
}
/**
 * 解题思路：
 * 可以使用JS的数组方法slice和Math.max 对问题进行求解
 * 每次截取size长度的数组进行求最大值
 */
