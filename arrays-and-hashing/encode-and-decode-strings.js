class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let str = "";
    for (let s of strs) {
      str += `${s.length}#${s}`;
    }
    console.log(str);
    return str;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const arr = [];
    let charCounter = 0;
    let tempStr = "";

    for (let c of str) {
      console.log(charCounter, c);
      console.log("Temp:", tempStr);
      console.log("\n");

      if (charCounter === 0 && c === "#") {
        charCounter = parseInt(tempStr);
        tempStr = "";
        continue;
      }

      if (charCounter !== 0) {
        charCounter -= 1;
      } else {
        arr.push(tempStr);
        tempStr = "";
      }

      tempStr += c;
    }

    return arr;
  }
}
