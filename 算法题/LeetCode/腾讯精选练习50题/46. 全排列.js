/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
<<<<<<< HEAD
 **/
var permute = function (nums) {
  let res = [];
  prem(nums, 0, nums.length - 1);
  console.log(res);
  function swap(array, p, q) {
    const tmp = array[p];
    array[p] = array[q];
    array[q] = tmp;
  }
  function prem(array, p, q) {
    if (p === q) {
      res.push(array.slice(0));
      console.log(array);
    } else {
      for (let i = p; i <= q; i++) {
        swap(array, p, i);
        prem(array, p + 1, q);
        swap(array, p, i);
      }
    }
  }
};

permute([1, 2, 3, 4]);
=======
 */
var permute = function (nums) {};
>>>>>>> 234770e6af22e0845f888efc4f02d6a0379b51ef
