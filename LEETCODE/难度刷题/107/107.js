/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let a = [],dep = 0;
    let helper = function(root,dep){
        if(root === null)return;
        a[dep] = a[dep] || [];
        a[dep].push(root.val)
        helper(root.left, dep+1);
        helper(root.right, dep+1);
    }
    helper(root,dep)
    return a.reverse()
};