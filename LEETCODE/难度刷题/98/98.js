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

var isValidBST = function(root) {
    if(!root)return true
    var pre = -Infinity;
    return helper(root)
    function helper(root) {
        if(!root){return true;}
        if(!helper(root.left)){return false;}
        if(root.val<=pre){return false}
        pre = root.val;
        return helper(root.right)
    }
};