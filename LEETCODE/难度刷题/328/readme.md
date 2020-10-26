Analyze

       cur    next
Input:  1  ->  2  ->  3  ->  4  ->  5  ->  NULL
       prev   cur    next
        1  ->  2  ->  3  ->  4  ->  5  ->  NULL
                      .
                      .
                            prev   cur    next  遍历完成后, 如果此时是奇数位则将 cur 的指针指向偶数列表。
        1  ->  2  ->  3  ->  4  ->  5  ->  NULL


Output: 1  ->  3  ->  5  ->  2  ->  4  ->  NULL

将 prev 的 next 指向 next;
将奇数链表与偶数链表进行链接(末尾的链表可能为奇数位也可能为偶数位)


