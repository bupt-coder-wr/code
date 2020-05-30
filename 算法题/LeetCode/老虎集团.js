function Solution(nums, k) {
    var result = [];
    for (let i = 0; i < k; i++) {
        result.push(nums[i]);
    }
    result.sort((a, b) => b - a);
    for (let i = k; i < nums.length; i++) {

        if (nums[i] < result[0]) {
            result.splice(0, 1);
            result.splice(k - 1, 0, nums[i])
            result.sort((a, b) => b - a)
        }
    }
    return result;
}
console.log(Solution([2, 3, 4, 3, 2, 45, 7, 4, 12, 1,4, 9, 0], 5));