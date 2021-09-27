// 不能用数字做，会造成溢出；应该使用字符串
var addBinary = function (a, b) {
    maxLength = a.length > b.length ? a.length : b.length;
    console.log(maxLength);
    if (a.length > b.length) {
        b = b.padStart(maxLength, '0');
    } else {
        a = a.padStart(maxLength, '0');
    }
    var flag = 0;
    var result = [];

    for (let i = maxLength - 1; i >= 0; i--) {
        result[i] = a[i] ^ b[i] ^ flag; //从低位开始运算
        if ((a[i] == '1' && b[i] == '1') || (a[i] == '1' && flag == '1') || (flag == '1' && b[i] == '1')) { //判断是否进位
            flag = 1;
            if (i == 0) {
                result.unshift('1');
            }
        } else {
            flag = 0;
        }

    }

    return result.join('');

}
var a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

console.log(addBinary(a, b));
