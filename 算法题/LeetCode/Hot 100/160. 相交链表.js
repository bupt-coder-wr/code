/**
 * 2020.10.30
 * 编写一个程序，找到两个单链表相交的起始节点。
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let a = headA,
    b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};
/**
 * 双指针解法：
 * 每个指针走过的长度为两个链表的和
 * 当相等的时候则是第一次相遇的时候
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  const getLength = (root) => {
    if (!root) return 0;
    let l = 1;
    while (root.next) {
      ++l;
      root = root.next;
    }
    return l;
  };
  const aL = getLength(headA);
  const bL = getLength(headB);
  console.log(aL, bL);
  let subVal = aL > bL ? aL - bL : bL - aL;
  while (subVal) {
    if (aL > bL) {
      headA = headA.next;
    } else {
      headB = headB.next;
    }
    subVal--;
  }
  console.log(headA.val, headB.val);
  while (headA) {
    if (headA === headB) {
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
  }
  return null;
};
