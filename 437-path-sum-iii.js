// You are given a binary tree in which each node contains an integer value.
//
// Find the number of paths that sum to a given value.
//
// The path does not need to start or end at the root or a leaf,
// but it must go downwards (traveling only from parent nodes to child nodes).
//
// The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.
//
// Example:
//
// const root = [10,5,-3,3,2,null,11,3,-2,null,1];
// const sum = 8;

var pathSum = function(root, sum) {
  if (!root) return 0;

  return helpSum(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};

var helpSum = function(root, sum) {
  if (!root) return 0;

  let count = 0;
  if (root.val === sum) count++;

  return count + helpSum(root.left, sum - root.val) + helpSum(root.right, sum - root.val);
};

// pathSum(root, sum);
