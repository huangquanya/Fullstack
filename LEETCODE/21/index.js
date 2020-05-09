/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 === null){
        return l2
    }else if( l2 === null){
        return l1
    }else if (l1.val < l2.val ){
        l1.next = mergeTwoLists(l1.next,l2)
        return l1;
    }else {
        l2.next = mergeTwoLists(l1,l2.next)
        return l2;
    }
};
// 使用递归选择较小的节点，直到一个为空达到临界节点，直接返回另一链表剩下的全部节点


// 使用迭代的方法，比较两个链的当前节点，然后指向较小的节点，指向较小链下一个节点，最后会剩下的选择不为空的接在最后
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const prehead = new ListNode(-1);
    let pre = prehead;
    while(l1 !== null && l2 !== null ){
        if(l1.val < l2.val ){
            pre.next = l1;
            l1 = l1.next;
        }else{
            pre.next = l2;
            l2 = l2.next
        }
        pre = pre.next;
    }
    l1 ===null ? pre.next = l2: pre.next = l1;
    return prehead.next
};