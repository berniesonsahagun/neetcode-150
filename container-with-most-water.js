class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let i = 0,
      j = heights.length - 1;
    let highest = 0,
      current;

    while (i !== j) {
      current = Math.min(heights[i], heights[j]) * (j - i);
      if (current > highest) highest = current;
      if (heights[i] > heights[j]) {
        j--;
      } else {
        i++;
      }
    }

    return highest;
  }
}

const sol = new Solution();
const res = sol.maxArea([1, 7, 2, 5, 4, 7, 3, 6]);
console.log(res);
