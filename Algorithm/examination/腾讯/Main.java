import java.util.*;

public class Main {
    static HashMap<String, Long> map = new  HashMap<String, Long> ();
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long n = sc.nextLong();
        sc.close();

        long m = n;
        while (true) {
            m++;

            long[] first = new long[(int)(m - n)];
            long[] second = new long[(int)m];

            for (int i = 0; i < m - n; i++) {
                first[i] = n + i + 1;
            }

            for (int i = 0; i < m; i++) {
                second[i] = i + 1;
            }

            if (lcmMultiple(first) == lcmMultiple(second)) {
                break;
            }
        }

        System.out.println(m);
    }

    // 求多个数的最小公倍数
    public static long lcmMultiple(long[] a) {
        long value = a[0];
        for (int i = 1; i < a.length; i++) {
            String theString = "" + value + "," + a[i];
            String theString2 = "" + a[i] + "," + value;
            if (map.get(theString) != null) {
                value = map.get(theString);
            } else if (map.get(theString2) != null) {
                value = map.get(theString2);
            } else {
                value = lcm(value, a[i]);
                map.put(theString, value);
            }
        }
        return value;
    }

    // 求最大公约数
    public static long gcd (long a, long b) {
        if(a < b) {
            long tmp = a;
            a = b;
            b = tmp;
        }
        long c;
        while((c = a % b) != 0) {
            a = b;
            b = c;
        }

        return b;
    }

    // 求最小公倍数
    public static long lcm(long a, long b) {
        return a * b / gcd(a, b);
    }
}