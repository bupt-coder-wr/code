var findDisappearedNumbers = function (nums) {
    var temp = JSON.parse(JSON.stringify(nums)); 
    var result = [];
    for (let i = 0; i < nums.length; i++) {

        if (nums[nums[i] - 1] > 0) {
            console.log(nums[nums[i] - 1])
            temp[nums[i] - 1] = nums[nums[i] - 1] * -1;
            console.log(temp)
        }
    }
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] > 0) {
            result.push(i + 1);
        }
    }
    return result;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));