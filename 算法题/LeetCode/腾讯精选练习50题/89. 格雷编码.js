/**
 * 2020.11.11
 * 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。
 * 给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。即使有多个不同答案，你也只需要返回其中一种。
 * 格雷编码序列必须以 0 开头。
 */
var grayCode = function (n) {
  let recursion = (n) => {
    if (n === 1) return [0, 1];
    let result = recursion(n - 1);
    // << 左移运算符
    // 左移1位相当于乘2,左移n位相当于乘2^n
    let highBit = 1 << (n - 1);
    // grayCode(1)等于[0,1]
    // grayCode(2)等于[0,1,3,2],3==1+highBit,2==0+highBit
    for (let i = result.length - 1; i >= 0; i--) {
      result.push(result[i] + highBit);
    }
    return result;
  };
  if (n === 0) return [0];
  return recursion(n);
};
