/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0, min = prices[0]
    for(let i in prices){
        i = Number(i)
        if(i === 0)continue;
        let price = prices[i]
        if (price - min > max)max = price - min;
        if (min > price)min = price;
    }
    return max
};