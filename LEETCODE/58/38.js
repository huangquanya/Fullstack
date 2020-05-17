/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    return s.length - s.lastIndexOf(' ') - 1;
};
// 执行用时 内存消耗
// 52 ms	33.7 MB


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let num = s.length;
    let index = s.lastIndexOf(' ') + 1;
    let sub = num - index
    return sub
};
// 执行用时 内存消耗
// 68 ms	33.8 MB