/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const tmp = this.nums.slice();
  const len = tmp.length;
  for (let i = 0; i < tmp.length; i++) {
    let p = parseInt(Math.random() * len);
    const tmpNum = tmp[p];
    tmp[p] = tmp[i];
    tmp[i] = tmpNum;
  }
  return tmp;
};
