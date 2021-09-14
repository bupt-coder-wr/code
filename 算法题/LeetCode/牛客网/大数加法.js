/**
 * 以字符串的形式读入两个数字，编写一个函数计算它们的和，以字符串形式返回。
 * （字符串长度不大于100000，保证字符串仅由'0'~'9'这10种字符组成）
 */
function solve(s, t) {
  // write code here
  const reverse = (s) => {
    return s.split("").reverse().join("");
  };
  const s1 = reverse(s);
  const t1 = reverse(t);
  let result = "",
    carry = 0;
  let len = Math.max(s1.length, t1.length);
  for (let i = 0; i < len; i++) {
    const v1 = s1[i] ? parseInt(s1[i]) : 0;
    const v2 = t1[i] ? parseInt(t1[i]) : 0;
    const sumVal = v1 + v2 + carry;
    result += sumVal % 10;
    carry = sumVal >= 10 ? 1 : 0;
  }
  if (carry) result += 1;
  return reverse(result);
}
module.exports = {
  solve: solve,
};
