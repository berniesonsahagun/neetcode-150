class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const sHashmap = {};
    const tHashmap = {};

    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
      if (sHashmap[s.charAt(i)]) sHashmap[s.charAt(i)] += 1;
      else {
        sHashmap[s.charAt(i)] = 1;
      }
    }

    for (let i = 0; i < t.length; i++) {
      if (tHashmap[t.charAt(i)]) tHashmap[t.charAt(i)] += 1;
      else {
        tHashmap[t.charAt(i)] = 1;
      }
    }

    for (const [key, value] of Object.entries(sHashmap)) {
      if (!tHashmap[key] || tHashmap[key] !== value) return false;
    }

    return true;
  }
}
