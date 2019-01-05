class HeapNode {
  constructor(person, bike, distance) {
    this.person = person;
    this.bike = bike;
    this.distance = distance;
  }
}

class Heap {
  constructor() {
    this.store = [];
  }

  count() {
    return this.store.length;
  }

  extract() {
    const count = this.count();
    [this.store[0], this.store[count - 1]] = [this.store[count - 1], this.store[0]];
    const popped = this.store.pop();
    // this.constructor.heapifyDown(this.store, 0);
    this.heapifyDown(this.store, 0);
    return popped;
  }

  peek() {
    return this.store[0];
  }

  push(node) {
    const count = this.count();
    this.store.push(node);
    // this.constructor.heapifyUp(this.store, count - 1);
    this.heapifyUp(this.store, count);
    return this.store;
  }

  // static childIndices(len, parentIdx) {
  childIndices(len, parentIdx) {
    const children = [];
    const child = (2 * parentIdx);
    if (child + 1 < len) children.push(child + 1);
    if (child + 2 < len) children.push(child + 2);
    return children;
  }

  // static parentIndex(childIdx) {
  parentIndex(childIdx) {
    if (childIdx === 0) return null;
    return Math.floor(childIdx - 1 / 2);
  }

  // static heapifyDown(store, parentIdx, length) {
  heapifyDown(store, parentIdx, length) {
    // const childrenIdxs = this.constructor.childIndices(length, parentIdx);
    const childrenIdxs = this.childIndices(length, parentIdx);
    if (childrenIdxs.length === 0) return store;

    const minChildIdx = Math.min(childrenIdxs);

    if (store[parentIdx].distance > store[minChildIdx].distance) {
      [store[parentIdx], store[minChildIdx]] = [store[minChildIdx], store[parentIdx]];
      // return this.constructor.heapifyDown(store, minChildIdx, length);
      return this.heapifyDown(store, minChildIdx, length);
    }

    return store;
  }

  // static heapifyUp(store, childIdx, length) {
  heapifyUp(store, childIdx, length) {
    if (childIdx === 0) return store;

    // const parentIdx = this.constructor.parentIndex(childIdx);
    const parentIdx = this.parentIndex(childIdx);

    if (store[parentIdx].distance > store[childIdx].distance) {
      [store[parentIdx], store[childIdx]] = [store[childIdx], store[parentIdx]];
      // return this.constructor.heapifyUp(store, parentIdx, length);
      return this.heapifyUp(store, parentIdx, length);
    }

    return store;
  }
}

module.exports = {
  HeapNode : HeapNode,
  Heap : Heap
};
