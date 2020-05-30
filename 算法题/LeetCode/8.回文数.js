var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    } else {
        temp = x.toString().split('').reverse().join('');
    }
    if (temp == x.toString()) {
        return true;
    } else {
        return false;
    }
};
x = 12021;
console.log(isPalindrome(x));