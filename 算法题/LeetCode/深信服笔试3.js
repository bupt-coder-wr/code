function transform(number) {
    var int = number.toString().split('.')[0]
    var float = number.toString().split('.')[1]
    var result = ''
    var floatArray = float.split('')
    for (let i = 0; i < floatArray.length; i++) {
        switch (floatArray[i]) {
            case '0':
                result += '零';
                break;
            case '1':
                result += '一';
                break;
            case '2':
                result += '二';
                break;
            case '3':
                result += '三';
                break;
            case '4':
                result += '四';
                break;
            case '5':
                result += '五';
                break;
            case '6':
                result += '六';
                break;
            case '7':
                result += '七';
                break;
            case '8':
                result += '八';
                break;
            case '9':
                result += '九';
                break;
        }

    }
    console.log('零点' + result)

}
transform(0.8452331)