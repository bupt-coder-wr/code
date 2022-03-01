function swap(tree, i, j) {
  let tmp = tree[i]
  tree[i] = tree[j]
  tree[j] = tmp
}

/**
 * @param {完全二叉树} tree
 * @param {节点数} n
 * @param {做堆操作的当前节点} i
 * 递归法
 */
function heapify(tree, n, i) {
  // 递归出口,在最大值节点大于节点数时，递归结束
  if (i >= n) return
  // 分别获取当前节点的两个孩子左边
  let c1 = 2 * i + 1
  let c2 = 2 * i + 2
  let max = i
  // 找出当前堆的最大值
  if (c1 < n && tree[c1] > tree[max]) {
    max = c1
  }
  if (c2 < n && tree[c2] > tree[max]) {
    max = c2
  }
  // 将最大值放在堆顶，递归这一操作
  // 这是一个从上往下的过程，max和i数值发生交换，但是索引不变，此时 max 还指向 c1 或 c2 的位置,故仍以 max 为节点 heapify
  if (max !== i) {
    swap(tree, max, i)
    heapify(tree, n, max)
  }
}
/**
 * 迭代法
 */
function heapify(tree, n, i) {
  const tmp = tree[i]
  for (let k = 2 * i + 1; k < n; k = 2 * k + 1) {
    // 从i节点的左子节点开始
    if (k + 1 < n && tree[k] < tree[k + 1]) {
      // 如果左子节点小于右子节点，寻找最大子节点
      k++
    }
    if (tree[k] > tmp) {
      swap(tree, i, k)
      // 此时k为父节点，继续向下堆化
      i = k
    } else {
      break
    }
  }
}
/**
 *
 * @param {完全二叉树} tree
 * @param {节点数} n
 */
function build_heap(tree, n) {
  // 从 h - 1 层开始，依次往上建堆
  let last_node = n - 1
  // 此时parent节点为最后一个叶子节点的父节点
  let parent = t((last_node - 1) / 2)
  for (let i = parent; i >= 0; i--) {
    heapify(tree, n, i)
  }
}

/**
 * @param {排序的数组} tree
 * @param {数组大小} n
 */
function heapSort(tree, n) {
  // 构建一个堆，此时满足堆的特性，即
  // tree为完全二叉树；parent > children
  build_heap(tree, n)
  // 将根节点和最后一个节点做交换，即将最大值放在最后
  for (let i = n - 1; i >= 0; i--) {
    swap(tree, i, 0)
    heapify(tree, i, 0)
  }
}
let tree = [2, 5, 3, 1, 8, 4, 7, 6, 9]
heapSort(tree, tree.length)
console.log(tree)
