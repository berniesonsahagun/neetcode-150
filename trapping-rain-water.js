class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let i = 0,
      j = 1;
    let water = 0;
    let acc = 0;

    while (j < height.length) {
      if (height[j] >= height[i]) {
        water += acc;
        i = j;
        acc = 0;
      } else {
        acc += height[i] - height[j];
      }

      j++;
    }

    return water;
  }
}

const sol = new Solution();
const res = sol.trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(res);
