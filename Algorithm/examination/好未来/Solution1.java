import java.util.*;

public class Solution1 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        char[] chars = in.nextLine().toCharArray();
        int[] ints = new int[chars.length];

        for (int i = 0; i < chars.length; i++) {
            ints[i] = chars[i] - '0';
        }

        int m = 0;

        for (int i = 0; i < ints.length; i++) {
            if (ints[i] % 3 == 0) {
                m += 1;
            } else {
                if (i + 1 == ints.length) {
                    break;
                }
                ints[i + 1] += ints[i] * 10;
            }
        }

        System.out.println(m);
    }
}