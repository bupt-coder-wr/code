/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let tmp = s.replace("IV", "a");
  tmp = tmp.replace("IX", "b");
  tmp = tmp.replace("XL", "c");
  tmp = tmp.replace("XC", "d");
  tmp = tmp.replace("CD", "e");
  tmp = tmp.replace("CM", "f");

  let res = 0;
  for (let i = 0; i < tmp.length; i++) {
    res += getValue(tmp[i]);
  }
  return res;
  function getValue(c) {
    switch (c) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      case "a":
        return 4;
      case "b":
        return 9;
      case "c":
        return 40;
      case "d":
        return 90;
      case "e":
        return 400;
      case "f":
        return 900;
    }
    return 0;
  }
};
