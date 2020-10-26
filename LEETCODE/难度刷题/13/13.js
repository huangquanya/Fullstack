/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
    let sum=0,loop=0,now,befor=0
    while(loop<s.length){
        now = map[s[loop]]
        if(now > befor){
            sum += now-2*befor
        }else {
            sum += now 
        }
        befor = now
        loop++
    }
    return sum
};