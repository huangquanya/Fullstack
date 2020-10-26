var sortList = function(head){
    let length = len(head);
    if(length<=1)return head;
    let mid = Math.floor(length/2);
    let l1 = new ListNode(null),l2 = new ListNode(null)
    let l1c = l1, l2c =l2
    let current = head, i = 1;
    while(current){
        if(i<=mid){
            l1c.next = current;
            l1c = l1c.next;
        }else{
            l2c.next = current
            l2c = l2c.next
        }
        i++
        current = current.next
    }
    l1c.next = null;
    mergeTwoLists(sortList(l1.next),sortList(l2.next))
}
var len = function(list){
    let i = 0, current = list;
    while(current){
        i++;
        current = current.next;
    }
    return i;
}

var mergeTwoLists = function(l1, l2) {
    let dummyHeader = new ListNode(null)
    let current = dummyHeader
    while(l1 && l2){
        if(l1.val<l2.val){
            current.next = l1
            l1 = l1.next
        }else{
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }
    if(l1)current.next = l1
    if(l2)current.next = l2
    return dummyHeader.next
};