/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let index1 = 0,
    index2 = numbers.length;
  while (index1 < index2) {
    var sum = numbers[index1] + numbers[index2];
    if (sum === target) {
      return [index1 + 1, index2 + 1];
    } else if (sum < target) {
      index1++;
    } else {
      index2--;
    }
  }
};
