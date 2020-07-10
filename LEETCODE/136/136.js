// 解法思路1 不合空间复杂度要求
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = []
    nums.map(i=>{
        if(!(res.indexOf(i)+1)){
            res.push(i)
        }else{
            res.splice(res.indexOf(i),1)
        }
    })

    return res[0]
};

// 解法2
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((a,b)=>a^b)
};