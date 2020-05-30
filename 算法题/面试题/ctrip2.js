let line = "2 3 5 7 8";
let array = line.split(" ");
for (let i = 0; i < array.length; i++) {
  array[i] = parseInt(array[i]);
}
fn(array);
function fn(array) {
  array.sort((a, b) => a - b);
  let result = false;
  for (let i = array.length - 1; i >= 0; i--) {
    result = isSumTwo(array, 0, i - 1, array[i]);
    if (result) {
      console.log(result);
      return;result
    }
  }
  console.log(result);
  return;
  function isSumTwo(array, start, end, target) {
    let i = start,
      j = end;
    while (i < j) {
      if (array[i] + array[j] === target) {
        return true;
      } else if (array[i] + array[j] < target) {
        i++;
      } else {
        j--;
      }
    }
    return false;
  }
}
