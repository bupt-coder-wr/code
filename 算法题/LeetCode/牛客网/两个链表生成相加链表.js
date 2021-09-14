/**
 * 假设链表中每一个节点的值都在 0 - 9 之间，那么链表整体就可以代表一个整数。
 * 给定两个这种链表，请生成代表两个整数相加值的结果链表。
 * 例如：链表 1 为 9->3->7，链表 2 为 6->3，最后生成新的结果链表为 1->0->0->0。
 */
// 将原有链表翻转，转换成 两数相加 问题， 再将结果翻转
function addInList(head1, head2) {
  // write code here
  const reverse = (root) => {
    if (!root) return root;
    let pre = null,
      cur = root,
      next = root;
    while (cur) {
      next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    return pre;
  };
  let h1 = reverse(head1);
  let h2 = reverse(head2);
  let sum = new ListNode(0),
    carry = 0;
  let head = sum;
  while (h1 || h2 || carry) {
    const v1 = h1 ? h1.val : 0;
    const v2 = h2 ? h2.val : 0;
    const sumVal = v1 + v2 + carry;
    carry = sumVal >= 10 ? 1 : 0;
    sum.next = new ListNode(sumVal % 10);
    sum = sum.next;
    if (h1) h1 = h1.next;
    if (h2) h2 = h2.next;
  }
  return reverse(head.next);
}
module.exports = {
  addInList: addInList,
};
