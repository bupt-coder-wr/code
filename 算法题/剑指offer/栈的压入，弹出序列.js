/**
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。
 */
function IsPopOrder(pushV, popV) {
  if (pushV.length !== popV.length) return false;
  let stack = [],
    idx = 0;
  for (let i = 0; i < popV.length; i++) {
    stack.push(pushV.shift());
    while (stack.length && stack[stack.length - 1] === popV[idx]) {
      stack.pop();
      idx++;
    }
  }
  return stack.length === 0;
}