/**
 * 2020.11.09
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 */
/**
 * https://www.bilibili.com/video/BV1ba4y1J7yh?from=search&seid=9141713365133090669
 *          1   2   3   4
 *              5   6   7
 * -----------------------
 *          7  14  21  28
 *      6  12  18  24
 *   5 10  15  20
 *   5 16  34  52  45  28
 *   6  9   9   6   7   8
 * 按位相乘，保存结果，将结果进行累加，最后统一进位
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  let len1 = num1.length
  let len2 = num2.length
  let result = Array(len1 + len2).fill(0)
  for (let i = len1 - 1; i >= 0; i--) {
    let x = num1.charAt(i) - '0'
    for (let j = len2 - 1; j >= 0; j--) {
      let y = num2.charAt(j) - '0'
      result[i + j + 1] += x * y
    }
  }

  for (let i = len1 + len2 - 1; i > 0; i--) {
    result[i - 1] = parseInt(result[i] / 10) + result[i - 1]
    result[i] = result[i] % 10
  }
  if (result[0] === 0) {
    result.shift()
  }
  return result.join('')
}
