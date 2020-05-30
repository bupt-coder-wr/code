var isPowerOfThree = function (n) {
    if (n >=0 && n < 3) {
        if (n == 1) {
            return true;
        } else {
            return false;
        }
    } else {
        return isPowerOfThree(n / 3);
    }
};
var result = isPowerOfThree(0);
console.log(result);