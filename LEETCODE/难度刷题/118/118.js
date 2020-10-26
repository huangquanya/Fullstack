/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let i,arr = []
    for(i = 0; i < numRows; i++){
        let now = [];
        for(let j = 0; j < i+1; j++){
            if(j === 0 || i === j){
                now[j] = 1;
                } else{
                now[j] =  arr[i-1][j-1] + arr[i-1][j]
            }
        }
         arr[i] = now;
    }
    return arr
};