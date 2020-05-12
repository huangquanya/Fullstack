## 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
> 你可以假设数组中无重复元素。

### 二分法解法思路
1. 初始区间的设置 left = 0 right = nums.length-1。
2. 当target大于nums中最大的元素时，返回的索引值在区间外，为nums.length，因
    此提前进行判断。
3. while循环的条件为left < right，当left = right时跳出循环。
4. 中位数选取左中位数使用无符号右移left + right >>> 1防止溢出 （也可选取
    右中位数，但if-else也需要同时修改）
5.  在选取了左中位数的基础上，if-else需要保证左边界收缩，因此先写
    left = index+1，再根据+1填写if括号中的条件为nums[index]<target，再补全else即可。
6. 由于只有在left = right时才能跳出循环，所以返回left``right均可。

