var findUnsortedSubarray = function (nums) {
    var temp = JSON.parse(JSON.stringify(nums));
    nums.sort((a, b) => a - b);
    console.log(nums);
    console.log(temp);
    if (temp.toString() == nums.toString()) {
        return 0;
    }
    console.log(temp == nums)
    for (var i = 0; i < nums.length; i++) {
        if (temp[i] != nums[i])
            break;
    }
    console.log(i);
    for (var j = nums.length - 1; j > -1; j--) {
        if (temp[j] != nums[j])
            break;
    }
    console.log(j);
    return j - i + 1;
};
console.log(findUnsortedSubarray([1, 2, 3, 4, 5]));