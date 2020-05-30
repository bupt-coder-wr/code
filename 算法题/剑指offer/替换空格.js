/**
 * 请实现一个函数，把字符串的每个空格替换成"%20"
 */
function replaceFun(str) {
  return str.split(" ").join("%20");
}
console.log(replaceFun("We are happy"));
