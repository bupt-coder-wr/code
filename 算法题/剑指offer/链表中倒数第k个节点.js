/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
  // write code here
  if (head == null || k <= 0) return false;
  let pre = head;
  let last = head;
  for (let i = 0; i < k - 1; i++) {
    if (last.next == null) return false;
    last = last.next;
  }
  while (last.next) {
    last = last.next;
    pre = pre.next;
  }
  return pre;
}
/**
 * 解题思路：
 * 使用双指针，让第一个指针先走k步，然后两个指针同时向前走:
 * 注意，如果求倒数第k个节点，实际上第一个指针先走k-1步
 * 当前面的指针为null时，返回后面的指针
 * 在跳出循环时，当last.next为null时就跳出
 */
