function firstAppearSimple(string) {
  let str = string.split('');
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    }
    else {
      obj[str[i]]++;
    }
  }
  for (let item in obj) {
    if (obj[item] == 1) {
      return item
    }
  }
  return '#';
}