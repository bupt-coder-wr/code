var heightChecker = function (heights) {
    var copy = JSON.stringify(heights);
    copy = JSON.parse(copy);
    heights.sort((a, b) => a - b)
    count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] != copy[i]) {
            count++;
        }
    }
    return count;
};
var x = [1, 1, 4, 2, 1, 3];
console.log(heightChecker(x));