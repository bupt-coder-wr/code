// 一次冒泡
function bubble(arr, n) {
  let tmp;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      tmp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tmp;
    }
  }
}

// 冒泡排序
function bubbleSort(arr, n) {
  for (let i = n; i >= 1; i--) {
    bubble(arr, i);
  }
}

let arr = [6, 2, 5, 10, 4, 8, 9, 7];
bubbleSort(arr, arr.length);
console.log(arr);
