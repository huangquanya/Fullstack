/*
 * @Author: 黄全亚
 * @Change: 黄全亚
 * @Date: 2020年10月26日
 * @Description: 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let hashNum = new Set();
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (hashNum.has(nums[i])){
            
        }else{
            hashNum.add(nums[i])
        }
    }
    return 
};