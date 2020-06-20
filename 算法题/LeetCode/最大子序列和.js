//给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
var maxSubArray = function (nums) {
    var max = nums[0];
    var length = nums.length;
    var sum = 0;
    for (var i = 0; i < length; i++) {
        for (var j = i; j < length; j++) {
            sum = sum + nums[j];
            if (sum > max) {
                max = sum;
            }
        }
        sum = 0;
    }
    return max;
};