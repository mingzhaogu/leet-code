// Sort a linked list in O(n log n) time using constant space complexity.
//
// Example 1:
  // Input: 4->2->1->3
  // Output: 1->2->3->4
//
// Example 2:
  // Input: -1->5->3->4->0
  // Output: -1->0->3->4->5

// IMPLEMENTATION SIMILAR TO MERGESORT

var sortList = function(head) {
  if (!head) return null;
  if (!head.next) return head;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = slow.next;
  slow.next = null;

  return combine(sortList(head), sortList(fast));
};

var combine = function(left, right) {
  let start;
  if (left.val < right.val) {
    start = left;
    left = left.next;
  } else {
    start = right;
    right = right.next;
  }

  let pointer = start;
  while (left && right) {
    if (left.val < right.val) {
      pointer.next = left;
      pointer = pointer.next;
      left = left.next;
    } else {
      pointer.next = right;
      pointer = pointer.next;
      right = right.next;
    }
  }

  if (!right) {
    pointer.next = left;
  } else {
    pointer.next = right;
  }

  return start;
};
