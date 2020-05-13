/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1){return '1'}
    else{
        let str = countAndSay(n-1);
        let same = str[0];
        let s = '';
        let count = 0;
        let i
        for(i = 0; i < str.length; i++){
            if(str[i] === same){
                count = count + 1;
            }
            else{               
                s = s.concat(String(count),same);
                same = str[i];
                count = 1;
            }
            if(i=== str.length-1) s = s.concat(String(count),same);
        }
        return s;
    }
};
