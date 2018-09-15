import java.util.*;

public class Main {
    public static long NumberOf1(long n) {
        long count = 0;
        while (n != 0) {
            n = n & (n - 1);
            count++;
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        long num;
        num = sc.nextLong();

        long result;
        result = NumberOf1(num);

        System.out.println(result);

        sc.close();
    }
}