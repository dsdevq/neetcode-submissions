class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        occurences = defaultdict(int)

        for num in nums:
            occurences[num] += 1
        
        desc = sorted(occurences.items(), key=lambda item: item[1], reverse=True)

        return [item[0] for item in desc[:k]]