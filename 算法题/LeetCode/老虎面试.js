var max = 1;
var count = 1;
function findDeepth(array) {
    
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) == true) {
            count++;
            if (count > max) {
                max = count;
            }
            findDeepth(array[i]);
        } else {
            continue;
        }
        count = 1;
    }
    return max;

}
console.log(findDeepth([1, 2,[7,9], 3, [1, 2, 3],[1, 2, [2, 3,[4,8,[[]]]]]]))
