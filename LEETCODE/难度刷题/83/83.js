/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let cur = head;
    while(cur&&cur.next){
        if(cur.val === cur.next.val){
            cur.next = cur.next.next
        }else{
            cur = cur.next
        }
    }
    return head
};

// 执行用时 :80 ms, 在所有 JavaScript 提交中击败了66.15%的用户
// 内存消耗 :35.6 MB, 在所有 JavaScript 提交中击败了100.00%的用户