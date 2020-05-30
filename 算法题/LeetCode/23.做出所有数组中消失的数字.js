//给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
//找到所有在 [1, n] 范围之间没有出现在数组中的数字。

var findDisappearedNumbers = function (nums) {
    nums = Array.from(new Set(nums))
    console.log(nums)
    for (var i = 1; i < nums.length; i++) {
        nums[nums[i]] *= -1;
    }
    return nums.filter(i => nums[i] > 0);
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))