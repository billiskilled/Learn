import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String line = sc.nextLine();

        sc.close();

        String[] strArr = line.split("\"");

        String v1 = strArr[1];
        String v2 = strArr[3];

        String[] v1Arr = v1.split("\\.");
        String[] v2Arr = v2.split("\\.");

        int v1Len = v1Arr.length;
        int v2Len = v2Arr.length;

        int len = Math.min(v1Len, v2Len);

        for (int i = 0; i < len; i++) {
            if (Integer.parseInt(v1Arr[i]) > Integer.parseInt(v2Arr[i])) {
                System.out.println(1);
                return;
            } else if (Integer.parseInt(v1Arr[i]) < Integer.parseInt(v2Arr[i])) {
                System.out.println(-1);
                return;
            }
        }

        if (v1Len == v2Len) {
            System.out.println(0);
            return;
        } else if (v1Len > v2Len) {
            System.out.println(1);
                return;
        } else {
            System.out.println(-1);
                return;
        }
    }
}