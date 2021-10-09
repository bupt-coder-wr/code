/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minValueList = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (this.minValueList.length) {
    const min = Math.min(this.minValueList[this.minValueList.length - 1], x);
    this.minValueList.push(min);
  } else {
    this.minValueList.push(x);
  }
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.minValueList.pop();
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minValueList[this.minValueList.length - 1];
};
