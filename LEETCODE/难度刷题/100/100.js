/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p == null && q == null)return true;
    if(p == null || q == null)return false;
    if(p.val != q.val){return false;}
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
};

// 执行用时 :72 ms, 在所有 JavaScript 提交中击败了32.85%的用户
// 内存消耗 :32.6 MB, 在所有 JavaScript 提交中击败了100.00%的用户