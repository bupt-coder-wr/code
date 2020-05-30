/**
 * 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
  // write code here
  if (pHead == null || pHead.next == null || pHead.next.next == null)
    return null;
  var fast = pHead.next.next;
  var slow = pHead.next;
  while (fast.next && fast !== slow) {
    if (fast.next.next !== null && slow.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    } else {
      return null;
    }
  }
  fast = pHead;
  while (slow.next && fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
}
/**
 * not done
 */
