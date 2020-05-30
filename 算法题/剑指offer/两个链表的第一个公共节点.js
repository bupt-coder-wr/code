/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/**
 * 输入两个链表，找出它们的第一个公共结点。
 */
function FindFirstCommonNode(pHead1, pHead2) {
  // write code here
  if (pHead1 === null || pHead2 === null) return null;
  let p1 = pHead1,
    p2 = pHead2;
  let pLength1 = getLength(p1);
  let pLength2 = getLength(p2);
  let tmp = pLength1 < pLength2 ? pLength2 - pLength1 : pLength1 - pLength2;
  while (tmp) {
    pLength1 > pLength2 ? (p1 = p1.next) : (p2 = p2.next);
    tmp--;
  }
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}

function getLength(p) {
  let length = 0;
  let cur = p;
  while (cur) {
    length++;
    cur = cur.next;
  }
  return length;
}
/**
 * 解题思路：
 * 首先判空(异常处理),计算两链表长度，让长链表的头指针先走(长链表-短链表)步
 * 最后两链表同时向前，直到一方为空
 * 最后返回p1的val
 */
