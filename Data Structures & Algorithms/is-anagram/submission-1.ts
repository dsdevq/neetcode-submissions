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

        const sHash = {}
        const tHash = {}

        for (let i = 0; i < s.length; i++) {
            let sValue = s[i];
            let tValue = t[i];

            sHash[sValue] = (sHash[sValue] || 0) +1;
            tHash[tValue] = (tHash[tValue] || 0) + 1;
        }

        for (const sValue in sHash) {
            if (sHash[sValue] !== tHash[sValue]) {
                return false;
            }
        }
        return true
    }
}
