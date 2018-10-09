import java.util.*;

public class Main {
    static Map<String, Long> map = new HashMap<String, Long>();

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        sc.close();

        Long maxResult = Long.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            addArr(arr, 0, i);
        }

        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                if (addArr(arr, 0, i) == addArr(arr, j, n)) {
                    maxResult = Math.max(maxResult, addArr(arr, 0, i));
                }
            }
        }

        System.out.println(maxResult == Long.MIN_VALUE ? 0 : maxResult);
    }

    static long addArr(int[] a, int start, int end) {
        if (map.get("" + start + "," + end) != null) {
            return map.get("" + start + "," + end);
        } else {
            if ((map.get("0," + end) != null) && (map.get("0," + start) != null)) {
                return map.get("0," + end) - map.get("0," + start);
            } else {
                long sum = 0;

                while (start < end) {
                    sum += a[start++];
                }

                map.put("" + start + "," + end, sum);

                return sum;
            }
        }
    }
}