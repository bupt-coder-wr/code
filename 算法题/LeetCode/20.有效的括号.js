var isValid = function (s) {
    var array = [];
    var sArray = s.split('');
    if (sArray.length % 2 != 0) {
        return false;
    }
    // console.log(sArray);
    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] == '{' || sArray[i] == '[' || sArray[i] == '(') {
            // console.log('入栈  这是第 ' + i + ' 个符号' + sArray[i]);
            array.push(sArray[i]);
            // console.log(array);
        }
        if (sArray[i] == '}') {
            if (array.pop() != '{') {
                return false;
            }
        } else if (sArray[i] == ']') {
            if (array.pop() != '[') {
                return false;
            }
        } else if (sArray[i] == ')') {
            if (array.pop() != '(') {
                return false;
            }
        }

    }
    console.log(array)
    if (array.length != 0) {
        return false;
    }

    return true;
};
var s = "({()})";
console.log(isValid(s));