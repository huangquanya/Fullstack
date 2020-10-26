/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i
    let len = digits.length
    for(i = len -1; i >=0;i--){
        digits[i]++;
        digits[i] = digits[i]%10;
        if(digits[i]!== 0)return digits
    }
    digits.unshift(1)
    return digits
};
// 执行用时 :68 ms, 在所有 JavaScript 提交中击败了59.73%的用户
// 内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了90.00%的用户