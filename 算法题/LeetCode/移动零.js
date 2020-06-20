//给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
var moveZeroes = function (nums) {
    var count = 0;
    var length = nums.length;
    for (let i = 0; i < length; i++) {
        if (nums[i] == 0) {
            count++;
        } else {
            nums[i - count] = nums[i];
        }
    }
    for (let j = length - count; j < length; j++) {
        nums[j] = 0;
    }
    return nums;
};
console.log(moveZeroes([0,1,0,3,12]));