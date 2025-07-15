class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const hashmap = {};
    const anagrams = [];

    for (let i = 0; i < strs.length; i++) {
      if (anagrams.length === 0) {
        anagrams.push([strs[i]]);
        hashmap[strs[i]] = {};
        for (let j = 0; j < strs[i].length; j++) {
          if (!hashmap[strs[i]][j]) hashmap[strs[i]][j] = 1;
          else hashmap[strs[i]][j] += 1;
        }
      } else {
        for (let j = anagrams.length - 1; j >= 0; j--) {
          const key = anagrams[j][0];
          const hashmapChars = hashmap[key];

          if (key.length !== strs[i].length) {
            continue;
          } else {
            for (let k = 0; k < strs[i].length; k++) {}
          }
        }
      }
    }
  }
}
