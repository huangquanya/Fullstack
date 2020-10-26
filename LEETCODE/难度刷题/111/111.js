/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null)return 0;
    let left = minDepth(root.right)
    let right = minDepth(root.left)
    return (left === 0 || right === 0) ? 1+left+right : Math.min(left, right)+1;
};