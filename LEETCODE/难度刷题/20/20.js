/**
 * @param {string} s
 * @return {boolean}
 */
// 执行用时：80 ms
// 内存消耗：33.8 MB
var isValid = function(s) {
    let i;
    let model = {
        '(':')',
        '{':'}',
        '[':']'
    };
    let save = [];
    for( i = 0; i < s.length;i++){
        if(model[s[i]]){
            save.push(s[i])
        }else if(s[i] !== model[save.pop()]){
            return false
        }     
    }
    return save.length === 0
};

/**
 * @param {string} s
 * @return {boolean}
 */
// 执行用时：64 ms
// 内存消耗：33.4 MB
var isValid = function(s) {
    let i;
    let model = {
        '(':')',
        '{':'}',
        '[':']'
    };
    let save = [];
    for( i = 0; i < s.length;i++){
        if(s[i] === '('||s[i] === '['||s[i] === '{'){
            save.push(s[i])
        }else if(s[i] !== model[save.pop()]){
            return false
        }     
    }
    return save.length === 0
};