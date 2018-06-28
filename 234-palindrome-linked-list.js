// Given a singly linked list, determine if it is a palindrome.
//
// Example 1:
  // Input: 1->2
  // Output: false
//
// Example 2:
  // Input: 1->2->2->1
  // Output: true
//
// Follow up:
  // Could you do it in O(n) time and O(1) space?

var isPalindrome = function(head) {
  if (!head) return true;

  let tortoise = head;
  let hare = head;
  let count = 1;

  let prev = null;
  while (hare && hare.next) {
    hare = hare.next.next;
    count += 1;
    if (hare) {
      count += 1;
    }

    const next = tortoise.next;
    tortoise.next = prev;
    prev = tortoise;
    tortoise = next;
  }

  let left = prev;
  let right = tortoise;
  if (count % 2 != 0) {
    right = tortoise.next;
  }

  while (left && right && left.val === right.val) {
    left = left.next;
    right = right.next;
  }

  return (left === null && right === null);
};
