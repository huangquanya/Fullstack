/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head) return null;
    if(!head.next)return head
    let pre = head,
    cur = head.next,
    even = head.next
    next= cur.next||0;
    i = 0;
    if(next){
        while(next){
            i=i+1
            pre.next = next
            pre = cur
            cur = next
            next = next.next
        }

    }else{
        return head
    }
    if(i%2 === 1){
        pre.next = next;
        cur.next = even;
        return head;
    }else {
        pre.next = even;
        return head
    }
};