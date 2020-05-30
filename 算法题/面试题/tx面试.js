/**
 * 实现超出整数存储范围的两个大正整数相加 function add(a, b)，注：参数a和b以及函数的返回值都是字符串
 */
function add(a, b) {
  let arr1 = a.split("").reverse();
  let arr2 = b.split("").reverse();

  let len1 = arr1.length,
    len2 = arr2.length;
  let carray = 0;
  let res = [],
    i = 0;
  arr1 = arr1.map(item => Number(item));
  arr2 = arr2.map(item => Number(item));
  while (Math.max(len1, len2) >= i) {
    // console.log(arr1[i], arr2[i], carray);
    if (arr1[i] == undefined) arr1[i] = 0;
    if (arr2[i] == undefined) arr2[i] = 0;
    res[i] = (arr1[i] + arr2[i] + carray) % 10;
    carray = Math.floor((arr1[i] + arr2[i] + carray) / 10);
    i++;
    // console.log(res, carray);
  }
  return res.reverse().join("");
}

console.log(add("99999999999999999999", "9999999999999999"));
