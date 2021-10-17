// https://www.runoob.com/w3cnote/insertion-sort.html
function insert(arr, n) {
  const key = arr[n];
  let i = n;
  while (arr[i - 1] > key) {
    arr[i] = arr[i - 1];
    i--;
    if (i == 0) {
      break;
    }
  }
  arr[i] = key;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    insert(arr, i);
  }
}
