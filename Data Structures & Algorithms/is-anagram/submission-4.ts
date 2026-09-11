class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const count: Record<string, number> = {};

        for (let i = 0; i < s.length; i++) {
            const sChar = s[i];
            const tChar = t[i];

            count[sChar] = (count[sChar] ?? 0) + 1;
            count[tChar] = (count[tChar] ?? 0) - 1;
        }

        return Object.values(count).every(value => value === 0);
    }
}
