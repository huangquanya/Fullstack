119. 杨辉三角 II
给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 3
输出: [1,3,3,1]

解题思路：
这个解法真是看起来容易其实里面有很多的细节
首先做过杨辉三角的都知道某一行的某个位置的值等于上一行这个位置的值再加上前一位的值
而题目要求我们不使用额外空间所以这里做的就是就地对同一个集合的相同位置进行来回替换
list.unshift(0)
list[j] = list[j] + list[j+1]
// 这一句代码是关键 我之前是把它看成是一维数组结果怎么都理解不了
// 其实这一句代码是分两部分
// list[j] 为当前行 ，list[j] + list[j+1]为上一行的数据
// 这样我们当前行的每一个位置都可以通过上一行的数据来计算出来
list[j] = list[j] + list[j+1]
再然后一个比较重要的细节就是每一次对上一行的数组前面补0
可以看到补0后虽然数组的长度改变了但我们for循环里面的临界条件j < i+1
是不会跟随长度改变而改变的，所以 本来要计算到数组最后一位，现在只需要计算到倒数第二位
这样最后一位的1就被保存了下来
