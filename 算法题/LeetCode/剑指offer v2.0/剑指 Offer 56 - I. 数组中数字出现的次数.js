/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * 相同的数异或为0，不同的异或为1，0与任何数异或都等于这个数本身
 * 故：数组里所有数异或 = 两个目标数异或，由于这两个数不同，故结果必然不为0
 * 假设数组异或的二进制结果为10010，则说明这两个数从右向左第2位是不同的
 * 则可以根据所有数的第二位为0或为1将数组分为两组
 * 这样目标数必然分散在不同的组内，最后将两组数进行异或，就得到答案
 */
var singleNumbers = function (nums) {
  let res = 0
  for (let item of nums) {
    res ^= item
  }
  let div = 1
  while ((div & res) == 0) {
    div <<= 1
  }
  let a = 0,
    b = 0
  for (let item of nums) {
    if (div & item) {
      a ^= item
    } else {
      b ^= item
    }
  }
  return [a, b]
}
