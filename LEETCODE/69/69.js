/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 0;
    while(i*i <= x){
        i++;
    }
    return i-1
};

// 二分法
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let min = 0, max = x;
   while(min <= max){
    let mid = Math.floor((max+min)/2);
    if(mid*mid <= x && (mid+1)*(mid+1) > x){
        return mid
    }else if(mid*mid < x){
        min = mid +1
    }else{
        max = mid -1
    }
   } 
};