class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        occurences = defaultdict(int)
        shelves = [[] for _ in range(len(nums) + 1)]
        flat = []

        for num in nums:
            occurences[num] += 1
        
        for key, value in occurences.items():
            shelves[value].append(key)

        for shelve in shelves:
            for x in shelve:
                flat.append(x)

        return flat[::-1][:k]


        