import java.util.*;

public class Solution5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] a = new int[100];

        a[1] = 5;
        a[2] = 1;
        a[3] = 3;
        a[4] = 4;
        a[5] = 9;
        a[6] = 7;
        a[7] = 6;
        a[8] = 8;

        int i = 1;
        // while (sc.hasNext()) {
        //     a[i++] = sc.nextInt();
        // }

        int sum = 0;
        int len = 0;
        int ans;
        
        for (int j = 1; j < 100; j++) {
            if (a[j] == 0 || j == 99) {
                len = j - 1;
                break;
            }
        }

        int[] temp = new int[len + 1];

        for (int j = 1; j <= len; j++) {
            ans = Integer.MIN_VALUE;
            for (int k = 0; k < i; k++) {
                if (a[j] > a[k]) {
                    ans = Math.max(ans, temp[k]);
                }
            }
            temp[j] = ans + a[j];
        }

        int result = Integer.MIN_VALUE;
        for (int j = 0; j <= len; j++) {
            result = Math.max(result, temp[j]);
        }
        System.out.println(result);

        sc.close();
    }
}