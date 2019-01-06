class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

  next(node) {
    this.next = node;
  }
}

function CircularlyLinkedList(inputArray) {
    const head = new Node(inputArray[0]);
    let previous = head;

    for (let i = 1; i < inputArray.length; i++) {
        const node = new Node(inputArray[i]);
        previous.next = node;
        previous = node;
    };

    previous.next = head;
    return head;
}

module.exports = {
    Node: Node,
    CircularlyLinkedList: CircularlyLinkedList
};