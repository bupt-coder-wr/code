function quickSort(arr, L, R) {
  if (L >= R) return;
  let i = L;
  let j = R;
  let pivot = arr[i];

  while (i < j) {
    while (i < j && arr[j] >= pivot) {
      j--;
    }
    if (i < j) {
      arr[i++] = arr[j];
    }
    while (i < j && arr[i] < pivot) {
      i++;
    }
    if (i < j) {
      arr[j--] = arr[i];
    }
  }
  arr[i] = pivot;
  quickSort(arr, L, i - 1);
  quickSort(arr, i + 1, R);
}

const a = [2, 4, 1, 6, 9, 7, 5, 8, 3];
quickSort(a, 0, a.length - 1);
console.log(a);
