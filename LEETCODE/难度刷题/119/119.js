/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1]
    if(rowIndex === 1) return [1,1]
    let pre = [1,1],now = []
    for(let i = 2; i <= rowIndex; i++){
        for(let j = 0; j <= i; j++){
            if(j === 0 || j === i){
                now[j] = 1
            } else{
                now[j] = pre[j-1]+pre[j]
            }
        }
        pre = [...now];
    }
    return pre
};


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1]
    let pre = [1]
    for(let i = 0; i < rowIndex; i++){
        pre.unshift(0);
        for(let j = 0; j < i+1; j++){
            pre[j] = pre[j]+pre[j+1]
        }
    }
    return pre
};