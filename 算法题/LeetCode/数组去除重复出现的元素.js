function duplicates(arr) {
    var o = {};
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in o) {
            o[arr[i]]++;
        } else {
            o[arr[i]] = 1;
        }
    }
    console.log(o);
    for (let i in o) {
        if (o[i] > 1) result.push(i);
    }
    return result;
}
console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]));