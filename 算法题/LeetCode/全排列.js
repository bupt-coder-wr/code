/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var result = [];
var permute = function(nums) {
  function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  function perm(arr, p, q) {
    if (p === q) {
      result.push(arr.slice(0));
    } else {
      for (let i = p; i <= q; i++) {
        swap(arr, p, i);
        perm(arr, p + 1, q);
        swap(arr, p, i);
      }
    }
  }
  perm(nums, 0, nums.length - 1);
  return result;
};

let array = [1, 2, 3];

console.log(permute(array, 0, array.length - 1));
