/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  function heapify(tree, n, i) {
    if (i >= n) return;
    let c1 = 2 * i + 1;
    let c2 = 2 * i + 2;
    let max = i;
    if (c1 < n && tree[c1] > tree[max]) {
      max = c1;
    }
    if (c2 < n && tree[c2] > tree[max]) {
      max = c2;
    }
    if (max !== i) {
      swap(tree, max, i);
      heapify(tree, n, max);
    }
  }
  function swap(tree, i, j) {
    let tmp = tree[i];
    tree[i] = tree[j];
    tree[j] = tmp;
  }
  function build_heap(tree, n) {
    const lastNode = n - 1;
    const parent = parseInt((lastNode - 1) / 2);
    for (let i = parent; i >= 0; i--) {
      heapify(tree, n, i);
    }
  }
  build_heap(arr, arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, i, 0);
    heapify(arr, i, 0);
  }
  return arr.slice(0, k);
};
