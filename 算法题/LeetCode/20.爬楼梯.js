//假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
//每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

var climbStairs = function (n) {
    var array = [1, 1];
    if (n == 1) {
        return array[1]
    } else {
        for (var i = 2; i < n+1; i++) {
            array.push((array[i - 1] + array[i - 2]))
        }
        return array[n];
    }
};
climbStairs(4);