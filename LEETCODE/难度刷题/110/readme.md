110. 平衡二叉树

给定一个二叉树，判断它是否是高度平衡的二叉树。
本题中，一棵高度平衡二叉树定义为：
一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
示例 1:
给定二叉树 [3,9,20,null,null,15,7]
    3
   / \
  9  20
    /  \
   15   7
返回 true 。
示例 2:
给定二叉树 [1,2,2,3,3,null,null,4,4]
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/balanced-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 题解
1. 定义一个helper来得到当前节点的高度
2. 通过递归调用isbalanced（）来判断树中每一个节点的左右子是否相等
3. 设置终点， 当递归到没有子节点时，说明从传入的节点到底部的节点都符合要求，返回true
if(!root)return true;

执行用时 :96 ms, 在所有 JavaScript 提交中击败了23.17%的用户
内存消耗 :39.8 MB, 在所有 JavaScript 提交中击败了50.00%的用户

### 优化点
从根部开始一步步往下找会造成大量的重复计算当前节点的高度



