class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const hashmap = {};

    for (let num of nums) {
      hashmap[num] = 1;
    }

    let start = [];
    let longest = 0;
    let counter = 1;

    for (let num of nums) {
      if (!hashmap[num - 1]) start.push(num);
    }

    for (let num of start) {
      console.log(num);
      while (Object.keys(hashmap).includes(`${num + 1}`)) {
        counter += 1;
        num = num + 1;
      }
      longest = counter > longest ? counter : longest;
      counter = 1;
    }

    return longest;
  }
}
