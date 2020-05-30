var twoSum = function (nums, target) {
    len = nums.length;
    let result = [];
    for (let i = 0; i < len; i++) {

        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] == target) {
                result.push(i);
                result.push(j);
                return result;
            }
        }

    }
};
var nums = [-3, 4, 3, 90];
var target = 0;
console.log(twoSum(nums, target));