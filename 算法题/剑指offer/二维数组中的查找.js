/**
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */
function Find(target, array) {
  // write code here
  if (!array) return false;
  let rows = array.length,
    columns = array[0].length;
  let row = 0,
    column = columns - 1;
  while (row < rows && column >= 0) {
    if (array[row][column] == target) return true;
    else if (array[row][column] > target) column--;
    else row++;
  }
  return false;
}
/**
 * 解题思路：
 * 从二维数组的左下角和右上角进行查询
 * 边界条件是关键！！(被卡了近俩小时)
 */
