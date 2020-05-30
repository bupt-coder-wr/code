var fib = function (N) {
    var array = [0, 1];
    if (N == 0)
        return array[0];
    else if (N == 1)
        return array[1];
    else {
        for (var i = 2; i != N; i++) {
            array.push(array[i - 1] + array[i - 2])
        }
        return array[i - 1] + array[i - 2];
    }
};
console.log(fib(4));