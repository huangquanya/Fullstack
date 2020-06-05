118. 杨辉三角
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif

在杨辉三角中，每个数是它左上方和右上方的数的和。

执行用时 :68 ms, 在所有 JavaScript 提交中击败了54.33%的用户
内存消耗 :32.5 MB, 在所有 JavaScript 提交中击败了100.00%的用户

## 解题思路
根据公式可很快设计出算法， 需注意二维数组中得到某行某列的元素的书写为arr[i][j]