var uniqueMorseRepresentations = function (words) {
    x = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    array = []; //用于存放所有单词生成的数组
    for (i = 0; i < words.length; i++) { //遍历words中的单词
        temp = words[i];
        str = ''; //用于存放单个单词所生成的字符串
        for (j = 0; j < temp.length; j++) { //遍历一个单词中的字母
            str = str.concat('', x[temp[j].charCodeAt() - 97])
        }
        array.push(str);
    }
    var myarr = new Set(array);
    return [...myarr].length;

};

words = ["gin", "zen", "gig", "msg"];
console.log(uniqueMorseRepresentations(words));