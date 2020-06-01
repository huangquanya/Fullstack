/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    const helper = function(root) {
         if(root === null)return 0;
         let left = helper(root.left)
         let right = helper(root.right)
         return Math.max(left,right)+1;
     }
     if(!root)return true;
    return Math.abs(helper(root.right)-helper(root.left))<2
    &&isBalanced(root.left)&&isBalanced(root.right)
 };