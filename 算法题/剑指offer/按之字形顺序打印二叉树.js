/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
 */
function Print(pRoot) {
  // write code here
  if (!pRoot) return [];
  let result = [],
    queue = [],
    flag = true;
  queue.push(pRoot);
  while (queue.length) {
    let len = queue.length;
    let tmpArr = [];
    for (let i = 0; i < len; i++) {
      let tmp = queue.shift();
      tmpArr.push(tmp.val);
      if (tmp.left) queue.push(tmp.left);
      if (tmp.right) queue.push(tmp.right);
    }
    if (!flag) tmpArr.reverse();
    flag = !flag;
    result.push(tmpArr);
  }
  return result;
}
/**
 * 解题思路：
 * 先逐行打印，思路同“把二叉树打印成多行”
 * 然后将偶数行反转，或是引入新变量， 反转后进行push
 */
