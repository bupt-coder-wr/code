function isTrue(url, string) {
    // var url = readline();
    // var string = readline();
    var flag = 0;
    if (url.indexOf('?') != -1) {
        var str = url.split('?')[1].split('&')
        var array = [];

        for (let i = 0; i < str.length; i++) {
            array.push(str[i].split('=')[1])
        }
        for (let i = 0; i < array.length; i++) {
            if (string == array[i]) {
                flag = 1;
            }
        }
    }

    if (flag == 1) console.log('true')
    else console.log('false')
}
isTrue('https://www.baidu.com/?q=lalal', 'lalal')