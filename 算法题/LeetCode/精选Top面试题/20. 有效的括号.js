/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let len = s.length;
  let stack = [];
  for (let i = 0; i < len; i++) {
    if (["(", "[", "{"].includes(s[i])) {
      stack.push(s[i]);
    } else if (s[i] === ")") {
      if (stack.length && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        return false;
      }
    } else if (s[i] === "]") {
      if (stack.length && stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        return false;
      }
    } else if (s[i] === "}") {
      if (stack.length && stack[stack.length - 1] === "{") {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return !stack.length;
};
