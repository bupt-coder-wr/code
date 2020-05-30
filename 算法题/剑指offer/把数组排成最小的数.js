function PrintMinNumber(numbers) {
  numbers.sort(compare);
  var res = "";
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i];
  }
  return res;
}

function compare(a, b) {
  let str1 = a + "" + b;
  let str2 = b + "" + a;
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) > str2.charAt(i)) return 1;
    else return -1
  }
}
