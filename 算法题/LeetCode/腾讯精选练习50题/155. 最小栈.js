/**
 * 2020.10.31
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x) —— 将元素 x 推入栈中。
 * pop() —— 删除栈顶的元素。
 * top() —— 获取栈顶元素。
 * getMin() —— 检索栈中的最小元素。
 */
var MinStack = function () {
  this.stack = [];
  this.minValue = [];
};

MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (!this.minValue.length) {
    this.minValue.push(x);
  } else {
    this.minValue.push(Math.min(this.minValue[this.minValue.length - 1], x));
  }
};

MinStack.prototype.pop = function () {
  this.minValue.pop();
  this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.minValue[this.minValue.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
