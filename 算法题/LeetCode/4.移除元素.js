var removeElement = function (nums, val) {
    len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};
var nums = [0, 1, 2, 2, 3, 0, 4, 2];
var val = 2;
console.log(removeElement(nums, val));