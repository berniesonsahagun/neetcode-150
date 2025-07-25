class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const formattedString = s
      .replaceAll(" ", "")
      .toLowerCase()
      .replaceAll(/[^a-zA-Z0-9]/g, "");

    let j = formattedString.length - 1;
    let isPalindrome = true;

    for (let i = 0; i < formattedString.length; i++) {
      if (formattedString[i] !== formattedString[j]) isPalindrome = false;
      j--;
    }

    return isPalindrome;
  }
}
