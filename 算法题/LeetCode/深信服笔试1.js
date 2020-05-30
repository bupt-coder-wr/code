function parse(str) {
    let map = {
        a: 'bcd',
        b: '123',
        c: 'def',
        d: '321',
        e: '11',
        f: 'd',
        g: 'hf',
        h: '2',
    }
    var string = str.split('');
    var result = '';

    for (var j = 0; j < 6; j++) {
        for (let i = 0; i < string.length; i++) {
            if (string[i] >= 'a' && string[i] <= 'h') {
                result += map[string[i]]
            } else {
                result += string[i];
            }
        }
        if (j == 5) {
            console.log(result);
        }
        string = result.split('');
        result = ''
    }
}
parse('bfppp')