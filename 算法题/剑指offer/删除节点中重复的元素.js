/**
 * 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication1(pHead) {
  // write code here
  var newHead = new ListNode('head');
  newHead.next = pHead;
  var pHead = newHead;
  var qHead = pHead.next;
  while (qHead) {
    while (qHead.next !== null && qHead.val !== qHead.next.val) {
      qHead = qHead.next;
    }
    if (pHead.next === qHead) {
      pHead = qHead;
      qHead = qHead.next;
    } else {
      qHead = qHead.next;
      pHead.next = qHead;
    }
  }
  return newHead.next;
}
/**
 * not done 
 */
