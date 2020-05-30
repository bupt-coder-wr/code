/**
 * 统计一个数字在排序数组中出现的次数。
 */
function GetNumberOfK(data, k) {
  if (!data) return 0;
  let count = 0;
  data.forEach(item => {
    if (item == k) count++;
  });
  return count;
}
