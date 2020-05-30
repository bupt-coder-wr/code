function FindGreatestSumOfSubArray(array) {
  // write code here
  if (array.length==0) return 0;
  let pre = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (pre < 0) pre = 0;
    max = Math.max(max, pre + array[i])
    pre = pre + array[i]
  }
  return max;
}
/**
 * 判断入参异常
 * 分别记录当前累计值和最大值，如果遇到累计值小于0，则将累计值清0
 * 最大值为max和当前累计值+下一项的值 取大
 */