function swap(tree, i, j) {
  let tmp = tree[i];
  tree[i] = tree[j];
  tree[j] = tmp;
}
function heapify(tree, n, i) {
  if (i > n) return;
  let c1 = 2 * i + 1;
  let c2 = 2 * i + 2;
  let max = i;
  if (c1 < n && tree[c1] > tree[max]) {
    max = c1;
  }
  if (c2 < n && tree[c2] > tree[max]) {
    max = c2;
  }
  if (i !== max) {
    swap(tree, max, i);
    heapify(tree, n, max);
  }
}
function build_heap(tree, n) {
  let lastNode = n - 1;
  let parent = Math.floor((lastNode - 1) / 2);
  for (let i = parent; i >= 0; i--) {
    heapify(tree, n, i);
  }
}
function heapSort(tree, n) {
  build_heap(tree, n);
  for (let i = n - 1; i >= 0; i--) {
    swap(tree, i, 0);
    heapify(tree, i, 0);
  }
}
let tree = [2, 5, 3, 1, 8, 4, 7, 6, 9];
heapSort(tree, tree.length);
console.log(tree);
