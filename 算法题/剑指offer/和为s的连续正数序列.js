function FindContinuousSequence(sum) {
  // write code here
  if (sum < 0) return;
  let result = [],
    list = [],
    total = 0;
  for (let i = 1; i < sum; i++) {
    list.push(i);
    total += i;
    while (total > sum) {
      total -= list[0];
      list.shift();
    }
    if (total === sum) {
      result.push(list.slice(0));
      total -= list[0];
      list.shift();
    }
  }
  return result;
}
/**
 * 解题思路：
 * 首先对入参进行异常判断
 * 声明两个数组变量，一个用于返回结果，一个用于记录中间符合项
 * 进行遍历，每当总和total大于sum时，将较小项进行删除
 */