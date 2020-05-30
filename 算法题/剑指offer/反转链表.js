/**
 * 输入一个链表，反转链表后，输出新链表的表头。
 */
/**
 * function ListNode(x){
 *  this.val = x;
 *  this.next = null;
 */

function ReverseList(pHead) {
  // write code here
  let p = pHead;
  let arr = [];
  while (p) {
    arr.push(p.val);
    p = p.next;
  }
  p = pHead;
  while (p) {
    p.val = arr.pop();
    p = p.next;
  }
  return pHead;
}
/**
 * 只改变链表中的值，不改变节点位置
 */

function ReverseLink(pHead) {
  let nowHead = pHead,
    sourceLink = pHead.next,
    tempNode = null;
  while (sourceLink) {
    tempNode = sourceLink; // 把源链表首节点取出
    sourceLink = sourceLink.next; // 源链表首节点后移
    tempNode.next = nowHead; // 取出的节点接在目标链表的首部
    nowHead = tempNode; // 目标链表首部更改为新的节点
  }
  head.next = null; // 别忘了把原先的链表头指向NULL
  return nowHead;
}
/**
 * 空间复杂度为O(1)的算法
 */
