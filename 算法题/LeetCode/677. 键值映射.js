var MapSum = function () {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  this.map.set(key, val);
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let sum = 0;
  for (let [key, value] of this.map.entries()) {
    if (key.startsWith(prefix)) {
      sum += value;
    }
  }
  return sum;
};
