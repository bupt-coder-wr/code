/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if ((s[i] >= "a" && s[i] <= "z") || (s[i] >= "A" && s[i] <= "Z"))
      str += s[i];
  }
  let index1 = 0,
    index2 = str.length - 1;
  str = str.toLowerCase();
  while (index1 !== index2) {
    if (str[index1] !== str[index2]) {
      return false;
    } else {
      index1++;
      index2--;
    }
  }
  return true;
};
console.log(isPalindrome("race a car"));
