class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       
            const count = new Map();
            for (const num of nums){
                count.set(num, (count.get(num)|| 0) + 1);
            }
            const numbers = [...count.keys()];
            numbers.sort((a,b)=> count.get(b)- count.get(a));
            return numbers.slice(0,k);


        
        
    }
}
