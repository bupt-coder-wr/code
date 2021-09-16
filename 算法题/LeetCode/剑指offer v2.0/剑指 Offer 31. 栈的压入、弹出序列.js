/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = [];
  let i = 0;
  for (let item of pushed) {
    stack.push(item);
    while (
      i < popped.length &&
      stack.length &&
      stack[stack.length - 1] == popped[i]
    ) {
      stack.pop();
      i++;
    }
  }
  return stack.length === 0;
};
