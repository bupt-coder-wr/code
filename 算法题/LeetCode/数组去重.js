//遇事不决 两个for

//先sort()排序  然后判断相邻两个元素是否相等

//Set()
function removeFunc1(array) {
    return Array.from(new Set(array));
}

//利用对象属性的唯一性
function removeFunc2(array) {
    var result = [];
    var obj = {};
    for (let i = 0; i < array.length; i++) {
        obj[array[i]] = 1;
    }
    for (let i in obj) {
        result.push(i);
    }
    return result;
}
console.log(removeFunc2([1,2,3,4,5,6,1,2,3,4]))