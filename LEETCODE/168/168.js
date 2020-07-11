/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    const mode=(num)=>{
        if(num <= 26){return [num]}
        if(num%26 === 0){
            return mode((num/26)-1).concat([26]);
        }
        return mode(parseInt(num/26)).concat([num%26]);
    }
    return mode(n).map(num=>String.fromCharCode(num+65-1)).join('');
};