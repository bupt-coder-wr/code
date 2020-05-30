function findMaxPos(arr, n) {
  let max = arr[0];
  let pos = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
      pos = i;
    }
  }
  return pos;
}

function selectSort(arr, n) {
  while (n - 1) {
    let pos = findMaxPos(arr, n);
    let tmp = arr[pos];
    arr[pos] = arr[n - 1];
    arr[n - 1] = tmp;
    n--;
  }
}

let arr = [6, 2, 5, 10, 4, 8, 9, 7];
selectSort(arr, arr.length);
console.log(arr);
