function fn() {
  let line1 = "5 2";
  let line2 = "3 1 3 2 5";
  let len = parseInt(line1.split(" ")[0]);
  let num = parseInt(line1.split(" ")[1]);
  let arr = line2.split(" ");
  if (num < 1) {
    console.log(0);
    return;
  }
  for (let i = 0; i < len; i++) {
    arr[i] = parseInt(arr[i]) | num;
  }
  var obj = {};
  for (let item of arr) {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  let max = 0;
  for (let item in obj) {
    if (obj[item] > max) {
      max = obj[item];
    }
  }
  console.log(max);
}
fn();
