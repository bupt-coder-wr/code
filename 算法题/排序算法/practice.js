// 合并
function merge(arr, L, M, R) {
  let LEFT_SIZE = M - L;
  let RIGHT_SIZE = R - M + 1;
  let left = [],
    right = [];

  for (let i = L; i < M; i++) {
    left[i - L] = arr[i];
  }

  for (let i = M; i <= R; i++) {
    right[i - M] = arr[i];
  }
  let i = 0,
    j = 0,
    k = L;
  while (i < LEFT_SIZE && j < RIGHT_SIZE) {
    if (left[i] < right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
    }
  }
  while (i < LEFT_SIZE) {
    arr[k++] = left[i++];
  }
  while (j < RIGHT_SIZE) {
    arr[k++] = right[j++];
  }
}

// 分治
function mergeSort(arr, L, R) {
  if (L === R) {
    return;
  } else {
    let M = Math.floor((L + R) / 2);
    mergeSort(arr, L, M);
    mergeSort(arr, M + 1, R);
    merge(arr, L, M + 1, R);
  }
}
let arr = [6, 2, 5, 10, 4, 8, 9, 7];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);