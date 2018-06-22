var inorderTraversal = function(root) {
  const res = [];
  const stack = [];
  let done = false;

  if (!root) return res;
  while (!done) {
    while (root) {
      stack.push(root);
        root = root.left;
    }

    if (stack.length > 0) {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    } else {
      done = true;
    }
  }

  return res;
};
