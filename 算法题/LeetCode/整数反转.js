var reverse = function (x) {
    var temp = x.toString();
    result = parseInt(temp.split('').reverse().join(''));
    if (x < 0) {
        result *= -1;
    }
    if (result > 2147483647 || result < -2147483648) {
        return 0;
    }
    return result;
};
var x = 1534236469;
console.log(reverse(x));