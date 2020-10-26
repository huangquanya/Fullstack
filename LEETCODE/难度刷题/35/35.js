/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i;
    for(i = 0; nums[i] <= target; i++) {
        if(nums[i] === target)return i;
    }
    return i
};
// 执行用时 :76 ms, 在所有 JavaScript 提交中击败了26.60%的用户
// 内存消耗 :34.4 MB, 在所有 JavaScript 提交中击败了43.48%的用户


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    if (target > nums[right]) return right + 1;
    while (left < right) {
        var index = parseInt((left + right) >>> 1);//取左中位数
        if (nums[index] < target) left = index + 1; //中位数小于目标值，削去区间左侧
        else right = index; //中位数大于等于目标值，削去区间右侧
    }
    return left;
}
// 执行用时：64 ms
// 内存消耗：33.9 MB