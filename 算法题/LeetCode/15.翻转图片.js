var hammingDistance = function (x, y) {
    a = x.toString(2);
    b = y.toString(2);
    var count = 0;
    a.length > b.length ? b = b.padStart(a.length, '0') : a = a.padStart(b.length, '0');
    console.log(a.length + '---' + b.length)
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            count++;
        }
    }
    return count;
};
console.log(hammingDistance(1, 4));