class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    const result = [];
    const hashmap = {};
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          const triplet = [nums[i], nums[j], nums[k]];
          if (hashmap[triplet.sort().join()]) continue;
          if (nums[i] + nums[j] + nums[k] === 0) {
            result.push(triplet);
            hashmap[triplet.sort().join()] = 1;
          }
        }
      }
    }

    return result;
  }
}

const sol = new Solution();
const res = sol.threeSum([-1, 0, 1, 2, -1, -4]);
console.log(res);
