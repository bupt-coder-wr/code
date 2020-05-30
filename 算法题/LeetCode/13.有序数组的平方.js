var sortedSquares = function (A) {
    A = A.map(i => i * i);
    A.sort(function (a, b) {
        return a - b;
    });
    return A;
};
var A = [-7, -3, 2, 3, 11];
console.log(sortedSquares(A))