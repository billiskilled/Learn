import java.util.*;

public class Main1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.close();

        int result = 0;

        for (int i = 0; i < n; i++) {
            char[] ch = new Integer(i).toString().toCharArray();
            int len = ch.length;

            for (int j = 0; j < len; j++) {
                char cur = ch[j];
                if (cur == '3' || cur == '4' || cur == '7') {
                    break;
                }
                if (j == len - 1 && includeValidNum(ch)) {
                    result++;
                }
            }
        }

        System.out.println(result);
    }

    static boolean includeValidNum (char[] a) {
        int len = a.length;
        for (int i = 0; i < len; i++) {
            if (a[i] == '2' || a[i] == '5' || a[i] == '6' || a[i] == '9') {
                return true;
            }
        }
        return false;
    }
}