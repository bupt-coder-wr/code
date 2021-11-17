var calculate = function (s) {
  const ops = [1];
  let sign = 1;
  let res = 0;
  let i = 1;
  while (i < s.length) {
    // number
    if (!isNaN(Number(s[i]))) {
      let num = 0;
      while (i < s.length && !isNaN(Number(s[i])) && s[i] !== " ") {
        num = num * 10 + Number(s[i]);
        i++;
      }
      res += sign * num;
    } else {
      switch (s[i]) {
        case " ":
          i++;
          break;
        case "+":
          sign = ops[ops.length - 1];
          break;
        case "-":
          sign = -ops[ops.length - 1];
          break;
        case "(":
          ops.push(sign);
          break;
        default:
          ops.pop();
          break;
      }
    }
  }
  return res;
};
