class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
            const counts =  {}; //create an empty object to store the letters
            for (let ch of s){
                counts[ch] = (counts[ch]|| 0 ) + 1 
            }
            for (let ch of t){
                if (!counts[ch]) return false;
                
                counts[ch]--;
            }
            return true;
        
            
    }
}
