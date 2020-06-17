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
var levelOrder = function(root) {
    if(!root) return []
    let queue = [root]
    let res = []
    let rever = true
    while(queue.length){
        let rowNodes = queue.splice(0)
        let cell = []
        for(let node of rowNodes){
            cell.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        (rever = !rever) ? res.push(cell.reverse()) : res.push(cell);
    }
    return res
};