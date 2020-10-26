/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let s = nums.sort((a,b)=>a-b)
    return nums[Math.floor(nums.length/2)]
};