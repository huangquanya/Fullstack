58. 最后一个单词的长度
给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。

如果不存在最后一个单词，请返回 0 。

说明：一个单词是指仅由字母组成、不包含任何空格字符的 最大子字符串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/length-of-last-word
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解题思路
先上通过记录
>执行用时 :52 ms, 在所有 JavaScript 提交中击败了98.29%的用户
>内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了60.00%的用户

- 首先利用trim（）处理有字母时前后空格的情况，当字符串全为空格时，tirm（）方法会只留下1个空格。
- lastindexOf（）来找到最后一个字符串前的空格的位置，再加1即为目标字符串的位置
- 处理后的字符串长减掉目标字符串的第一个字母的坐标即为长度（tips：lastindexOf返回的位置值是从0开始计算的位置值，即字符串中第一个字符的位置值为0）
- 转换成下面的样子更方便大家理解：
> s.length - （s.lastIndexOf(' ') + 1）;

作者：zi-yi-wei-shi-de-yellow
链接：https://leetcode-cn.com/problems/length-of-last-word/solution/liang-xing-dai-ma-jie-jue-wen-ti-zhi-xing-yong-shi/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。