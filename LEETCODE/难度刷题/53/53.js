/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxsum=nums[0],sum=0
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        maxsum = Math.max(sum,maxsum)
        if(sum < 0){
            sum = 0
        }
    }
    return maxsum
};





/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxsum=nums[0],sum=0
    for(let i = 0; i < nums.length; i++){
        sum = Math.max(sum+nums[i],nums[i])
        maxsum = Math.max(sum,maxsum)
    }
    return maxsum
};

// 优化写法后
// 执行用时：76 ms
// 内存消耗：35.2 MB



/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxsum=nums[0],sum=0
    nums.forEach((x) => {
        sum = Math.max(sum+x,x)
        maxsum = Math.max(sum,maxsum)
    })
    return maxsum
};
// 执行用时：64 ms
// 内存消耗：34.9 MB