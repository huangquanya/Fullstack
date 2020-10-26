/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,n,...nums2)
    return nums1.sort((a,b) => a-b)
    };
    // 执行用时 :68 ms, 在所有 JavaScript 提交中击败了69.70%的用户
    // 内存消耗 :33 MB, 在所有 JavaScript 提交中击败了100.00%的用户

    /**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;
     //注意符号在后面，表示先进行计算再减1，这种缩写缩短了代码
    while(len1 >= 0 && len2 >= 0) {    
        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
    }
    function arrayCopy(src, srcIndex, dest, destIndex, length) {
    dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
}
// 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
arrayCopy(nums2, 0, nums1, 0, len2 + 1);
};