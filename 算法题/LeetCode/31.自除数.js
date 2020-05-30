var selfDividingNumbers = function (left, right) {
    let result = [];
    for (let num = left; num <= right; num++) {
        let array = num.toString().split('');
        console.log(array)
        if (array.some(index => index == '0'))
            continue;
        for (let i = 0; i < array.length; i++) {
            if (num % Number(array[i]) != 0)
                break;
            if (i == array.length-1)
                result.push(num);

        }
    }
    return result;
};
console.log(selfDividingNumbers(1,22));