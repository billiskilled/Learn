import java.util.*;

public class Solution2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n, target;
        n = sc.nextInt();
        target = sc.nextInt();

        int[] orderId = new int[n];
        int[] startTimes = new int[n];
        int[] endTimes = new int[n];

        int[] result = new int[n];
        int resultNum = 0;

        for (int i = 0; i < n; i++) {
            orderId[i] = sc.nextInt();
            startTimes[i] = sc.nextInt();
            endTimes[i] = sc.nextInt();

            if (startTimes[i] <= target && target <= endTimes[i]) {
                result[resultNum++] = orderId[i];
            }
        }

        Arrays.sort(result);

        for (int i = 0; i < n; i++) {
            if (result[i] != 0) {
                System.out.println(result[i]);
            }
        }
    }
}

// 10
// 20180602
// 1001 20180103 20180105
// 1002 20180202 20180203
// 1003 20180304 20180306
// 1004 20180401 20180408
// 1005 20180501 20180504
// 1006 20180601 20180604
// 1007 20180705 20180706
// 1008 20180801 20180804
// 1009 20180903 20180903
// 1010 20181003 20181003