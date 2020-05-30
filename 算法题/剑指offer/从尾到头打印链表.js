/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/**
 * 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
 */
function printListFromTailToHead(head) {
  if (!head) return head;
  let stack = [];
  while (head) {
    stack.unshift(head.val);
    head = head.next;
  }
  return stack;
}
