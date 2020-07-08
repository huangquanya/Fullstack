/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    while(headA){
        headA.flag = true
        headA = headA.next
    }
    while(headB&&!headB.flag){
        headB = headB.next
    }
    if(headB){
        return headB
    }else{
        return null
    }
};