class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const hashmap = {};
    const arr = [];
    for (let num of nums) {
      if (!hashmap[num]) hashmap[num] = 0;
      hashmap[num] += 1;
    }
    const sortedHash = [...Object.entries(hashmap)].sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
      arr.push(sortedHash[i][0]);
    }
    return arr;
  }
}
