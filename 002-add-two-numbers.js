// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example
  // Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  // Output: 7 -> 0 -> 8
  // Explanation: 342 + 465 = 807.

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2, carry) {
  if (!l1 && !l2 && !carry) return null;

  const int1 = l1 ? l1.val : 0;
  const int2 = l2 ? l2.val : 0;
  if (!carry) carry = 0;

  let sum = int1 + int2 + carry;

  carry = Math.floor(sum / 10);
  sum = sum % 10;

  const start = new ListNode(sum);

  const next1 = l1 ? l1.next : null;
  const next2 = l2 ? l2.next : null;
  start.next = addTwoNumbers(next1, next2, carry);

  return start;
};
