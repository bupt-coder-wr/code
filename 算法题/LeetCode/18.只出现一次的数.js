//常规思路 先排序  然后用i和i+1比较
// var singleNumber = function (nums) {
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length; i += 2) {
//         if (nums[i] == nums[i + 1]) {
//             continue;
//         } else {
//             return nums[i];
//         }
//     }
// };

var singleNumber = function(nums){
    result = 0;
    for(let i=0;i<nums.length;i++){
        result = nums[i]^result;
    }
    return result;
}
console.log(singleNumber([4,1,2,1,2]));