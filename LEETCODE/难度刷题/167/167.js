/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let max = numbers.length-1,
    min = 0;
    while(min < max){
        if((numbers[min]+numbers[max]) === target){
            return [min+1,max+1]
        }else if((numbers[min]+numbers[max]) > target){
            max = max-1
        }else {
            min = min+1
        }
    }
};