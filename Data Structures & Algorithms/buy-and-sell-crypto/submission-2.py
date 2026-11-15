class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy = prices[0]
        profit = 0
        
        for i in range(1, len(prices)):
            today_price = prices[i]
            potential_profit = today_price - buy

            if today_price < buy:
                buy = today_price

            if potential_profit > profit:
                profit = potential_profit

        return profit
        