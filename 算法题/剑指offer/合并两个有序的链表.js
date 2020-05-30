/**
 * 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function Merge(pHead1, pHead2) {
  if (pHead1 == null) return pHead2;
  if (pHead2 == null) return pHead1;
  var pMergeHead = null;
  if (pHead1.value < pHead2.value) {
    pMergeHead = pHead1;
    pMergeHead.next = Merge(pHead1.next, pHead2);
  } else {
    pMergeHead = pHead2;
    pMergeHead.next = Merge(pHead1, pHead2.next);
  }
  return pMergeHead;
}
/**
 * 解题思路：
 * 使用递归的方法
 */