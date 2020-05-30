/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
 */
var stack = [],
  minStack = [];
function push(node) {
  stack.push(node);
  if (minStack.length == 0) minStack.push(node);
  else {
    if (minStack[minStack.length - 1] > node) {
      minStack.push(node);
    }
  }
}
function pop() {
  if (stack.pop() == minStack[minStack.length - 1]) minStack.pop();
}
function top() {
  return stack[stack.length - 1];
}
function min() {
  return minStack[minStack.length - 1];
}
