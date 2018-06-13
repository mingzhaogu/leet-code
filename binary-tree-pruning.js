// We are given the head node root of a binary tree,
// where additionally every node's value is either a 0 or a 1.
//
// Return the same tree where every subtree (of the given tree)
// not containing a 1 has been removed.
//
// (Recall that the subtree of a node X is X,
// plus every node that is a descendant of X.)

// Note:
//
// The binary tree will have at most 100 nodes.
// The value of each node will only be 0 or 1.

var pruneTree = function(root) {
  if(!root) return null;
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);

  if(root.val === 1 || root.left || root.right) return root;
  else return null;
};
