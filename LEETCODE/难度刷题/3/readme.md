3. 无重复字符的最长子串
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

## 题解
- 解题思路： 使用一个数组来维护滑动窗口

遍历字符串，判断字符是否在滑动窗口数组里

不在则 push 进数组
在则删除滑动窗口数组里相同字符及相同字符前的字符，然后将当前字符 push 进数组
然后将 max 更新为当前最长子串的长度
遍历完，返回 max 即可
