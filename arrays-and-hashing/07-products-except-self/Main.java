class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] answer = new int[n];
        
        answer[0] = 1;
        for (int i = 1; i < n; i++) {
            answer[i] = nums[i - 1] * answer[i - 1];
        }

        int right = 1;
        for (int i = n - 1; i >= 0; i--) {
            answer[i] = answer[i] * right;
            right *= nums[i];
        }

        return answer;
    }
}  


public class Main {
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] input = {1, 2, 3, 4};
        int[] result = sol.productExceptSelf(input);

        for (int val : result) {
            System.out.print(val + " ");
        }
        System.out.println("");
    }
}