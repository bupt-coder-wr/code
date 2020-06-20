var repeatedNTimes = function (A) {
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] == A[j])
                return A[i];
        }
    }
};
A = [1,2,3,3];
console.log(repeatedNTimes(A));