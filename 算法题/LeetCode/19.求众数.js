var majorityElement = function (nums) {
    nums.sort((a, b) => a - b);
    return nums[parseInt(nums.length/2)]
};
console.log(majorityElement([2,2,1,1,1,2,2]));