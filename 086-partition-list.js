// Given a linked list and a value x,
// partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example:
// Input: head = 1 -> 4 -> 3 -> 2 -> 5 -> 2, x = 3
// Output: 1 -> 2 -> 2 -> 4 -> 3 -> 5

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// @param {ListNode} head
// @param {number} x
// @return {ListNode}

const insertNode = function (left, current, right = null) {
    if (left) {
        left.next = current;
    }
    current.next = right
    return current;
};

var partition = function (head, x) {
    let current = head
    let leftHead, leftEnd, rightHead, rightEnd

    while (current) {
        const next = current.next

        if (current.val < x) {
            leftEnd = insertNode(leftEnd, current, rightHead);
            if (!leftHead) leftHead = current
        } else {
            rightEnd = insertNode(rightEnd, current);
            if (!rightHead) rightHead = current;
        }

        current = next
    }
    if (leftEnd) leftEnd.next = rightHead
    return leftHead || rightHead || head
};

const setup = function (a) {
    let c, next;

    for (let i = a.length - 1; i >= 0; i--) {
        c = new ListNode(a[i])
        c.next = next
        next = c
    }

    return c;
}

const arr = [1, 4, 3, 2, 5, 2]
const val = 3
const list = setup(arr)

const displayList = function (head) {
    const res = []
    while (head) {
        res.push(head.val)
        head = head.next
    }
    return res
}

partition(list, val)