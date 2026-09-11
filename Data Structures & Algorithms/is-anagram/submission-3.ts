class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) {
            return false;
        }

        const hash = {}

        for (let i = 0; i < s.length; i++) {
            let sValue = s[i];
            let tValue = t[i];

            if (!hash[sValue]) {
                hash[sValue] = 0
            }
            if (!hash[tValue]) {
                hash[tValue] = 0
            }
            hash[sValue] += 1;
            hash[tValue] -= 1;
        }
        

        for (const sValue in hash) {
            if (hash[sValue] < 0) {
                return false;
            } 
        }
        return true
    }
}
