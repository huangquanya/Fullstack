// 分治
// 归并排序  
function merge(arr1,arr2){
    let res = [];
    while(arr1.length&&arr2.length){
        if(arr1[0]<arr2[0]){
            res.push(arr1.shift())
        }else{
            res.push(arr2.shift())
        }
    }
    if(arr1.length){
        res = res.concat(arr1)
    }else if(arr2.length){
        res = res.concat(arr2)
    }
    return res
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

// 快速排序
// 每次都把大数换到右边,小数换到左边 堆 log级
// 