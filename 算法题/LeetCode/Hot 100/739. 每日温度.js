/**
 * 2021/08.26
 * @param {*} temperatures
 * @returns
 */
// 暴力法
var dailyTemperatures = function (temperatures) {
  let result = [];
  for (let i = 0; i < temperatures.length - 1; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        result.push(j - i);
        break;
      }
      if (j === temperatures.length - 1 && temperatures[j] <= temperatures[i]) {
        result.push(0);
      }
    }
  }
  result.push(0);
  return result;
};

// 递减栈
var dailyTemperatures = function (temperatures) {
  let stack = [],
    result = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];
    while (
      stack.length &&
      temperature > temperatures[stack[stack.length - 1]]
    ) {
      let prev = stack.pop();
      result[prev] = i - prev;
    }
    stack.push(i);
  }
  return result;
};
