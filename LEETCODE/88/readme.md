88. 合并两个有序数组

给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

 

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

先用splice将num2合并到num1里去,再使用sort函数将数组排序得到排序数组

执行用时 :68 ms, 在所有 JavaScript 提交中击败了69.70%的用户
内存消耗 :33 MB, 在所有 JavaScript 提交中击败了100.00%的用户