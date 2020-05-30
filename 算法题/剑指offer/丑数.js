/**
 * 把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，
 * 因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 */
function GetUglyNumber_Solution(index) {
  // write code here
  if (index < 0) return;
  let pos2 = 0,
    pos3 = 0,
    pos5 = 0;
  const res = [1];
  for (let i = 1; i < index; i++) {
    res[i] = Math.min(res[pos2] * 2, res[pos3] * 3, res[pos5] * 5);
    if (res[i] === res[pos2] * 2) pos2++;
    if (res[i] === res[pos3] * 3) pos3++;
    if (res[i] === res[pos5] * 5) pos5++;
  }
  return res[index - 1];
}
/**
 * not done
 */
