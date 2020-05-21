/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let ans = "";
    let pre = 0,sum;
    let i = a.length-1;
    let j = b.length-1;
    for(;i>=0||j>=0;i--,j--){
        if(a[i]== null){
            sum = parseInt(b[j])+pre;
             pre = 0
            if(sum >1){
                sum = sum %2;
                ans += sum;
                pre = 1;
            }else{
                ans += sum +pre;
            }
        }
        else if(b[j] == null){
            sum = parseInt(a[i])+pre;
             pre = 0
            if(sum >1){
                sum = sum %2;
                ans += sum;
                pre = 1;
            }else{
                ans += sum +pre;
            }
        }
        else{
            sum = parseInt(a[i])+ parseInt(b[j]) + pre;
            pre = 0
            if(sum >1){
                sum = sum %2;
                ans += sum;
                pre = 1;
            }else{
                ans += sum +pre;
            }
        }
    }
    if(pre !== 0)ans+=1;    

    return ans.split('').reverse().join('')
};
// 执行用时 :76 ms, 在所有 JavaScript 提交中击败了67.67%的用户
// 内存消耗 :37.1 MB, 在所有 JavaScript 提交中击败了11.11%的用户


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let ans = "";
    let ca = 0;
    for(let i = a.length - 1, j = b.length - 1;i >= 0 || j >= 0; i--, j--) {
        let sum = ca;
        sum += i >= 0 ? parseInt(a[i]) : 0;
        sum += j >= 0 ? parseInt(b[j]) : 0;
        ans += sum % 2;
        ca = Math.floor(sum / 2);
    }
    ans += ca == 1 ? ca : "";
    return ans.split('').reverse().join('');
};
