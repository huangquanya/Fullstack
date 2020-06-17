/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let queue = [root]
    let res = []
    while(queue.length){
        let rowNode = queue.splice(0);
        let cell = []
        for (let node of rowNode) {
            cell.push(node.val)
            for(let child of node.children) {
                queue.push(child)
            }
        }
        res.push(cell)
    }
    return res
};