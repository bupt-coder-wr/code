/**
 * 2020.11.15
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 */
var mergeKLists = function (lists) {
  if (!lists) return null;
  if (lists.length === 1) return lists[0];
  let array = [];
  lists.forEach((element) => {
    let head = element;
    while (head) {
      array.push(head.val);
      head = head.next;
    }
  });
  array.sort((a, b) => a - b);
  let head = new ListNode();
  let node = head;
  while (array.length) {
    node.next = new ListNode(array.shift());
    node = node.next;
  }
  return head.next;
};

var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  const mergeTwoList = (l1, l2) => {
    let head = new ListNode(),
      pre = head;
    while (l1 && l2) {
      if (l1.val > l2.val) {
        pre.next = l2;
        l2 = l2.next;
      } else {
        pre.next = l1;
        l1 = l1.next;
      }
      pre = pre.next;
    }
    pre.next = l1 ? l1 : l2;
    return head.next;
  };

  lists.splice(0, 2, mergeTwoList(lists[0], lists[1]));
  return mergeKLists(lists);
};
