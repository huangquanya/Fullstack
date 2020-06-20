/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^A-Za-z0-9_]/g,'').toLowerCase();
    let left = 0; right = str.length-1;
    while(left < right) {
        if(str[right] !== str[left])return false;
        left++;
        right--;
    }
    return true;
};