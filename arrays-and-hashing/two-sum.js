class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const hashMap = {};

    for (let i = 1; i < nums.length; i++) {
      hashMap[nums[i]] = i;
    }

    //The next pair for the two sum is equal to target - current number, look for it in the hashmap
    //i && j should not be equal
    for (let i = 0; i < nums.length; i++) {
      const difference = target - nums[i];
      const j = hashMap[difference];
      if (j && i !== j) return [i, j];
    }
  }
}
