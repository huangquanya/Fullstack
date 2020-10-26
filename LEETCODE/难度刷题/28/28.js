/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle=== '' )return 0;
    let ne = needle.length
    let i
    for(i = 0; i<= (haystack.length-ne); i++ ){
        if(haystack[i] === needle[0]){
            if(haystack.substring(i,ne+i) === needle){
                return i;
            }
        }
    }
    return -1
};