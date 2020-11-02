/**
 * 2020.11.01
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 */
// 愚蠢的做法
var isValid = function (s) {
  let sArray = s.split("");
  let stack = [];
  while (sArray.length) {
    let cur = sArray.shift();
    if (cur === "(" || cur === "[" || cur === "{") {
      stack.push(cur);
    } else {
      let tmp = stack.pop();
      switch (cur) {
        case ")":
          if (tmp !== "(") {
            return false;
          }
          break;

        case "]":
          if (tmp !== "[") {
            return false;
          }
          break;

        case "}":
          if (tmp !== "{") {
            return false;
          }
          break;
        default:
          break;
      }
    }
  }
  return stack.length ? false : true;
};
var isValid = function (s) {
  while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
    s = s.replace("()", "");
    s = s.replace("[]", "");
    s = s.replace("{}", "");
  }
  return s ? false : true;
};
