function merge(arr, L, M, R) {
  let leftSize = M - L;
  let rightSize = R - M + 1;

  let left = arr.slice(L, L + leftSize);
  let right = arr.slice(M);
  let i = 0,
    j = 0,
    k = L;
  while (i < leftSize && j < rightSize) {
    if (left[i] > right[j]) {
      arr[k++] = right[j++];
    } else {
      arr[k++] = left[i++];
    }
  }
  while (i < leftSize) {
    arr[k++] = left[i++];
  }
  while (j < rightSize) {
    arr[k++] = right[j++];
  }
}
function mergeSort(arr, l, r) {
  if (l == r) {
    return;
  } else {
    let m = parseInt((l + r) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m + 1, r);
  }
}
let arr = [6, 2, 5, 10, 3, 4, 8, 9, 7, 1];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
