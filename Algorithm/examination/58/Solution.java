public class Solution {
    public int share(int child) {
        int result = 2;
        for (int i = 9; i >= child; i--) {
            result = (result + 1) * 2;
        }
        return result;
    }
}