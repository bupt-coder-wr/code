function fn() {
  let line1 = 5;
  let line2 = "..X.X";
  let line3 = "XX...";
  let n = parseInt(line1);
  let arr1 = line2.split("");
  let arr2 = line3.split("");
  if (arr2[n - 1] == "X") {
    console.log(-1);
    return;
  }
  let good = 0;
  for (let i = 1; i < n - 1; i++) {
    if (arr1[i] == "X" && arr2[i] == "X") {
      console.log(-1);
      return;
    }
    if (arr1[i] == "." && arr2[i] == ".") {
      good++;
    }
  }
  let result = Math.pow(2, good);
  console.log(result);
}
fn();
