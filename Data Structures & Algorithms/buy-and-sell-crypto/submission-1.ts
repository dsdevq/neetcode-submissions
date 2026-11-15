class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buy = prices[0], profit = 0;

        for (let i = 1; i < prices.length; i++) {
            let todayPrice = prices[i];
            let potentialProfit = todayPrice - buy;
            if (todayPrice < buy) {
                // Update buying price
                buy = todayPrice
            }

            if (potentialProfit > profit) {
                // Update maximum profit
                profit = potentialProfit
            }

        }
        return profit;        
    }
}
