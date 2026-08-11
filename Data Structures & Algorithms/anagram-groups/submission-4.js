class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

       /* for (let i=0; i < strs.length; i++){
            for (let j= j+1; j< strs.length; j++){
                const counts = {}
                 if (strs[i].length !== strs[j].length){
                        continue;
                 }
                 else
            }
           
        }*/
        const groups = new Map();
        for (const str of strs){
            const counts = {};

            for (const char of str){
                 counts [char] = (counts[char]|| 0) + 1// c:1

            }
            const key = Object.keys(counts)
            .sort()
            .map(char => char + counts[char])
            .join("")
            if (!groups.has(key)) {
            groups.set(key, [])
        }
        groups.get(key).push(str);
        }
        //groups.get("a1c1t1") = ["act"]//go to the map and give me the array associated to this key//.push(str)= add the words that have the same letters from the list (anagrams)
        return  Array.from(groups.values());//Array.from to convert the values from the map to an array
      //  .values() cuz we only want the arrays not the keys
    }
}
