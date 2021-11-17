/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.trim();
  const stack = [];
  let num = 0;
  let preSign = "+";
  for (let i = 0; i < s.length; i++) {
    // number
    if (!isNaN(Number(s[i])) && s[i] !== " ") {
      num = num * 10 + Number(s[i]);
    }
    // signal
    if (isNaN(Number(s[i])) || i == s.length - 1) {
      switch (preSign) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        default:
          stack.push((stack.pop() / num) | 0);
      }
      num = 0;
      preSign = s[i];
    }
  }
  return stack.reduce((x, y) => x + y);
};
let a = " 3+5 / 2 ";
console.log(calculate(a));
