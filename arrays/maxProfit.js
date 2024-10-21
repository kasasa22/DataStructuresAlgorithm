const maxProfit= (prices)=>{
    let maxProfit= 0;
    
    
    for (i =1; i < prices.length;i++){
        const curentPrice = prices[i];

        const minPrice =  Math.min(minPrice, curentPrice);

        const potentialProfit = curentPrice- minPrice;

        const maxProfit = Math.max(maxProfit, potentialProfit)

        console.log(maxProfit)
    }
    return maxProfit

}

const prices = [ 7,1,5,3,6,4]
const profit = maxProfit(prices)
console.log('Max Profit is:' , profit)