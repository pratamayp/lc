// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function inorderTraversal(root: TreeNode | null) {
  const result = [];
  helper(root, result);
  return result;
}

function helper(root, result) {
  if (root !== null) {
    helper(root.left, result);
    result.push(root.val);
    helper(root.right, result);
  }
}
