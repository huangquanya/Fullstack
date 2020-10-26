
递归

var reverseList = function(head) {
    if(head.next === null){
        return head
    }
    let cur = reverseList(head.next)
    
    head.next.next = head
    head.next = null;
    return cur
};

迭代

var reverseList = function(head) {
    if(!head) return head
    let pre = null
    let cur = head
    while(cur){
        head = head.next
        cur.next = pre
        pre = cur
        cur = head
        // [cur.next,pre,cur] = [pre,cur,cur.next] //性能不好，花里胡哨
    }
    return pre
};