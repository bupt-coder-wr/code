/**
 * 一个由小写字母组成的字符串可以看成一些同一字母的最大碎片组成的。例如,"aaabbaaac"是由下面碎片组成的:'aaa','bb','c'。牛牛现在给定一个字符串,请你帮助计算这个字符串的所有碎片的平均长度是多少。
 */
let str = readline();
let result = []
for (let i = 0; i < str.length; i++) {
  let j = i;
  for (; j < str.length; j++) {
    if(str[j]!==str[i]) {
      result.push(str.substr(i,j))
      
    }
  }
}
