function swap(tree, i, j) {
  const tmp = tree[i];
  tree[i] = tree[j];
  tree[j] = tmp;
}
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
function buildHeap(tree, n) {
  let lastNode = n - 1;
  let parent = Math.floor((lastNode - 1) / 2);
  for (let i = parent; i >= 0; i--) {
    heapify(tree, n, i);
  }
}
function heapSort(tree) {
  let n = tree.length;
  buildHeap(tree, n);
  for (let i = n - 1; i >= 0; i--) {
    swap(tree, i, 0);
    heapify(tree, i, 0);
  }
}
const a = [2, 4, 1, 6, 9, 7, 10, 5, 8, 3];
heapSort(a);
console.log(a);
