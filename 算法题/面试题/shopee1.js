function way1(str) {
  let count = 1;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) count++;
    else count = 1;
    if (count >= 4) {
      return true;
    }
  }
  return false;
}

function way2(str) {
  let count = 3;
  for (let i = 0; i < str.length - 1; i++) {
    console.log(str[i + 1], "----", str[i], "----", count);
    if (str[i + 1] - str[i] == 1) {
      --count;
    } else count = 4;
    console.log(count);
    if (count == 0) return true;
  }
  return false;
}

let str = "12342389541";
let result = way2(str);
console.log(result ? "Y" : "N");
